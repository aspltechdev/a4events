// const axios = require("axios");

// const ZOHO_ACCOUNTS_URL =
//   "https://accounts.zoho.eu";

// const ZOHO_BOOKS_URL =
//   "https://www.zohoapis.eu/books/v3";

// const getAccessToken = async () => {
//   const response =
//     await axios.post(
//       `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
//       null,
//       {
//         params: {
//           refresh_token:
//             process.env.ZOHO_REFRESH_TOKEN,

//           client_id:
//             process.env.ZOHO_CLIENT_ID,

//           client_secret:
//             process.env.ZOHO_CLIENT_SECRET,

//           grant_type:
//             "refresh_token",
//         },
//       }
//     );

//   return response.data.access_token;
// };

// // =====================================================
// // CREATE / FIND CUSTOMER
// // =====================================================

// const findOrCreateCustomer = async (
//   order,
//   accessToken
// ) => {
//   const headers = {
//     Authorization:
//       `Zoho-oauthtoken ${accessToken}`,
//   };

//   const params = {
//     organization_id:
//       process.env.ZOHO_ORGANIZATION_ID,
//     email: order.email,
//   };

//   const existing =
//     await axios.get(
//       `${ZOHO_BOOKS_URL}/contacts`,
//       {
//         headers,
//         params,
//       }
//     );

//   const contacts =
//     existing.data.contacts || [];

//   if (contacts.length > 0) {
//     return contacts[0];
//   }

//   const customerResponse =
//     await axios.post(
//       `${ZOHO_BOOKS_URL}/contacts`,
//       {
//         contact_name:
//           `${order.firstName} ${order.lastName}`,

//         contact_type:
//           "customer",

//         email:
//           order.email,

//         phone:
//           `${order.countryCode} ${order.phone}`,

//         billing_address: {
//           address:
//             order.addressLine1,

//           street2:
//             order.addressLine2 || "",

//           city:
//             order.city,

//           state:
//             order.state || "",

//           zip:
//             order.postalCode,

//           country:
//             order.country,
//         },
//       },
//       {
//         headers,

//         params: {
//           organization_id:
//             process.env.ZOHO_ORGANIZATION_ID,
//         },
//       }
//     );

//   return customerResponse
//     .data
//     .contact;
// };

// // =====================================================
// // CREATE INVOICE
// // =====================================================

// const createZohoInvoice = async (
//   order
// ) => {
//   const accessToken =
//     await getAccessToken();

//   const customer =
//     await findOrCreateCustomer(
//       order,
//       accessToken
//     );

//   const headers = {
//     Authorization:
//       `Zoho-oauthtoken ${accessToken}`,

//     "Content-Type":
//       "application/json",
//   };

//   const lineItems =
//     order.items.map((item) => ({
//       name:
//         item.productTitle,

//       description:
//         item.productTitle,

//       rate:
//         Number(item.price),

//       quantity:
//         Number(item.quantity),
//     }));

//   const invoiceResponse =
//     await axios.post(
//       `${ZOHO_BOOKS_URL}/invoices`,
//       {
//         customer_id:
//           customer.contact_id,

//         reference_number:
//           order.orderNumber,

//         line_items:
//           lineItems,

//         notes:
//           "Payment proof submitted by customer. Payment verification pending.",

//         terms:
//           "Payment verification takes 2–3 working days.",
//       },
//       {
//         headers,

//         params: {
//           organization_id:
//             process.env.ZOHO_ORGANIZATION_ID,
//         },
//       }
//     );

//   return {
//     customer,
//     invoice:
//       invoiceResponse.data.invoice,
//   };
// };

// module.exports = {
//   getAccessToken,
//   findOrCreateCustomer,
//   createZohoInvoice,
// };


const axios = require("axios");

// =====================================================
// ZOHO CONFIG
// =====================================================

const ZOHO_ACCOUNTS_URL =
  "https://accounts.zoho.eu";

const ZOHO_BOOKS_URL =
  "https://www.zohoapis.eu/books/v3";


// =====================================================
// GET ACCESS TOKEN
// =====================================================

const getAccessToken = async () => {
  try {
    if (
      !process.env.ZOHO_REFRESH_TOKEN ||
      !process.env.ZOHO_CLIENT_ID ||
      !process.env.ZOHO_CLIENT_SECRET
    ) {
      throw new Error(
        "Zoho OAuth environment variables are missing"
      );
    }

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

          timeout: 15000,
        }
      );

    if (
      !response.data ||
      !response.data.access_token
    ) {
      console.error(
        "ZOHO TOKEN RESPONSE:",
        response.data
      );

      throw new Error(
        "Zoho access token was not returned"
      );
    }

    return response.data.access_token;

  } catch (error) {

    console.error(
      "ZOHO ACCESS TOKEN ERROR:"
    );

    console.error(
      error.response?.data ||
      error.message
    );

    throw error;
  }
};


// =====================================================
// ZOHO HEADERS
// =====================================================

const getHeaders = (
  accessToken
) => ({
  Authorization:
    `Zoho-oauthtoken ${accessToken}`,

  "Content-Type":
    "application/json",
});


// =====================================================
// ZOHO ORGANIZATION ID
// =====================================================

const getOrganizationId = () => {

  const organizationId =
    process.env.ZOHO_ORGANIZATION_ID;

  if (!organizationId) {

    throw new Error(
      "ZOHO_ORGANIZATION_ID is missing"
    );

  }

  return organizationId;
};


// =====================================================
// FIND CUSTOMER BY EMAIL
// =====================================================

const findCustomerByEmail = async (
  order,
  accessToken
) => {

  const headers =
    getHeaders(accessToken);

  const organizationId =
    getOrganizationId();

  try {

    const response =
      await axios.get(
        `${ZOHO_BOOKS_URL}/contacts`,
        {
          headers,

          params: {
            organization_id:
              organizationId,

            email:
              order.email,
          },

          timeout: 15000,
        }
      );

    const contacts =
      response.data?.contacts || [];

    if (
      contacts.length > 0
    ) {

      console.log(
        "Existing Zoho customer found:",
        contacts[0].contact_id
      );

      return contacts[0];

    }

    return null;

  } catch (error) {

    console.error(
      "ZOHO FIND CUSTOMER ERROR:"
    );

    console.error(
      error.response?.data ||
      error.message
    );

    throw error;
  }
};


// =====================================================
// CREATE CUSTOMER
// =====================================================

const createCustomer = async (
  order,
  accessToken
) => {

  const headers =
    getHeaders(accessToken);

  const organizationId =
    getOrganizationId();

  const customerName =
    `${order.firstName} ${order.lastName}`
      .trim();

  const customerData = {

    contact_name:
      customerName,

    contact_type:
      "customer",

    email:
      order.email,

    phone:
      `${order.countryCode || ""} ${order.phone || ""}`
        .trim(),

    billing_address: {

      address:
        order.addressLine1 || "",

      street2:
        order.addressLine2 || "",

      city:
        order.city || "",

      state:
        order.state || "",

      zip:
        order.postalCode || "",

      country:
        order.country || "",

    },

  };


  // ===============================================
  // COMPANY / VAT
  // ===============================================

  if (
    order.companyName
  ) {

    customerData.company_name =
      order.companyName;

  }


  if (
    order.vatNumber
  ) {

    customerData.tax_reg_no =
      order.vatNumber;

  }


  try {

    console.log(
      "Creating Zoho customer..."
    );

    const response =
      await axios.post(
        `${ZOHO_BOOKS_URL}/contacts`,
        customerData,
        {
          headers,

          params: {
            organization_id:
              organizationId,
          },

          timeout: 15000,
        }
      );

    if (
      !response.data?.contact
    ) {

      console.error(
        "ZOHO CUSTOMER RESPONSE:",
        response.data
      );

      throw new Error(
        "Zoho customer was not created"
      );

    }

    console.log(
      "Zoho customer created:",
      response.data.contact.contact_id
    );

    return response.data.contact;

  } catch (error) {

    console.error(
      "ZOHO CREATE CUSTOMER ERROR:"
    );

    console.error(
      error.response?.data ||
      error.message
    );

    throw error;
  }
};


// =====================================================
// FIND OR CREATE CUSTOMER
// =====================================================

const findOrCreateCustomer = async (
  order,
  accessToken
) => {

  const existing =
    await findCustomerByEmail(
      order,
      accessToken
    );

  if (existing) {
    return existing;
  }

  return await createCustomer(
    order,
    accessToken
  );
};


// =====================================================
// BUILD INVOICE LINE ITEMS
// =====================================================

const buildInvoiceLineItems = (
  order
) => {

  const lineItems = [];

  // ===============================================
  // PRODUCTS
  // ===============================================

  for (
    const item of order.items || []
  ) {

    const quantity =
      Number(item.quantity);

    const rate =
      Number(item.price);

    if (
      !Number.isFinite(quantity) ||
      quantity <= 0
    ) {

      throw new Error(
        `Invalid quantity for ${item.productTitle}`
      );

    }

    if (
      !Number.isFinite(rate) ||
      rate < 0
    ) {

      throw new Error(
        `Invalid price for ${item.productTitle}`
      );

    }

    lineItems.push({

      name:
        item.productTitle,

      description:
        item.productTitle,

      rate:
        Number(rate.toFixed(2)),

      quantity,

    });

  }


  // ===============================================
  // DELIVERY CHARGE
  // ===============================================

  const deliveryCharge =
    Number(
      order.deliveryCharge || 0
    );

  if (
    Number.isFinite(deliveryCharge) &&
    deliveryCharge > 0
  ) {

    lineItems.push({

      name:
        "Delivery Charge",

      description:
        "Delivery charge",

      rate:
        Number(
          deliveryCharge.toFixed(2)
        ),

      quantity:
        1,

    });

  }


  return lineItems;
};


// =====================================================
// CREATE ZOHO INVOICE
// =====================================================

const createZohoInvoice = async (
  order
) => {

  try {

    console.log(
      "========================================"
    );

    console.log(
      "CREATING ZOHO INVOICE"
    );

    console.log(
      "Order:",
      order.orderNumber
    );

    console.log(
      "Customer:",
      order.email
    );

    console.log(
      "========================================"
    );


    // ===============================================
    // ACCESS TOKEN
    // ===============================================

    const accessToken =
      await getAccessToken();


    // ===============================================
    // CUSTOMER
    // ===============================================

    const customer =
      await findOrCreateCustomer(
        order,
        accessToken
      );


    if (
      !customer?.contact_id
    ) {

      throw new Error(
        "Zoho customer ID was not returned"
      );

    }


    // ===============================================
    // HEADERS
    // ===============================================

    const headers =
      getHeaders(accessToken);


    const organizationId =
      getOrganizationId();


    // ===============================================
    // LINE ITEMS
    // ===============================================

    const lineItems =
      buildInvoiceLineItems(
        order
      );


    if (
      lineItems.length === 0
    ) {

      throw new Error(
        "Cannot create Zoho invoice without line items"
      );

    }


    // ===============================================
    // INVOICE DATA
    // ===============================================

    const invoiceData = {

      customer_id:
        customer.contact_id,

      reference_number:
        order.orderNumber,

      line_items:
        lineItems,

      notes:
        [
          "Payment proof submitted by customer.",
          "Payment verification is pending.",
          "Verification takes 2–3 working days.",
        ].join(" "),

      terms:
        "Payment verification takes 2–3 working days.",

    };


    // ===============================================
    // CREATE INVOICE
    // ===============================================

    console.log(
      "Sending invoice request to Zoho..."
    );

    console.log(
      "Invoice data:",
      JSON.stringify(
        invoiceData,
        null,
        2
      )
    );


    const invoiceResponse =
      await axios.post(

        `${ZOHO_BOOKS_URL}/invoices`,

        invoiceData,

        {
          headers,

          params: {
            organization_id:
              organizationId,
          },

          timeout: 20000,
        }

      );


    const invoice =
      invoiceResponse.data?.invoice;


    if (
      !invoice ||
      !invoice.invoice_id
    ) {

      console.error(
        "INVALID ZOHO INVOICE RESPONSE:",
        invoiceResponse.data
      );

      throw new Error(
        "Zoho invoice was not created"
      );

    }


    // ===============================================
    // SUCCESS
    // ===============================================

    console.log(
      "========================================"
    );

    console.log(
      "ZOHO INVOICE CREATED"
    );

    console.log(
      "Customer ID:",
      customer.contact_id
    );

    console.log(
      "Invoice ID:",
      invoice.invoice_id
    );

    console.log(
      "Invoice Number:",
      invoice.invoice_number
    );

    console.log(
      "Invoice Status:",
      invoice.status
    );

    console.log(
      "========================================"
    );


    return {

      customer,

      invoice,

    };


  } catch (error) {

    console.error(
      "========================================"
    );

    console.error(
      "CREATE ZOHO INVOICE ERROR"
    );

    console.error(
      "Order:",
      order?.orderNumber
    );

    console.error(
      "Message:",
      error.message
    );

    console.error(
      "Zoho Response:",
      error.response?.data
    );

    console.error(
      "========================================"
    );

    throw error;
  }
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {

  getAccessToken,

  findCustomerByEmail,

  createCustomer,

  findOrCreateCustomer,

  createZohoInvoice,

};