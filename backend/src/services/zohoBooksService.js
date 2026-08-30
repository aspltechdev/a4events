const axios = require("axios");

const ZOHO_ACCOUNTS_URL =
  "https://accounts.zoho.eu";

const ZOHO_BOOKS_URL =
  "https://www.zohoapis.eu/books/v3";

const getAccessToken = async () => {
  const response =
    await axios.post(
      `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
      null,
      {
        params: {
          refresh_token:
            process.env.ZOHO_REFRESH_TOKEN,

          client_id:
            process.env.ZOHO_CLIENT_ID,

          client_secret:
            process.env.ZOHO_CLIENT_SECRET,

          grant_type:
            "refresh_token",
        },
      }
    );

  return response.data.access_token;
};

// =====================================================
// CREATE / FIND CUSTOMER
// =====================================================

const findOrCreateCustomer = async (
  order,
  accessToken
) => {
  const headers = {
    Authorization:
      `Zoho-oauthtoken ${accessToken}`,
  };

  const params = {
    organization_id:
      process.env.ZOHO_ORGANIZATION_ID,
    email: order.email,
  };

  const existing =
    await axios.get(
      `${ZOHO_BOOKS_URL}/contacts`,
      {
        headers,
        params,
      }
    );

  const contacts =
    existing.data.contacts || [];

  if (contacts.length > 0) {
    return contacts[0];
  }

  const customerResponse =
    await axios.post(
      `${ZOHO_BOOKS_URL}/contacts`,
      {
        contact_name:
          `${order.firstName} ${order.lastName}`,

        contact_type:
          "customer",

        email:
          order.email,

        phone:
          `${order.countryCode} ${order.phone}`,

        billing_address: {
          address:
            order.addressLine1,

          street2:
            order.addressLine2 || "",

          city:
            order.city,

          state:
            order.state || "",

          zip:
            order.postalCode,

          country:
            order.country,
        },
      },
      {
        headers,

        params: {
          organization_id:
            process.env.ZOHO_ORGANIZATION_ID,
        },
      }
    );

  return customerResponse
    .data
    .contact;
};

// =====================================================
// CREATE INVOICE
// =====================================================

const createZohoInvoice = async (
  order
) => {
  const accessToken =
    await getAccessToken();

  const customer =
    await findOrCreateCustomer(
      order,
      accessToken
    );

  const headers = {
    Authorization:
      `Zoho-oauthtoken ${accessToken}`,

    "Content-Type":
      "application/json",
  };

  const lineItems =
    order.items.map((item) => ({
      name:
        item.productTitle,

      description:
        item.productTitle,

      rate:
        Number(item.price),

      quantity:
        Number(item.quantity),
    }));

  const invoiceResponse =
    await axios.post(
      `${ZOHO_BOOKS_URL}/invoices`,
      {
        customer_id:
          customer.contact_id,

        reference_number:
          order.orderNumber,

        line_items:
          lineItems,

        notes:
          "Payment proof submitted by customer. Payment verification pending.",

        terms:
          "Payment verification takes 2–3 working days.",
      },
      {
        headers,

        params: {
          organization_id:
            process.env.ZOHO_ORGANIZATION_ID,
        },
      }
    );

  return {
    customer,
    invoice:
      invoiceResponse.data.invoice,
  };
};

module.exports = {
  getAccessToken,
  findOrCreateCustomer,
  createZohoInvoice,
};