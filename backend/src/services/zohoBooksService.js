// // // // const axios = require("axios");

// // // // const ZOHO_ACCOUNTS_URL =
// // // //   "https://accounts.zoho.eu";

// // // // const ZOHO_BOOKS_URL =
// // // //   "https://www.zohoapis.eu/books/v3";

// // // // const getAccessToken = async () => {
// // // //   const response =
// // // //     await axios.post(
// // // //       `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
// // // //       null,
// // // //       {
// // // //         params: {
// // // //           refresh_token:
// // // //             process.env.ZOHO_REFRESH_TOKEN,

// // // //           client_id:
// // // //             process.env.ZOHO_CLIENT_ID,

// // // //           client_secret:
// // // //             process.env.ZOHO_CLIENT_SECRET,

// // // //           grant_type:
// // // //             "refresh_token",
// // // //         },
// // // //       }
// // // //     );

// // // //   return response.data.access_token;
// // // // };

// // // // // =====================================================
// // // // // CREATE / FIND CUSTOMER
// // // // // =====================================================

// // // // const findOrCreateCustomer = async (
// // // //   order,
// // // //   accessToken
// // // // ) => {
// // // //   const headers = {
// // // //     Authorization:
// // // //       `Zoho-oauthtoken ${accessToken}`,
// // // //   };

// // // //   const params = {
// // // //     organization_id:
// // // //       process.env.ZOHO_ORGANIZATION_ID,
// // // //     email: order.email,
// // // //   };

// // // //   const existing =
// // // //     await axios.get(
// // // //       `${ZOHO_BOOKS_URL}/contacts`,
// // // //       {
// // // //         headers,
// // // //         params,
// // // //       }
// // // //     );

// // // //   const contacts =
// // // //     existing.data.contacts || [];

// // // //   if (contacts.length > 0) {
// // // //     return contacts[0];
// // // //   }

// // // //   const customerResponse =
// // // //     await axios.post(
// // // //       `${ZOHO_BOOKS_URL}/contacts`,
// // // //       {
// // // //         contact_name:
// // // //           `${order.firstName} ${order.lastName}`,

// // // //         contact_type:
// // // //           "customer",

// // // //         email:
// // // //           order.email,

// // // //         phone:
// // // //           `${order.countryCode} ${order.phone}`,

// // // //         billing_address: {
// // // //           address:
// // // //             order.addressLine1,

// // // //           street2:
// // // //             order.addressLine2 || "",

// // // //           city:
// // // //             order.city,

// // // //           state:
// // // //             order.state || "",

// // // //           zip:
// // // //             order.postalCode,

// // // //           country:
// // // //             order.country,
// // // //         },
// // // //       },
// // // //       {
// // // //         headers,

// // // //         params: {
// // // //           organization_id:
// // // //             process.env.ZOHO_ORGANIZATION_ID,
// // // //         },
// // // //       }
// // // //     );

// // // //   return customerResponse
// // // //     .data
// // // //     .contact;
// // // // };

// // // // // =====================================================
// // // // // CREATE INVOICE
// // // // // =====================================================

// // // // const createZohoInvoice = async (
// // // //   order
// // // // ) => {
// // // //   const accessToken =
// // // //     await getAccessToken();

// // // //   const customer =
// // // //     await findOrCreateCustomer(
// // // //       order,
// // // //       accessToken
// // // //     );

// // // //   const headers = {
// // // //     Authorization:
// // // //       `Zoho-oauthtoken ${accessToken}`,

// // // //     "Content-Type":
// // // //       "application/json",
// // // //   };

// // // //   const lineItems =
// // // //     order.items.map((item) => ({
// // // //       name:
// // // //         item.productTitle,

// // // //       description:
// // // //         item.productTitle,

// // // //       rate:
// // // //         Number(item.price),

// // // //       quantity:
// // // //         Number(item.quantity),
// // // //     }));

// // // //   const invoiceResponse =
// // // //     await axios.post(
// // // //       `${ZOHO_BOOKS_URL}/invoices`,
// // // //       {
// // // //         customer_id:
// // // //           customer.contact_id,

// // // //         reference_number:
// // // //           order.orderNumber,

// // // //         line_items:
// // // //           lineItems,

// // // //         notes:
// // // //           "Payment proof submitted by customer. Payment verification pending.",

// // // //         terms:
// // // //           "Payment verification takes 2–3 working days.",
// // // //       },
// // // //       {
// // // //         headers,

// // // //         params: {
// // // //           organization_id:
// // // //             process.env.ZOHO_ORGANIZATION_ID,
// // // //         },
// // // //       }
// // // //     );

// // // //   return {
// // // //     customer,
// // // //     invoice:
// // // //       invoiceResponse.data.invoice,
// // // //   };
// // // // };

// // // // module.exports = {
// // // //   getAccessToken,
// // // //   findOrCreateCustomer,
// // // //   createZohoInvoice,
// // // // };


// // // const axios = require("axios");

// // // // =====================================================
// // // // ZOHO CONFIG
// // // // =====================================================

// // // const ZOHO_ACCOUNTS_URL =
// // //   "https://accounts.zoho.eu";

// // // const ZOHO_BOOKS_URL =
// // //   "https://www.zohoapis.eu/books/v3";


// // // // =====================================================
// // // // GET ACCESS TOKEN
// // // // =====================================================

// // // const getAccessToken = async () => {
// // //   try {
// // //     if (
// // //       !process.env.ZOHO_REFRESH_TOKEN ||
// // //       !process.env.ZOHO_CLIENT_ID ||
// // //       !process.env.ZOHO_CLIENT_SECRET
// // //     ) {
// // //       throw new Error(
// // //         "Zoho OAuth environment variables are missing"
// // //       );
// // //     }

// // //     const response =
// // //       await axios.post(
// // //         `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
// // //         null,
// // //         {
// // //           params: {
// // //             refresh_token:
// // //               process.env.ZOHO_REFRESH_TOKEN,

// // //             client_id:
// // //               process.env.ZOHO_CLIENT_ID,

// // //             client_secret:
// // //               process.env.ZOHO_CLIENT_SECRET,

// // //             grant_type:
// // //               "refresh_token",
// // //           },

// // //           timeout: 15000,
// // //         }
// // //       );

// // //     if (
// // //       !response.data ||
// // //       !response.data.access_token
// // //     ) {
// // //       console.error(
// // //         "ZOHO TOKEN RESPONSE:",
// // //         response.data
// // //       );

// // //       throw new Error(
// // //         "Zoho access token was not returned"
// // //       );
// // //     }

// // //     return response.data.access_token;

// // //   } catch (error) {

// // //     console.error(
// // //       "ZOHO ACCESS TOKEN ERROR:"
// // //     );

// // //     console.error(
// // //       error.response?.data ||
// // //       error.message
// // //     );

// // //     throw error;
// // //   }
// // // };


// // // // =====================================================
// // // // ZOHO HEADERS
// // // // =====================================================

// // // const getHeaders = (
// // //   accessToken
// // // ) => ({
// // //   Authorization:
// // //     `Zoho-oauthtoken ${accessToken}`,

// // //   "Content-Type":
// // //     "application/json",
// // // });


// // // // =====================================================
// // // // ZOHO ORGANIZATION ID
// // // // =====================================================

// // // const getOrganizationId = () => {

// // //   const organizationId =
// // //     process.env.ZOHO_ORGANIZATION_ID;

// // //   if (!organizationId) {

// // //     throw new Error(
// // //       "ZOHO_ORGANIZATION_ID is missing"
// // //     );

// // //   }

// // //   return organizationId;
// // // };


// // // // =====================================================
// // // // FIND CUSTOMER BY EMAIL
// // // // =====================================================

// // // const findCustomerByEmail = async (
// // //   order,
// // //   accessToken
// // // ) => {

// // //   const headers =
// // //     getHeaders(accessToken);

// // //   const organizationId =
// // //     getOrganizationId();

// // //   try {

// // //     const response =
// // //       await axios.get(
// // //         `${ZOHO_BOOKS_URL}/contacts`,
// // //         {
// // //           headers,

// // //           params: {
// // //             organization_id:
// // //               organizationId,

// // //             email:
// // //               order.email,
// // //           },

// // //           timeout: 15000,
// // //         }
// // //       );

// // //     const contacts =
// // //       response.data?.contacts || [];

// // //     if (
// // //       contacts.length > 0
// // //     ) {

// // //       console.log(
// // //         "Existing Zoho customer found:",
// // //         contacts[0].contact_id
// // //       );

// // //       return contacts[0];

// // //     }

// // //     return null;

// // //   } catch (error) {

// // //     console.error(
// // //       "ZOHO FIND CUSTOMER ERROR:"
// // //     );

// // //     console.error(
// // //       error.response?.data ||
// // //       error.message
// // //     );

// // //     throw error;
// // //   }
// // // };


// // // // =====================================================
// // // // CREATE CUSTOMER
// // // // =====================================================

// // // const createCustomer = async (
// // //   order,
// // //   accessToken
// // // ) => {

// // //   const headers =
// // //     getHeaders(accessToken);

// // //   const organizationId =
// // //     getOrganizationId();

// // //   const customerName =
// // //     `${order.firstName} ${order.lastName}`
// // //       .trim();

// // //   const customerData = {

// // //     contact_name:
// // //       customerName,

// // //     contact_type:
// // //       "customer",

// // //     email:
// // //       order.email,

// // //     phone:
// // //       `${order.countryCode || ""} ${order.phone || ""}`
// // //         .trim(),

// // //     billing_address: {

// // //       address:
// // //         order.addressLine1 || "",

// // //       street2:
// // //         order.addressLine2 || "",

// // //       city:
// // //         order.city || "",

// // //       state:
// // //         order.state || "",

// // //       zip:
// // //         order.postalCode || "",

// // //       country:
// // //         order.country || "",

// // //     },

// // //   };


// // //   // ===============================================
// // //   // COMPANY / VAT
// // //   // ===============================================

// // //   if (
// // //     order.companyName
// // //   ) {

// // //     customerData.company_name =
// // //       order.companyName;

// // //   }


// // //   if (
// // //     order.vatNumber
// // //   ) {

// // //     customerData.tax_reg_no =
// // //       order.vatNumber;

// // //   }


// // //   try {

// // //     console.log(
// // //       "Creating Zoho customer..."
// // //     );

// // //     const response =
// // //       await axios.post(
// // //         `${ZOHO_BOOKS_URL}/contacts`,
// // //         customerData,
// // //         {
// // //           headers,

// // //           params: {
// // //             organization_id:
// // //               organizationId,
// // //           },

// // //           timeout: 15000,
// // //         }
// // //       );

// // //     if (
// // //       !response.data?.contact
// // //     ) {

// // //       console.error(
// // //         "ZOHO CUSTOMER RESPONSE:",
// // //         response.data
// // //       );

// // //       throw new Error(
// // //         "Zoho customer was not created"
// // //       );

// // //     }

// // //     console.log(
// // //       "Zoho customer created:",
// // //       response.data.contact.contact_id
// // //     );

// // //     return response.data.contact;

// // //   } catch (error) {

// // //     console.error(
// // //       "ZOHO CREATE CUSTOMER ERROR:"
// // //     );

// // //     console.error(
// // //       error.response?.data ||
// // //       error.message
// // //     );

// // //     throw error;
// // //   }
// // // };


// // // // =====================================================
// // // // FIND OR CREATE CUSTOMER
// // // // =====================================================

// // // const findOrCreateCustomer = async (
// // //   order,
// // //   accessToken
// // // ) => {

// // //   const existing =
// // //     await findCustomerByEmail(
// // //       order,
// // //       accessToken
// // //     );

// // //   if (existing) {
// // //     return existing;
// // //   }

// // //   return await createCustomer(
// // //     order,
// // //     accessToken
// // //   );
// // // };


// // // // =====================================================
// // // // BUILD INVOICE LINE ITEMS
// // // // =====================================================

// // // const buildInvoiceLineItems = (
// // //   order
// // // ) => {

// // //   const lineItems = [];

// // //   // ===============================================
// // //   // PRODUCTS
// // //   // ===============================================

// // //   for (
// // //     const item of order.items || []
// // //   ) {

// // //     const quantity =
// // //       Number(item.quantity);

// // //     const rate =
// // //       Number(item.price);

// // //     if (
// // //       !Number.isFinite(quantity) ||
// // //       quantity <= 0
// // //     ) {

// // //       throw new Error(
// // //         `Invalid quantity for ${item.productTitle}`
// // //       );

// // //     }

// // //     if (
// // //       !Number.isFinite(rate) ||
// // //       rate < 0
// // //     ) {

// // //       throw new Error(
// // //         `Invalid price for ${item.productTitle}`
// // //       );

// // //     }

// // //     lineItems.push({

// // //       name:
// // //         item.productTitle,

// // //       description:
// // //         item.productTitle,

// // //       rate:
// // //         Number(rate.toFixed(2)),

// // //       quantity,

// // //     });

// // //   }


// // //   // ===============================================
// // //   // DELIVERY CHARGE
// // //   // ===============================================

// // //   const deliveryCharge =
// // //     Number(
// // //       order.deliveryCharge || 0
// // //     );

// // //   if (
// // //     Number.isFinite(deliveryCharge) &&
// // //     deliveryCharge > 0
// // //   ) {

// // //     lineItems.push({

// // //       name:
// // //         "Delivery Charge",

// // //       description:
// // //         "Delivery charge",

// // //       rate:
// // //         Number(
// // //           deliveryCharge.toFixed(2)
// // //         ),

// // //       quantity:
// // //         1,

// // //     });

// // //   }


// // //   return lineItems;
// // // };


// // // // =====================================================
// // // // CREATE ZOHO INVOICE
// // // // =====================================================

// // // const createZohoInvoice = async (
// // //   order
// // // ) => {

// // //   try {

// // //     console.log(
// // //       "========================================"
// // //     );

// // //     console.log(
// // //       "CREATING ZOHO INVOICE"
// // //     );

// // //     console.log(
// // //       "Order:",
// // //       order.orderNumber
// // //     );

// // //     console.log(
// // //       "Customer:",
// // //       order.email
// // //     );

// // //     console.log(
// // //       "========================================"
// // //     );


// // //     // ===============================================
// // //     // ACCESS TOKEN
// // //     // ===============================================

// // //     const accessToken =
// // //       await getAccessToken();


// // //     // ===============================================
// // //     // CUSTOMER
// // //     // ===============================================

// // //     const customer =
// // //       await findOrCreateCustomer(
// // //         order,
// // //         accessToken
// // //       );


// // //     if (
// // //       !customer?.contact_id
// // //     ) {

// // //       throw new Error(
// // //         "Zoho customer ID was not returned"
// // //       );

// // //     }


// // //     // ===============================================
// // //     // HEADERS
// // //     // ===============================================

// // //     const headers =
// // //       getHeaders(accessToken);


// // //     const organizationId =
// // //       getOrganizationId();


// // //     // ===============================================
// // //     // LINE ITEMS
// // //     // ===============================================

// // //     const lineItems =
// // //       buildInvoiceLineItems(
// // //         order
// // //       );


// // //     if (
// // //       lineItems.length === 0
// // //     ) {

// // //       throw new Error(
// // //         "Cannot create Zoho invoice without line items"
// // //       );

// // //     }


// // //     // ===============================================
// // //     // INVOICE DATA
// // //     // ===============================================

// // //     const invoiceData = {

// // //       customer_id:
// // //         customer.contact_id,

// // //       reference_number:
// // //         order.orderNumber,

// // //       line_items:
// // //         lineItems,

// // //       notes:
// // //         [
// // //           "Payment proof submitted by customer.",
// // //           "Payment verification is pending.",
// // //           "Verification takes 2–3 working days.",
// // //         ].join(" "),

// // //       terms:
// // //         "Payment verification takes 2–3 working days.",

// // //     };


// // //     // ===============================================
// // //     // CREATE INVOICE
// // //     // ===============================================

// // //     console.log(
// // //       "Sending invoice request to Zoho..."
// // //     );

// // //     console.log(
// // //       "Invoice data:",
// // //       JSON.stringify(
// // //         invoiceData,
// // //         null,
// // //         2
// // //       )
// // //     );


// // //     const invoiceResponse =
// // //       await axios.post(

// // //         `${ZOHO_BOOKS_URL}/invoices`,

// // //         invoiceData,

// // //         {
// // //           headers,

// // //           params: {
// // //             organization_id:
// // //               organizationId,
// // //           },

// // //           timeout: 20000,
// // //         }

// // //       );


// // //     const invoice =
// // //       invoiceResponse.data?.invoice;


// // //     if (
// // //       !invoice ||
// // //       !invoice.invoice_id
// // //     ) {

// // //       console.error(
// // //         "INVALID ZOHO INVOICE RESPONSE:",
// // //         invoiceResponse.data
// // //       );

// // //       throw new Error(
// // //         "Zoho invoice was not created"
// // //       );

// // //     }


// // //     // ===============================================
// // //     // SUCCESS
// // //     // ===============================================

// // //     console.log(
// // //       "========================================"
// // //     );

// // //     console.log(
// // //       "ZOHO INVOICE CREATED"
// // //     );

// // //     console.log(
// // //       "Customer ID:",
// // //       customer.contact_id
// // //     );

// // //     console.log(
// // //       "Invoice ID:",
// // //       invoice.invoice_id
// // //     );

// // //     console.log(
// // //       "Invoice Number:",
// // //       invoice.invoice_number
// // //     );

// // //     console.log(
// // //       "Invoice Status:",
// // //       invoice.status
// // //     );

// // //     console.log(
// // //       "========================================"
// // //     );


// // //     return {

// // //       customer,

// // //       invoice,

// // //     };


// // //   } catch (error) {

// // //     console.error(
// // //       "========================================"
// // //     );

// // //     console.error(
// // //       "CREATE ZOHO INVOICE ERROR"
// // //     );

// // //     console.error(
// // //       "Order:",
// // //       order?.orderNumber
// // //     );

// // //     console.error(
// // //       "Message:",
// // //       error.message
// // //     );

// // //     console.error(
// // //       "Zoho Response:",
// // //       error.response?.data
// // //     );

// // //     console.error(
// // //       "========================================"
// // //     );

// // //     throw error;
// // //   }
// // // };


// // // // =====================================================
// // // // EXPORT
// // // // =====================================================

// // // module.exports = {

// // //   getAccessToken,

// // //   findCustomerByEmail,

// // //   createCustomer,

// // //   findOrCreateCustomer,

// // //   createZohoInvoice,

// // // };



// // const axios = require("axios");

// // // =====================================================
// // // ZOHO CONFIG
// // // =====================================================

// // const ZOHO_ACCOUNTS_URL =
// //   "https://accounts.zoho.eu";

// // const ZOHO_BOOKS_URL =
// //   "https://www.zohoapis.eu/books/v3";


// // // =====================================================
// // // GET ACCESS TOKEN
// // // =====================================================

// // const getAccessToken = async () => {
// //   try {
// //     if (
// //       !process.env.ZOHO_REFRESH_TOKEN ||
// //       !process.env.ZOHO_CLIENT_ID ||
// //       !process.env.ZOHO_CLIENT_SECRET
// //     ) {
// //       throw new Error(
// //         "Zoho OAuth environment variables are missing"
// //       );
// //     }

// //     const response = await axios.post(
// //       `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
// //       null,
// //       {
// //         params: {
// //           refresh_token:
// //             process.env.ZOHO_REFRESH_TOKEN,

// //           client_id:
// //             process.env.ZOHO_CLIENT_ID,

// //           client_secret:
// //             process.env.ZOHO_CLIENT_SECRET,

// //           grant_type:
// //             "refresh_token",
// //         },

// //         timeout: 15000,
// //       }
// //     );

// //     if (
// //       !response.data ||
// //       !response.data.access_token
// //     ) {
// //       console.error(
// //         "ZOHO TOKEN RESPONSE:",
// //         response.data
// //       );

// //       throw new Error(
// //         "Zoho access token was not returned"
// //       );
// //     }

// //     console.log(
// //       "Zoho access token generated successfully"
// //     );

// //     return response.data.access_token;

// //   } catch (error) {

// //     console.error(
// //       "========================================"
// //     );

// //     console.error(
// //       "ZOHO ACCESS TOKEN ERROR:"
// //     );

// //     console.error(
// //       error.response?.data ||
// //       error.message
// //     );

// //     console.error(
// //       "========================================"
// //     );

// //     throw error;
// //   }
// // };


// // // =====================================================
// // // ZOHO HEADERS
// // // =====================================================

// // const getHeaders = (
// //   accessToken
// // ) => ({
// //   Authorization:
// //     `Zoho-oauthtoken ${accessToken}`,

// //   "Content-Type":
// //     "application/json",
// // });


// // // =====================================================
// // // ZOHO ORGANIZATION ID
// // // =====================================================

// // const getOrganizationId = () => {

// //   const organizationId =
// //     process.env.ZOHO_ORGANIZATION_ID;

// //   if (!organizationId) {

// //     throw new Error(
// //       "ZOHO_ORGANIZATION_ID is missing"
// //     );

// //   }

// //   return organizationId;
// // };


// // // =====================================================
// // // FIND CUSTOMER BY EMAIL
// // // =====================================================

// // const findCustomerByEmail = async (
// //   order,
// //   accessToken
// // ) => {

// //   const headers =
// //     getHeaders(accessToken);

// //   const organizationId =
// //     getOrganizationId();

// //   try {

// //     const response =
// //       await axios.get(
// //         `${ZOHO_BOOKS_URL}/contacts`,
// //         {
// //           headers,

// //           params: {
// //             organization_id:
// //               organizationId,

// //             email:
// //               order.email,
// //           },

// //           timeout: 15000,
// //         }
// //       );

// //     const contacts =
// //       response.data?.contacts || [];

// //     if (
// //       contacts.length > 0
// //     ) {

// //       console.log(
// //         "Existing Zoho customer found:",
// //         contacts[0].contact_id
// //       );

// //       return contacts[0];

// //     }

// //     return null;

// //   } catch (error) {

// //     console.error(
// //       "ZOHO FIND CUSTOMER ERROR:"
// //     );

// //     console.error(
// //       error.response?.data ||
// //       error.message
// //     );

// //     throw error;
// //   }
// // };


// // // =====================================================
// // // CREATE CUSTOMER
// // // =====================================================

// // const createCustomer = async (
// //   order,
// //   accessToken
// // ) => {

// //   const headers =
// //     getHeaders(accessToken);

// //   const organizationId =
// //     getOrganizationId();

// //   const customerName =
// //     `${order.firstName || ""} ${order.lastName || ""}`
// //       .trim();

// //   const customerData = {

// //     contact_name:
// //       customerName || order.email,

// //     contact_type:
// //       "customer",

// //     email:
// //       order.email,

// //     phone:
// //       `${order.countryCode || ""} ${order.phone || ""}`
// //         .trim(),

// //     billing_address: {

// //       address:
// //         order.addressLine1 || "",

// //       street2:
// //         order.addressLine2 || "",

// //       city:
// //         order.city || "",

// //       state:
// //         order.state || "",

// //       zip:
// //         order.postalCode || "",

// //       country:
// //         order.country || "",

// //     },

// //   };


// //   // ===============================================
// //   // COMPANY
// //   // ===============================================

// //   if (
// //     order.companyName
// //   ) {

// //     customerData.company_name =
// //       order.companyName;

// //   }


// //   // ===============================================
// //   // VAT
// //   // ===============================================

// //   if (
// //     order.vatNumber
// //   ) {

// //     customerData.tax_reg_no =
// //       order.vatNumber;

// //   }


// //   try {

// //     console.log(
// //       "Creating Zoho customer..."
// //     );

// //     const response =
// //       await axios.post(
// //         `${ZOHO_BOOKS_URL}/contacts`,
// //         customerData,
// //         {
// //           headers,

// //           params: {
// //             organization_id:
// //               organizationId,
// //           },

// //           timeout: 15000,
// //         }
// //       );

// //     if (
// //       !response.data?.contact
// //     ) {

// //       console.error(
// //         "ZOHO CUSTOMER RESPONSE:",
// //         response.data
// //       );

// //       throw new Error(
// //         "Zoho customer was not created"
// //       );

// //     }

// //     console.log(
// //       "Zoho customer created:",
// //       response.data.contact.contact_id
// //     );

// //     return response.data.contact;

// //   } catch (error) {

// //     console.error(
// //       "ZOHO CREATE CUSTOMER ERROR:"
// //     );

// //     console.error(
// //       error.response?.data ||
// //       error.message
// //     );

// //     throw error;
// //   }
// // };


// // // =====================================================
// // // FIND OR CREATE CUSTOMER
// // // =====================================================

// // const findOrCreateCustomer = async (
// //   order,
// //   accessToken
// // ) => {

// //   const existing =
// //     await findCustomerByEmail(
// //       order,
// //       accessToken
// //     );

// //   if (existing) {
// //     return existing;
// //   }

// //   return await createCustomer(
// //     order,
// //     accessToken
// //   );
// // };


// // // =====================================================
// // // BUILD INVOICE LINE ITEMS
// // // =====================================================

// // const buildInvoiceLineItems = (
// //   order
// // ) => {

// //   const lineItems = [];

// //   // ===============================================
// //   // WEBSITE PRODUCTS
// //   // ===============================================

// //   for (
// //     const item of order.items || []
// //   ) {

// //     const quantity =
// //       Number(item.quantity);

// //     const rate =
// //       Number(item.price);

// //     if (
// //       !Number.isFinite(quantity) ||
// //       quantity <= 0
// //     ) {

// //       throw new Error(
// //         `Invalid quantity for ${item.productTitle}`
// //       );

// //     }

// //     if (
// //       !Number.isFinite(rate) ||
// //       rate < 0
// //     ) {

// //       throw new Error(
// //         `Invalid price for ${item.productTitle}`
// //       );

// //     }


// //     // =============================================
// //     // IMPORTANT
// //     //
// //     // We intentionally DO NOT send:
// //     //
// //     // item_id
// //     //
// //     // This keeps the website product independent
// //     // from Zoho's purchase-only inventory items.
// //     // =============================================

// //     lineItems.push({

// //       name:
// //         String(
// //           item.productTitle || "Website Product"
// //         ),

// //       description:
// //         String(
// //           item.productTitle || "Website Product"
// //         ),

// //       rate:
// //         Number(
// //           rate.toFixed(2)
// //         ),

// //       quantity:
// //         quantity,

// //     });

// //   }


// //   // ===============================================
// //   // DELIVERY CHARGE
// //   // ===============================================

// //   const deliveryCharge =
// //     Number(
// //       order.deliveryCharge || 0
// //     );

// //   if (
// //     Number.isFinite(deliveryCharge) &&
// //     deliveryCharge > 0
// //   ) {

// //     lineItems.push({

// //       name:
// //         "Delivery Charge",

// //       description:
// //         "Delivery charge",

// //       rate:
// //         Number(
// //           deliveryCharge.toFixed(2)
// //         ),

// //       quantity:
// //         1,

// //     });

// //   }


// //   return lineItems;
// // };


// // // =====================================================
// // // CREATE ZOHO INVOICE
// // // =====================================================

// // const createZohoInvoice = async (
// //   order
// // ) => {

// //   try {

// //     console.log(
// //       "========================================"
// //     );

// //     console.log(
// //       "CREATING ZOHO INVOICE"
// //     );

// //     console.log(
// //       "Order:",
// //       order.orderNumber
// //     );

// //     console.log(
// //       "Customer:",
// //       order.email
// //     );

// //     console.log(
// //       "========================================"
// //     );


// //     // ===============================================
// //     // ACCESS TOKEN
// //     // ===============================================

// //     const accessToken =
// //       await getAccessToken();


// //     // ===============================================
// //     // CUSTOMER
// //     // ===============================================

// //     const customer =
// //       await findOrCreateCustomer(
// //         order,
// //         accessToken
// //       );


// //     if (
// //       !customer?.contact_id
// //     ) {

// //       throw new Error(
// //         "Zoho customer ID was not returned"
// //       );

// //     }


// //     // ===============================================
// //     // HEADERS
// //     // ===============================================

// //     const headers =
// //       getHeaders(accessToken);


// //     const organizationId =
// //       getOrganizationId();


// //     // ===============================================
// //     // LINE ITEMS
// //     // ===============================================

// //     const lineItems =
// //       buildInvoiceLineItems(
// //         order
// //       );


// //     if (
// //       lineItems.length === 0
// //     ) {

// //       throw new Error(
// //         "Cannot create Zoho invoice without line items"
// //       );

// //     }


// //     // ===============================================
// //     // INVOICE DATA
// //     // ===============================================

// //     const invoiceData = {

// //       customer_id:
// //         customer.contact_id,

// //       reference_number:
// //         order.orderNumber,

// //       line_items:
// //         lineItems,

// //       notes:
// //         [
// //           "Payment proof submitted by customer.",
// //           "Payment verification is pending.",
// //           "Verification takes 2–3 working days.",
// //         ].join(" "),

// //       terms:
// //         "Payment verification takes 2–3 working days.",

// //     };


// //     // ===============================================
// //     // LOG WITHOUT SECRETS
// //     // ===============================================

// //     console.log(
// //       "Sending invoice request to Zoho..."
// //     );

// //     console.log(
// //       "Invoice customer:",
// //       customer.contact_id
// //     );

// //     console.log(
// //       "Invoice reference:",
// //       order.orderNumber
// //     );

// //     console.log(
// //       "Invoice line items:",
// //       JSON.stringify(
// //         lineItems,
// //         null,
// //         2
// //       )
// //     );


// //     // ===============================================
// //     // CREATE INVOICE
// //     // ===============================================

// //     const invoiceResponse =
// //       await axios.post(
// //         `${ZOHO_BOOKS_URL}/invoices`,
// //         invoiceData,
// //         {
// //           headers,

// //           params: {
// //             organization_id:
// //               organizationId,
// //           },

// //           timeout: 20000,
// //         }
// //       );


// //     const invoice =
// //       invoiceResponse.data?.invoice;


// //     // ===============================================
// //     // VALIDATE RESPONSE
// //     // ===============================================

// //     if (
// //       !invoice ||
// //       !invoice.invoice_id
// //     ) {

// //       console.error(
// //         "INVALID ZOHO INVOICE RESPONSE:",
// //         invoiceResponse.data
// //       );

// //       throw new Error(
// //         "Zoho invoice was not created"
// //       );

// //     }


// //     // ===============================================
// //     // SUCCESS
// //     // ===============================================

// //     console.log(
// //       "========================================"
// //     );

// //     console.log(
// //       "ZOHO INVOICE CREATED SUCCESSFULLY"
// //     );

// //     console.log(
// //       "Customer ID:",
// //       customer.contact_id
// //     );

// //     console.log(
// //       "Invoice ID:",
// //       invoice.invoice_id
// //     );

// //     console.log(
// //       "Invoice Number:",
// //       invoice.invoice_number
// //     );

// //     console.log(
// //       "Invoice Status:",
// //       invoice.status
// //     );

// //     console.log(
// //       "========================================"
// //     );


// //     return {

// //       customer,

// //       invoice,

// //     };


// //   } catch (error) {

// //     console.error(
// //       "========================================"
// //     );

// //     console.error(
// //       "CREATE ZOHO INVOICE ERROR"
// //     );

// //     console.error(
// //       "Order:",
// //       order?.orderNumber
// //     );

// //     console.error(
// //       "Message:",
// //       error.message
// //     );

// //     // =============================================
// //     // FULL ZOHO ERROR
// //     // =============================================

// //     if (
// //       error.response
// //     ) {

// //       console.error(
// //         "Zoho HTTP Status:",
// //         error.response.status
// //       );

// //       console.error(
// //         "Zoho Response:",
// //         error.response.data
// //       );

// //       console.error(
// //         "Zoho Headers:",
// //         {
// //           "x-ratelimit-remaining":
// //             error.response.headers?.[
// //               "x-ratelimit-remaining"
// //             ],
// //         }
// //       );

// //     } else {

// //       console.error(
// //         "Zoho Response:",
// //         undefined
// //       );

// //     }

// //     console.error(
// //       "========================================"
// //     );

// //     throw error;
// //   }
// // };


// // // =====================================================
// // // EXPORT
// // // =====================================================

// // module.exports = {

// //   getAccessToken,

// //   findCustomerByEmail,

// //   createCustomer,

// //   findOrCreateCustomer,

// //   createZohoInvoice,

// // };


// const axios = require("axios");

// // =====================================================
// // ZOHO CONFIG
// // =====================================================

// const ZOHO_ACCOUNTS_URL =
//   "https://accounts.zoho.eu";

// const ZOHO_BOOKS_URL =
//   "https://www.zohoapis.eu/books/v3";


// // =====================================================
// // GET ACCESS TOKEN
// // =====================================================

// const getAccessToken = async () => {
//   try {

//     if (
//       !process.env.ZOHO_REFRESH_TOKEN ||
//       !process.env.ZOHO_CLIENT_ID ||
//       !process.env.ZOHO_CLIENT_SECRET
//     ) {

//       throw new Error(
//         "Zoho OAuth environment variables are missing"
//       );

//     }

//     const response =
//       await axios.post(
//         `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
//         null,
//         {
//           params: {

//             refresh_token:
//               process.env.ZOHO_REFRESH_TOKEN,

//             client_id:
//               process.env.ZOHO_CLIENT_ID,

//             client_secret:
//               process.env.ZOHO_CLIENT_SECRET,

//             grant_type:
//               "refresh_token",

//           },

//           timeout: 15000,

//         }
//       );


//     if (
//       !response.data ||
//       !response.data.access_token
//     ) {

//       console.error(
//         "ZOHO TOKEN RESPONSE:",
//         response.data
//       );

//       throw new Error(
//         "Zoho access token was not returned"
//       );

//     }


//     console.log(
//       "Zoho access token generated successfully"
//     );


//     return response.data.access_token;


//   } catch (error) {

//     console.error(
//       "========================================"
//     );

//     console.error(
//       "ZOHO ACCESS TOKEN ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );

//     console.error(
//       "========================================"
//     );

//     throw error;

//   }
// };


// // =====================================================
// // ZOHO HEADERS
// // =====================================================

// const getHeaders = (
//   accessToken
// ) => {

//   return {

//     Authorization:
//       `Zoho-oauthtoken ${accessToken}`,

//     "Content-Type":
//       "application/json",

//   };

// };


// // =====================================================
// // ZOHO ORGANIZATION ID
// // =====================================================

// const getOrganizationId = () => {

//   const organizationId =
//     process.env.ZOHO_ORGANIZATION_ID;


//   if (!organizationId) {

//     throw new Error(
//       "ZOHO_ORGANIZATION_ID is missing"
//     );

//   }


//   return organizationId;

// };


// // =====================================================
// // FIND CUSTOMER BY EMAIL
// // =====================================================

// const findCustomerByEmail = async (
//   order,
//   accessToken
// ) => {

//   const headers =
//     getHeaders(accessToken);

//   const organizationId =
//     getOrganizationId();


//   try {

//     console.log(
//       "Searching Zoho customer by email:",
//       order.email
//     );


//     const response =
//       await axios.get(
//         `${ZOHO_BOOKS_URL}/contacts`,
//         {

//           headers,

//           params: {

//             organization_id:
//               organizationId,

//             email:
//               order.email,

//           },

//           timeout: 15000,

//         }
//       );


//     const contacts =
//       response.data?.contacts || [];


//     if (
//       contacts.length > 0
//     ) {

//       console.log(
//         "Existing Zoho customer found by email:",
//         contacts[0].contact_id
//       );


//       return contacts[0];

//     }


//     console.log(
//       "No Zoho customer found by email"
//     );


//     return null;


//   } catch (error) {

//     console.error(
//       "ZOHO FIND CUSTOMER BY EMAIL ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );

//     throw error;

//   }

// };


// // =====================================================
// // FIND CUSTOMER BY NAME
// // =====================================================

// const findCustomerByName = async (
//   order,
//   accessToken
// ) => {

//   const headers =
//     getHeaders(accessToken);

//   const organizationId =
//     getOrganizationId();


//   const customerName =
//     `${order.firstName || ""} ${order.lastName || ""}`
//       .trim();


//   if (!customerName) {

//     return null;

//   }


//   try {

//     console.log(
//       "Searching Zoho customer by name:",
//       customerName
//     );


//     const response =
//       await axios.get(
//         `${ZOHO_BOOKS_URL}/contacts`,
//         {

//           headers,

//           params: {

//             organization_id:
//               organizationId,

//             contact_name:
//               customerName,

//           },

//           timeout: 15000,

//         }
//       );


//     const contacts =
//       response.data?.contacts || [];


//     if (
//       contacts.length > 0
//     ) {

//       console.log(
//         "Existing Zoho customer found by name:",
//         contacts[0].contact_id
//       );


//       return contacts[0];

//     }


//     console.log(
//       "No Zoho customer found by name"
//     );


//     return null;


//   } catch (error) {

//     console.error(
//       "ZOHO FIND CUSTOMER BY NAME ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );

//     throw error;

//   }

// };


// // =====================================================
// // CREATE CUSTOMER
// // =====================================================

// const createCustomer = async (
//   order,
//   accessToken
// ) => {

//   const headers =
//     getHeaders(accessToken);

//   const organizationId =
//     getOrganizationId();


//   const customerName =
//     `${order.firstName || ""} ${order.lastName || ""}`
//       .trim();


//   const customerData = {

//     contact_name:
//       customerName || order.email,

//     contact_type:
//       "customer",

//     email:
//       order.email,

//     phone:
//       `${order.countryCode || ""} ${order.phone || ""}`
//         .trim(),

//     billing_address: {

//       address:
//         order.addressLine1 || "",

//       street2:
//         order.addressLine2 || "",

//       city:
//         order.city || "",

//       state:
//         order.state || "",

//       zip:
//         order.postalCode || "",

//       country:
//         order.country || "",

//     },

//   };


//   // ===================================================
//   // COMPANY
//   // ===================================================

//   if (
//     order.companyName
//   ) {

//     customerData.company_name =
//       order.companyName;

//   }


//   // ===================================================
//   // VAT
//   // ===================================================

//   if (
//     order.vatNumber
//   ) {

//     customerData.tax_reg_no =
//       order.vatNumber;

//   }


//   try {

//     console.log(
//       "Creating Zoho customer:",
//       customerName
//     );


//     const response =
//       await axios.post(
//         `${ZOHO_BOOKS_URL}/contacts`,
//         customerData,
//         {

//           headers,

//           params: {

//             organization_id:
//               organizationId,

//           },

//           timeout: 15000,

//         }
//       );


//     if (
//       !response.data?.contact
//     ) {

//       console.error(
//         "ZOHO CUSTOMER RESPONSE:",
//         response.data
//       );


//       throw new Error(
//         "Zoho customer was not created"
//       );

//     }


//     console.log(
//       "Zoho customer created:",
//       response.data.contact.contact_id
//     );


//     return response.data.contact;


//   } catch (error) {

//     console.error(
//       "ZOHO CREATE CUSTOMER ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );


//     throw error;

//   }

// };


// // =====================================================
// // FIND OR CREATE CUSTOMER
// // =====================================================

// const findOrCreateCustomer = async (
//   order,
//   accessToken
// ) => {

//   // ===================================================
//   // STEP 1 — SEARCH BY EMAIL
//   // ===================================================

//   const existingByEmail =
//     await findCustomerByEmail(
//       order,
//       accessToken
//     );


//   if (
//     existingByEmail
//   ) {

//     return existingByEmail;

//   }


//   // ===================================================
//   // STEP 2 — SEARCH BY NAME
//   // ===================================================

//   const existingByName =
//     await findCustomerByName(
//       order,
//       accessToken
//     );


//   if (
//     existingByName
//   ) {

//     console.log(
//       "Using existing Zoho customer found by name"
//     );


//     return existingByName;

//   }


//   // ===================================================
//   // STEP 3 — CREATE CUSTOMER
//   // ===================================================

//   return await createCustomer(
//     order,
//     accessToken
//   );

// };


// // =====================================================
// // BUILD INVOICE LINE ITEMS
// // =====================================================

// const buildInvoiceLineItems = (
//   order
// ) => {

//   const lineItems = [];


//   // ===================================================
//   // WEBSITE PRODUCTS
//   // ===================================================

//   for (
//     const item of order.items || []
//   ) {

//     const quantity =
//       Number(item.quantity);


//     const rate =
//       Number(item.price);


//     if (
//       !Number.isFinite(quantity) ||
//       quantity <= 0
//     ) {

//       throw new Error(
//         `Invalid quantity for ${item.productTitle}`
//       );

//     }


//     if (
//       !Number.isFinite(rate) ||
//       rate < 0
//     ) {

//       throw new Error(
//         `Invalid price for ${item.productTitle}`
//       );

//     }


//     // =================================================
//     // IMPORTANT
//     //
//     // NO item_id is sent.
//     //
//     // This keeps the website product independent
//     // from existing Zoho purchase-only inventory items.
//     // =================================================

//     lineItems.push({

//       name:
//         String(
//           item.productTitle ||
//           "Website Product"
//         ),

//       description:
//         String(
//           item.productTitle ||
//           "Website Product"
//         ),

//       rate:
//         Number(
//           rate.toFixed(2)
//         ),

//       quantity:
//         quantity,

//     });

//   }


//   // ===================================================
//   // DELIVERY CHARGE
//   // ===================================================

//   const deliveryCharge =
//     Number(
//       order.deliveryCharge || 0
//     );


//   if (
//     Number.isFinite(deliveryCharge) &&
//     deliveryCharge > 0
//   ) {

//     lineItems.push({

//       name:
//         "Delivery Charge",

//       description:
//         "Delivery charge",

//       rate:
//         Number(
//           deliveryCharge.toFixed(2)
//         ),

//       quantity:
//         1,

//     });

//   }


//   return lineItems;

// };


// // =====================================================
// // CREATE ZOHO INVOICE
// // =====================================================

// const createZohoInvoice = async (
//   order
// ) => {

//   try {

//     console.log(
//       "========================================"
//     );

//     console.log(
//       "CREATING ZOHO INVOICE"
//     );

//     console.log(
//       "Order:",
//       order.orderNumber
//     );

//     console.log(
//       "Customer:",
//       order.email
//     );

//     console.log(
//       "========================================"
//     );


//     // =================================================
//     // GET ACCESS TOKEN
//     // =================================================

//     const accessToken =
//       await getAccessToken();


//     // =================================================
//     // FIND / CREATE CUSTOMER
//     // =================================================

//     const customer =
//       await findOrCreateCustomer(
//         order,
//         accessToken
//       );


//     if (
//       !customer?.contact_id
//     ) {

//       throw new Error(
//         "Zoho customer ID was not returned"
//       );

//     }


//     // =================================================
//     // HEADERS
//     // =================================================

//     const headers =
//       getHeaders(accessToken);


//     const organizationId =
//       getOrganizationId();


//     // =================================================
//     // BUILD LINE ITEMS
//     // =================================================

//     const lineItems =
//       buildInvoiceLineItems(
//         order
//       );


//     if (
//       lineItems.length === 0
//     ) {

//       throw new Error(
//         "Cannot create Zoho invoice without line items"
//       );

//     }


//     // =================================================
//     // INVOICE DATA
//     // =================================================

//     const invoiceData = {

//       customer_id:
//         customer.contact_id,

//       reference_number:
//         order.orderNumber,

//       line_items:
//         lineItems,

//       notes:
//         [
//           "Payment proof submitted by customer.",
//           "Payment verification is pending.",
//           "Verification takes 2–3 working days.",
//         ].join(" "),

//       terms:
//         "Payment verification takes 2–3 working days.",

//     };


//     // =================================================
//     // LOG
//     // =================================================

//     console.log(
//       "Sending invoice request to Zoho..."
//     );


//     console.log(
//       "Customer ID:",
//       customer.contact_id
//     );


//     console.log(
//       "Reference:",
//       order.orderNumber
//     );


//     console.log(
//       "Line Items:",
//       JSON.stringify(
//         lineItems,
//         null,
//         2
//       )
//     );


//     // =================================================
//     // CREATE INVOICE
//     // =================================================

//     const invoiceResponse =
//       await axios.post(

//         `${ZOHO_BOOKS_URL}/invoices`,

//         invoiceData,

//         {

//           headers,

//           params: {

//             organization_id:
//               organizationId,

//           },

//           timeout: 20000,

//         }

//       );


//     const invoice =
//       invoiceResponse.data?.invoice;


//     // =================================================
//     // VALIDATE RESPONSE
//     // =================================================

//     if (
//       !invoice ||
//       !invoice.invoice_id
//     ) {

//       console.error(
//         "INVALID ZOHO INVOICE RESPONSE:",
//         invoiceResponse.data
//       );


//       throw new Error(
//         "Zoho invoice was not created"
//       );

//     }


//     // =================================================
//     // SUCCESS
//     // =================================================

//     console.log(
//       "========================================"
//     );

//     console.log(
//       "ZOHO INVOICE CREATED SUCCESSFULLY"
//     );

//     console.log(
//       "Customer ID:",
//       customer.contact_id
//     );

//     console.log(
//       "Invoice ID:",
//       invoice.invoice_id
//     );

//     console.log(
//       "Invoice Number:",
//       invoice.invoice_number
//     );

//     console.log(
//       "Invoice Status:",
//       invoice.status
//     );

//     console.log(
//       "========================================"
//     );


//     return {

//       customer,

//       invoice,

//     };


//   } catch (error) {

//     console.error(
//       "========================================"
//     );

//     console.error(
//       "CREATE ZOHO INVOICE ERROR"
//     );

//     console.error(
//       "Order:",
//       order?.orderNumber
//     );

//     console.error(
//       "Message:",
//       error.message
//     );


//     if (
//       error.response
//     ) {

//       console.error(
//         "Zoho HTTP Status:",
//         error.response.status
//       );


//       console.error(
//         "Zoho Response:",
//         error.response.data
//       );

//     } else {

//       console.error(
//         "Zoho Response:",
//         undefined
//       );

//     }


//     console.error(
//       "========================================"
//     );


//     throw error;

//   }

// };


// // =====================================================
// // EXPORT
// // =====================================================

// module.exports = {

//   getAccessToken,

//   findCustomerByEmail,

//   findCustomerByName,

//   createCustomer,

//   findOrCreateCustomer,

//   createZohoInvoice,

// };






// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// /*
// |--------------------------------------------------------------------------
// | ZOHO BOOKS CONFIG
// |--------------------------------------------------------------------------
// */

// const ZOHO_ACCOUNTS_URL =
//   process.env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.eu";

// const ZOHO_BOOKS_URL =
//   process.env.ZOHO_BOOKS_URL || "https://www.zohoapis.eu/books/v3";

// const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
// const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
// const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
// const ZOHO_ORGANIZATION_ID = process.env.ZOHO_ORGANIZATION_ID;


// /*
// |--------------------------------------------------------------------------
// | BASIC VALIDATION
// |--------------------------------------------------------------------------
// */

// function validateZohoConfig() {
//   const missing = [];

//   if (!ZOHO_CLIENT_ID) missing.push("ZOHO_CLIENT_ID");
//   if (!ZOHO_CLIENT_SECRET) missing.push("ZOHO_CLIENT_SECRET");
//   if (!ZOHO_REFRESH_TOKEN) missing.push("ZOHO_REFRESH_TOKEN");
//   if (!ZOHO_ORGANIZATION_ID) missing.push("ZOHO_ORGANIZATION_ID");

//   if (missing.length > 0) {
//     throw new Error(
//       `Zoho OAuth environment variables are missing: ${missing.join(", ")}`
//     );
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | GET ACCESS TOKEN
// |--------------------------------------------------------------------------
// |
// | Refresh token is long-lived.
// | Access token is generated when needed.
// |
// */

// export async function getZohoAccessToken() {
//   validateZohoConfig();

//   try {
//     const response = await axios.post(
//       `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
//       null,
//       {
//         params: {
//           refresh_token: ZOHO_REFRESH_TOKEN,
//           client_id: ZOHO_CLIENT_ID,
//           client_secret: ZOHO_CLIENT_SECRET,
//           grant_type: "refresh_token",
//         },
//         timeout: 30000,
//       }
//     );

//     if (!response.data?.access_token) {
//       console.error("ZOHO TOKEN RESPONSE:", response.data);
//       throw new Error("Zoho did not return an access token");
//     }

//     console.log("Zoho access token generated successfully");

//     return response.data.access_token;
//   } catch (error) {
//     console.error("ZOHO ACCESS TOKEN ERROR:");

//     console.error(
//       error.response?.data || error.message
//     );

//     throw error;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | COMMON HEADERS
// |--------------------------------------------------------------------------
// */

// function zohoHeaders(accessToken) {
//   return {
//     Authorization: `Zoho-oauthtoken ${accessToken}`,
//     "Content-Type": "application/json",
//   };
// }


// /*
// |--------------------------------------------------------------------------
// | FIND CUSTOMER BY EMAIL
// |--------------------------------------------------------------------------
// */

// export async function findCustomerByEmail(
//   accessToken,
//   email
// ) {
//   if (!email) return null;

//   console.log(
//     "Searching Zoho customer by email:",
//     email
//   );

//   try {
//     const response = await axios.get(
//       `${ZOHO_BOOKS_URL}/contacts`,
//       {
//         headers: zohoHeaders(accessToken),
//         params: {
//           organization_id: ZOHO_ORGANIZATION_ID,
//           contact_type: "customer",
//           email,
//         },
//         timeout: 30000,
//       }
//     );

//     const contacts =
//       response.data?.contacts || [];

//     if (contacts.length > 0) {
//       console.log(
//         "Zoho customer found by email:",
//         contacts[0].contact_id
//       );

//       return contacts[0];
//     }

//     console.log(
//       "No Zoho customer found by email"
//     );

//     return null;
//   } catch (error) {
//     console.error(
//       "ZOHO FIND CUSTOMER BY EMAIL ERROR:"
//     );

//     console.error(
//       error.response?.data || error.message
//     );

//     return null;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | FIND CUSTOMER BY NAME
// |--------------------------------------------------------------------------
// */

// export async function findCustomerByName(
//   accessToken,
//   customerName
// ) {
//   if (!customerName) return null;

//   console.log(
//     "Searching Zoho customer by name:",
//     customerName
//   );

//   try {
//     const response = await axios.get(
//       `${ZOHO_BOOKS_URL}/contacts`,
//       {
//         headers: zohoHeaders(accessToken),
//         params: {
//           organization_id: ZOHO_ORGANIZATION_ID,
//           contact_type: "customer",
//           contact_name: customerName,
//         },
//         timeout: 30000,
//       }
//     );

//     const contacts =
//       response.data?.contacts || [];

//     if (contacts.length > 0) {
//       console.log(
//         "Zoho customer found by name:",
//         contacts[0].contact_id
//       );

//       return contacts[0];
//     }

//     console.log(
//       "No Zoho customer found by name"
//     );

//     return null;
//   } catch (error) {
//     console.error(
//       "ZOHO FIND CUSTOMER BY NAME ERROR:"
//     );

//     console.error(
//       error.response?.data || error.message
//     );

//     return null;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | CREATE CUSTOMER
// |--------------------------------------------------------------------------
// |
// | IMPORTANT:
// | We intentionally DO NOT send:
// |
// |     tax_reg_no
// |
// | because your Zoho EU organization rejected it with:
// |
// |     Invalid value passed for tax_reg_no
// |
// | VAT/tax registration can be added later using the correct
// | Zoho field/configuration for the organization's edition.
// |
// */

// export async function createCustomer(
//   accessToken,
//   order
// ) {
//   const firstName =
//     String(order.firstName || "").trim();

//   const lastName =
//     String(order.lastName || "").trim();

//   const fullName =
//     `${firstName} ${lastName}`.trim();

//   const customerName =
//     fullName ||
//     order.companyName ||
//     order.email ||
//     `Customer ${order.id}`;

//   console.log(
//     "Creating Zoho customer:",
//     customerName
//   );

//   const customerData = {
//     contact_name: customerName,

//     contact_type: "customer",

//     customer_sub_type:
//       order.companyName
//         ? "business"
//         : "individual",

//     email: order.email,

//     phone: order.phone || undefined,

//     company_name:
//       order.companyName || undefined,

//     billing_address: {
//       attention: customerName,

//       address:
//         order.addressLine1 || "",

//       street2:
//         order.addressLine2 || "",

//       city:
//         order.city || "",

//       state:
//         order.state || "",

//       zip:
//         order.postalCode || "",

//       country:
//         order.country || "",
//     },

//     shipping_address: {
//       attention: customerName,

//       address:
//         order.addressLine1 || "",

//       street2:
//         order.addressLine2 || "",

//       city:
//         order.city || "",

//       state:
//         order.state || "",

//       zip:
//         order.postalCode || "",

//       country:
//         order.country || "",
//     },

//     contact_persons: [
//       {
//         first_name:
//           firstName || undefined,

//         last_name:
//           lastName || undefined,

//         email:
//           order.email || undefined,

//         phone:
//           order.phone || undefined,

//         is_primary_contact: true,
//       },
//     ],

//     notes:
//       `A4 Events Order: ${order.orderNumber}`,
//   };


//   /*
//   |--------------------------------------------------------------------------
//   | REMOVE UNDEFINED VALUES
//   |--------------------------------------------------------------------------
//   */

//   function cleanObject(obj) {
//     if (Array.isArray(obj)) {
//       return obj
//         .map(cleanObject)
//         .filter(
//           (item) => item !== undefined
//         );
//     }

//     if (
//       obj !== null &&
//       typeof obj === "object"
//     ) {
//       return Object.fromEntries(
//         Object.entries(obj)
//           .filter(
//             ([, value]) =>
//               value !== undefined &&
//               value !== null &&
//               value !== ""
//           )
//           .map(([key, value]) => [
//             key,
//             cleanObject(value),
//           ])
//       );
//     }

//     return obj;
//   }

//   const cleanedCustomerData =
//     cleanObject(customerData);


//   try {
//     const response = await axios.post(
//       `${ZOHO_BOOKS_URL}/contacts`,
//       cleanedCustomerData,
//       {
//         headers: zohoHeaders(accessToken),

//         params: {
//           organization_id:
//             ZOHO_ORGANIZATION_ID,
//         },

//         timeout: 30000,
//       }
//     );

//     const customer =
//       response.data?.contact;

//     if (!customer?.contact_id) {
//       console.error(
//         "ZOHO CREATE CUSTOMER RESPONSE:",
//         response.data
//       );

//       throw new Error(
//         "Zoho customer was not created"
//       );
//     }

//     console.log(
//       "Zoho customer created:",
//       customer.contact_id
//     );

//     return customer;
//   } catch (error) {
//     console.error(
//       "ZOHO CREATE CUSTOMER ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );

//     throw error;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | FIND OR CREATE CUSTOMER
// |--------------------------------------------------------------------------
// */

// export async function findOrCreateCustomer(
//   accessToken,
//   order
// ) {
//   /*
//    * 1. Search by email
//    */

//   const byEmail =
//     await findCustomerByEmail(
//       accessToken,
//       order.email
//     );

//   if (byEmail) {
//     return byEmail;
//   }


//   /*
//    * 2. Search by name
//    */

//   const customerName =
//     `${order.firstName || ""} ${
//       order.lastName || ""
//     }`.trim();

//   const byName =
//     await findCustomerByName(
//       accessToken,
//       customerName
//     );

//   if (byName) {
//     return byName;
//   }


//   /*
//    * 3. Create customer
//    */

//   return await createCustomer(
//     accessToken,
//     order
//   );
// }


// /*
// |--------------------------------------------------------------------------
// | FIND ZOHO ITEM
// |--------------------------------------------------------------------------
// |
// | Searches the existing Zoho sales item by name.
// |
// */

// export async function findZohoItem(
//   accessToken,
//   itemName
// ) {
//   if (!itemName) return null;

//   console.log(
//     "Searching Zoho item:",
//     itemName
//   );

//   try {
//     const response = await axios.get(
//       `${ZOHO_BOOKS_URL}/items`,
//       {
//         headers: zohoHeaders(accessToken),

//         params: {
//           organization_id:
//             ZOHO_ORGANIZATION_ID,

//           search_text: itemName,

//           status: "active",

//           per_page: 200,
//         },

//         timeout: 30000,
//       }
//     );

//     const items =
//       response.data?.items || [];

//     /*
//      * Prefer exact name match.
//      */

//     const exact =
//       items.find(
//         (item) =>
//           String(item.name || "")
//             .trim()
//             .toLowerCase() ===
//           String(itemName)
//             .trim()
//             .toLowerCase()
//       );

//     if (exact) {
//       console.log(
//         "Zoho item found:",
//         exact.item_id,
//         exact.name,
//         "type:",
//         exact.item_type
//       );

//       return exact;
//     }

//     console.log(
//       "No exact Zoho item found:",
//       itemName
//     );

//     return null;
//   } catch (error) {
//     console.error(
//       "ZOHO FIND ITEM ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );

//     return null;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | CREATE SALES ITEM
// |--------------------------------------------------------------------------
// |
// | IMPORTANT:
// |
// | Zoho requires an item_id on invoice line items.
// |
// | A purchase-only item cannot be directly used on a sales invoice.
// |
// | This function attempts to create a dedicated SALES item.
// |
// | Required environment variable:
// |
// | ZOHO_SALES_ACCOUNT_ID
// |
// | Example:
// |
// | ZOHO_SALES_ACCOUNT_ID=xxxxxxxxxxxxxxxx
// |
// | This must be a SALES account ID from your Zoho Books organization.
// |
// */

// export async function createZohoSalesItem(
//   accessToken,
//   productName,
//   rate,
//   description
// ) {
//   const salesAccountId =
//     process.env.ZOHO_SALES_ACCOUNT_ID;

//   if (!salesAccountId) {
//     throw new Error(
//       "ZOHO_SALES_ACCOUNT_ID is missing. Add your Zoho Books sales account ID to backend .env before creating automatic sales items."
//     );
//   }

//   const cleanName =
//     String(productName || "A4 Product")
//       .trim();

//   const salesItemName =
//     `A4 Sales - ${cleanName}`;

//   console.log(
//     "Creating Zoho sales item:",
//     salesItemName
//   );

//   const itemData = {
//     name: salesItemName,

//     description:
//       description ||
//       cleanName,

//     rate:
//       Number(rate || 0),

//     unit: "unit",

//     item_type: "sales",

//     account_id:
//       String(salesAccountId),
//   };


//   try {
//     const response = await axios.post(
//       `${ZOHO_BOOKS_URL}/items`,
//       itemData,
//       {
//         headers: zohoHeaders(accessToken),

//         params: {
//           organization_id:
//             ZOHO_ORGANIZATION_ID,
//         },

//         timeout: 30000,
//       }
//     );

//     const item =
//       response.data?.item;

//     if (!item?.item_id) {
//       console.error(
//         "ZOHO CREATE ITEM RESPONSE:",
//         response.data
//       );

//       throw new Error(
//         "Zoho sales item was not created"
//       );
//     }

//     console.log(
//       "Zoho sales item created:",
//       item.item_id
//     );

//     return item;
//   } catch (error) {
//     console.error(
//       "ZOHO CREATE SALES ITEM ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );

//     throw error;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | GET OR CREATE SALES ITEM
// |--------------------------------------------------------------------------
// |
// | Strategy:
// |
// | Existing product name
// |        |
// |        +--> Existing sales item?
// |                 |
// |                 +--> YES → use it
// |                 |
// |                 +--> NO → create "A4 Sales - Product"
// |
// | We deliberately do NOT use a purchase-only item.
// |
// */

// export async function getOrCreateSalesItem(
//   accessToken,
//   productName,
//   rate,
//   description
// ) {
//   /*
//    * First search for the dedicated A4 sales item.
//    */

//   const salesItemName =
//     `A4 Sales - ${String(
//       productName || ""
//     ).trim()}`;


//   const dedicatedSalesItem =
//     await findZohoItem(
//       accessToken,
//       salesItemName
//     );

//   if (dedicatedSalesItem) {
//     /*
//      * Make sure it is actually usable for sales.
//      */

//     const itemType =
//       String(
//         dedicatedSalesItem.item_type ||
//         dedicatedSalesItem.product_type ||
//         ""
//       ).toLowerCase();

//     if (
//       itemType === "sales" ||
//       itemType === "sales_and_purchases" ||
//       itemType === "inventory" ||
//       itemType === ""
//     ) {
//       console.log(
//         "Using existing A4 sales item:",
//         dedicatedSalesItem.item_id
//       );

//       return dedicatedSalesItem;
//     }
//   }


//   /*
//    * Create dedicated sales item.
//    */

//   return await createZohoSalesItem(
//     accessToken,
//     productName,
//     rate,
//     description
//   );
// }


// /*
// |--------------------------------------------------------------------------
// | BUILD INVOICE LINE ITEMS
// |--------------------------------------------------------------------------
// */

// export async function buildInvoiceLineItems(
//   accessToken,
//   order
// ) {
//   const items =
//     Array.isArray(order.items)
//       ? order.items
//       : [];

//   if (items.length === 0) {
//     throw new Error(
//       "Order contains no items"
//     );
//   }

//   const lineItems = [];

//   for (const orderItem of items) {
//     const productName =
//       orderItem.productTitle ||
//       orderItem.product?.title ||
//       orderItem.product?.name ||
//       orderItem.name ||
//       `Product ${orderItem.productId}`;

//     const quantity =
//       Number(orderItem.quantity || 1);

//     const rate =
//       Number(
//         orderItem.price ||
//         orderItem.unitPrice ||
//         0
//       );

//     if (rate < 0) {
//       throw new Error(
//         `Invalid product price for ${productName}`
//       );
//     }


//     const zohoItem =
//       await getOrCreateSalesItem(
//         accessToken,
//         productName,
//         rate,
//         productName
//       );


//     lineItems.push({
//       item_id:
//         String(zohoItem.item_id),

//       name:
//         productName,

//       description:
//         productName,

//       rate:
//         rate,

//       quantity:
//         quantity,
//     });
//   }

//   return lineItems;
// }


// /*
// |--------------------------------------------------------------------------
// | CALCULATE INVOICE AMOUNT
// |--------------------------------------------------------------------------
// |
// | IMPORTANT:
// |
// | We use order.total as the final amount.
// |
// | We do NOT subtract order.discount again.
// |
// | This prevents the double-discount problem.
// |
// */

// function getOrderTotals(order) {
//   const subtotal =
//     Number(order.subtotal || 0);

//   const discount =
//     Number(order.discount || 0);

//   const deliveryCharge =
//     Number(order.deliveryCharge || 0);

//   let total;

//   if (
//     order.total !== undefined &&
//     order.total !== null
//   ) {
//     total =
//       Number(order.total);
//   } else {
//     total =
//       subtotal -
//       discount +
//       deliveryCharge;
//   }

//   return {
//     subtotal,
//     discount,
//     deliveryCharge,
//     total,
//   };
// }


// /*
// |--------------------------------------------------------------------------
// | CREATE ZOHO INVOICE
// |--------------------------------------------------------------------------
// */

// export async function createZohoInvoice(
//   order
// ) {
//   console.log(
//     "========================================"
//   );

//   console.log(
//     "CREATING ZOHO INVOICE"
//   );

//   console.log(
//     "Order:",
//     order.orderNumber
//   );

//   console.log(
//     "Customer:",
//     order.email
//   );

//   console.log(
//     "========================================"
//   );


//   try {
//     /*
//      * Validate configuration.
//      */

//     validateZohoConfig();


//     /*
//      * Get access token.
//      */

//     const accessToken =
//       await getZohoAccessToken();


//     /*
//      * Find/create customer.
//      */

//     const customer =
//       await findOrCreateCustomer(
//         accessToken,
//         order
//       );


//     if (!customer?.contact_id) {
//       throw new Error(
//         "Unable to obtain Zoho customer ID"
//       );
//     }


//     /*
//      * Build invoice items.
//      */

//     const lineItems =
//       await buildInvoiceLineItems(
//         accessToken,
//         order
//       );


//     /*
//      * Get totals.
//      */

//     const totals =
//       getOrderTotals(order);


//     console.log(
//       "Zoho Customer ID:",
//       customer.contact_id
//     );

//     console.log(
//       "Zoho Line Items:",
//       JSON.stringify(
//         lineItems,
//         null,
//         2
//       )
//     );

//     console.log(
//       "Order totals:",
//       totals
//     );


//     /*
//      |--------------------------------------------------------------------------
//      | INVOICE DATA
//      |--------------------------------------------------------------------------
//      */

//     const invoiceData = {
//       customer_id:
//         String(customer.contact_id),

//       reference_number:
//         order.orderNumber,

//       date:
//         new Date()
//           .toISOString()
//           .split("T")[0],

//       line_items:
//         lineItems,

//       shipping_charge:
//         totals.deliveryCharge,

//       notes:
//         `A4 Events Order ${order.orderNumber}. Payment proof submitted. Payment verification is pending.`,

//       terms:
//         "Payment received by bank transfer is subject to verification by A4 Events.",

//       send: false,

//       allow_partial_payments: false,
//     };


//     /*
//      * If there is an order discount that is NOT already
//      * reflected in the item prices, apply it here.
//      *
//      * Your current order structure already stores final
//      * item prices / total, so we intentionally do NOT
//      * send the discount again.
//      */


//     console.log(
//       "Sending invoice request to Zoho..."
//     );

//     console.log(
//       "Customer ID:",
//       customer.contact_id
//     );

//     console.log(
//       "Reference:",
//       order.orderNumber
//     );

//     console.log(
//       "Line Items:",
//       JSON.stringify(
//         lineItems,
//         null,
//         2
//       )
//     );


//     /*
//      |--------------------------------------------------------------------------
//      | CREATE INVOICE
//      |--------------------------------------------------------------------------
//      */

//     const response =
//       await axios.post(
//         `${ZOHO_BOOKS_URL}/invoices`,
//         invoiceData,
//         {
//           headers:
//             zohoHeaders(accessToken),

//           params: {
//             organization_id:
//               ZOHO_ORGANIZATION_ID,
//           },

//           timeout: 30000,
//         }
//       );


//     const invoice =
//       response.data?.invoice;


//     if (!invoice?.invoice_id) {
//       console.error(
//         "ZOHO CREATE INVOICE RESPONSE:",
//         response.data
//       );

//       throw new Error(
//         "Zoho invoice was not created"
//       );
//     }


//     console.log(
//       "========================================"
//     );

//     console.log(
//       "ZOHO INVOICE CREATED SUCCESSFULLY"
//     );

//     console.log(
//       "Invoice ID:",
//       invoice.invoice_id
//     );

//     console.log(
//       "Invoice Number:",
//       invoice.invoice_number
//     );

//     console.log(
//       "Customer ID:",
//       customer.contact_id
//     );

//     console.log(
//       "Order:",
//       order.orderNumber
//     );

//     console.log(
//       "========================================"
//     );


//     /*
//      * Return useful data to controller.
//      */

//     return {
//       success: true,

//       invoice,

//       invoiceId:
//         invoice.invoice_id,

//       invoiceNumber:
//         invoice.invoice_number,

//       customerId:
//         customer.contact_id,

//       customerName:
//         customer.contact_name,

//       total:
//         invoice.total ??
//         totals.total,

//       status:
//         invoice.status,
//     };
//   } catch (error) {
//     console.error(
//       "========================================"
//     );

//     console.error(
//       "CREATE ZOHO INVOICE ERROR"
//     );

//     console.error(
//       "Order:",
//       order?.orderNumber
//     );

//     console.error(
//       "Message:",
//       error.message
//     );

//     console.error(
//       "Zoho HTTP Status:",
//       error.response?.status
//     );

//     console.error(
//       "Zoho Response:",
//       error.response?.data
//     );

//     console.error(
//       "========================================"
//     );

//     throw error;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | GET ZOHO INVOICE
// |--------------------------------------------------------------------------
// */

// export async function getZohoInvoice(
//   invoiceId
// ) {
//   try {
//     const accessToken =
//       await getZohoAccessToken();

//     const response =
//       await axios.get(
//         `${ZOHO_BOOKS_URL}/invoices/${invoiceId}`,
//         {
//           headers:
//             zohoHeaders(accessToken),

//           params: {
//             organization_id:
//               ZOHO_ORGANIZATION_ID,
//           },

//           timeout: 30000,
//         }
//       );

//     return response.data?.invoice;
//   } catch (error) {
//     console.error(
//       "ZOHO GET INVOICE ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );

//     throw error;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | MARK INVOICE AS SENT
// |--------------------------------------------------------------------------
// |
// | Optional helper.
// |
// */

// export async function markZohoInvoiceAsSent(
//   invoiceId
// ) {
//   try {
//     const accessToken =
//       await getZohoAccessToken();

//     const response =
//       await axios.post(
//         `${ZOHO_BOOKS_URL}/invoices/${invoiceId}/status/sent`,
//         {},
//         {
//           headers:
//             zohoHeaders(accessToken),

//           params: {
//             organization_id:
//               ZOHO_ORGANIZATION_ID,
//           },

//           timeout: 30000,
//         }
//       );

//     console.log(
//       "Zoho invoice marked as sent:",
//       invoiceId
//     );

//     return response.data;
//   } catch (error) {
//     console.error(
//       "ZOHO MARK INVOICE SENT ERROR:"
//     );

//     console.error(
//       error.response?.data ||
//       error.message
//     );

//     throw error;
//   }
// }


// /*
// |--------------------------------------------------------------------------
// | EXPORTS
// |--------------------------------------------------------------------------
// */

// export default {
//   getZohoAccessToken,

//   findCustomerByEmail,

//   findCustomerByName,

//   createCustomer,

//   findOrCreateCustomer,

//   findZohoItem,

//   createZohoSalesItem,

//   getOrCreateSalesItem,

//   buildInvoiceLineItems,

//   createZohoInvoice,

//   getZohoInvoice,

//   markZohoInvoiceAsSent,
// };



const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

/*
|--------------------------------------------------------------------------
| ZOHO BOOKS CONFIG
|--------------------------------------------------------------------------
*/

const ZOHO_ACCOUNTS_URL =
  process.env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.eu";

const ZOHO_BOOKS_URL =
  process.env.ZOHO_BOOKS_URL || "https://www.zohoapis.eu/books/v3";

const ZOHO_CLIENT_ID = process.env.ZOHO_CLIENT_ID;
const ZOHO_CLIENT_SECRET = process.env.ZOHO_CLIENT_SECRET;
const ZOHO_REFRESH_TOKEN = process.env.ZOHO_REFRESH_TOKEN;
const ZOHO_ORGANIZATION_ID = process.env.ZOHO_ORGANIZATION_ID;


/*
|--------------------------------------------------------------------------
| BASIC VALIDATION
|--------------------------------------------------------------------------
*/

function validateZohoConfig() {
  const missing = [];

  if (!ZOHO_CLIENT_ID) missing.push("ZOHO_CLIENT_ID");
  if (!ZOHO_CLIENT_SECRET) missing.push("ZOHO_CLIENT_SECRET");
  if (!ZOHO_REFRESH_TOKEN) missing.push("ZOHO_REFRESH_TOKEN");
  if (!ZOHO_ORGANIZATION_ID) missing.push("ZOHO_ORGANIZATION_ID");

  if (missing.length > 0) {
    throw new Error(
      `Zoho OAuth environment variables are missing: ${missing.join(", ")}`
    );
  }
}


/*
|--------------------------------------------------------------------------
| GET ACCESS TOKEN
|--------------------------------------------------------------------------
|
| Refresh token is long-lived.
| Access token is generated when needed.
|
*/

async function getZohoAccessToken() {
  validateZohoConfig();

  try {
    const response = await axios.post(
      `${ZOHO_ACCOUNTS_URL}/oauth/v2/token`,
      null,
      {
        params: {
          refresh_token: ZOHO_REFRESH_TOKEN,
          client_id: ZOHO_CLIENT_ID,
          client_secret: ZOHO_CLIENT_SECRET,
          grant_type: "refresh_token",
        },
        timeout: 30000,
      }
    );

    if (!response.data?.access_token) {
      console.error("ZOHO TOKEN RESPONSE:", response.data);
      throw new Error("Zoho did not return an access token");
    }

    console.log("Zoho access token generated successfully");

    return response.data.access_token;
  } catch (error) {
    console.error("ZOHO ACCESS TOKEN ERROR:");

    console.error(
      error.response?.data || error.message
    );

    throw error;
  }
}


/*
|--------------------------------------------------------------------------
| COMMON HEADERS
|--------------------------------------------------------------------------
*/

function zohoHeaders(accessToken) {
  return {
    Authorization: `Zoho-oauthtoken ${accessToken}`,
    "Content-Type": "application/json",
  };
}


/*
|--------------------------------------------------------------------------
| FIND CUSTOMER BY EMAIL
|--------------------------------------------------------------------------
*/

async function findCustomerByEmail(
  accessToken,
  email
) {
  if (!email) return null;

  console.log(
    "Searching Zoho customer by email:",
    email
  );

  try {
    const response = await axios.get(
      `${ZOHO_BOOKS_URL}/contacts`,
      {
        headers: zohoHeaders(accessToken),
        params: {
          organization_id: ZOHO_ORGANIZATION_ID,
          contact_type: "customer",
          email,
        },
        timeout: 30000,
      }
    );

    const contacts =
      response.data?.contacts || [];

    if (contacts.length > 0) {
      console.log(
        "Zoho customer found by email:",
        contacts[0].contact_id
      );

      return contacts[0];
    }

    console.log(
      "No Zoho customer found by email"
    );

    return null;
  } catch (error) {
    console.error(
      "ZOHO FIND CUSTOMER BY EMAIL ERROR:"
    );

    console.error(
      error.response?.data || error.message
    );

    return null;
  }
}


/*
|--------------------------------------------------------------------------
| FIND CUSTOMER BY NAME
|--------------------------------------------------------------------------
*/

async function findCustomerByName(
  accessToken,
  customerName
) {
  if (!customerName) return null;

  console.log(
    "Searching Zoho customer by name:",
    customerName
  );

  try {
    const response = await axios.get(
      `${ZOHO_BOOKS_URL}/contacts`,
      {
        headers: zohoHeaders(accessToken),
        params: {
          organization_id: ZOHO_ORGANIZATION_ID,
          contact_type: "customer",
          contact_name: customerName,
        },
        timeout: 30000,
      }
    );

    const contacts =
      response.data?.contacts || [];

    if (contacts.length > 0) {
      console.log(
        "Zoho customer found by name:",
        contacts[0].contact_id
      );

      return contacts[0];
    }

    console.log(
      "No Zoho customer found by name"
    );

    return null;
  } catch (error) {
    console.error(
      "ZOHO FIND CUSTOMER BY NAME ERROR:"
    );

    console.error(
      error.response?.data || error.message
    );

    return null;
  }
}


/*
|--------------------------------------------------------------------------
| CREATE CUSTOMER
|--------------------------------------------------------------------------
|
| IMPORTANT:
| We intentionally DO NOT send:
|
|     tax_reg_no
|
| because your Zoho EU organization rejected it with:
|
|     Invalid value passed for tax_reg_no
|
| VAT/tax registration can be added later using the correct
| Zoho field/configuration for the organization's edition.
|
*/

async function createCustomer(
  accessToken,
  order
) {
  const firstName =
    String(order.firstName || "").trim();

  const lastName =
    String(order.lastName || "").trim();

  const fullName =
    `${firstName} ${lastName}`.trim();

  const customerName =
    fullName ||
    order.companyName ||
    order.email ||
    `Customer ${order.id}`;

  console.log(
    "Creating Zoho customer:",
    customerName
  );

  const customerData = {
    contact_name: customerName,

    contact_type: "customer",

    customer_sub_type:
      order.companyName
        ? "business"
        : "individual",

    email: order.email,

    phone: order.phone || undefined,

    company_name:
      order.companyName || undefined,

    billing_address: {
      attention: customerName,

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

    shipping_address: {
      attention: customerName,

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

    contact_persons: [
      {
        first_name:
          firstName || undefined,

        last_name:
          lastName || undefined,

        email:
          order.email || undefined,

        phone:
          order.phone || undefined,

        is_primary_contact: true,
      },
    ],

    notes:
      `A4 Events Order: ${order.orderNumber}`,
  };


  /*
  |--------------------------------------------------------------------------
  | REMOVE UNDEFINED VALUES AND FORBIDDEN FIELDS
  |--------------------------------------------------------------------------
  */

  function cleanObject(obj) {
    if (Array.isArray(obj)) {
      return obj
        .map(cleanObject)
        .filter(
          (item) => item !== undefined
        );
    }

    if (
      obj !== null &&
      typeof obj === "object"
    ) {
      const cleaned = {};
      
      for (const [key, value] of Object.entries(obj)) {
        // Skip tax_reg_no explicitly
        if (key === "tax_reg_no") {
          continue;
        }
        
        if (value !== undefined && value !== null && value !== "") {
          cleaned[key] = cleanObject(value);
        }
      }
      
      return cleaned;
    }

    return obj;
  }

  const cleanedCustomerData =
    cleanObject(customerData);


  try {
    const response = await axios.post(
      `${ZOHO_BOOKS_URL}/contacts`,
      cleanedCustomerData,
      {
        headers: zohoHeaders(accessToken),

        params: {
          organization_id:
            ZOHO_ORGANIZATION_ID,
        },

        timeout: 30000,
      }
    );

    const customer =
      response.data?.contact;

    if (!customer?.contact_id) {
      console.error(
        "ZOHO CREATE CUSTOMER RESPONSE:",
        response.data
      );

      throw new Error(
        "Zoho customer was not created"
      );
    }

    console.log(
      "Zoho customer created:",
      customer.contact_id
    );

    return customer;
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
}


/*
|--------------------------------------------------------------------------
| FIND OR CREATE CUSTOMER
|--------------------------------------------------------------------------
*/

async function findOrCreateCustomer(
  accessToken,
  order
) {
  /*
   * 1. Search by email
   */

  const byEmail =
    await findCustomerByEmail(
      accessToken,
      order.email
    );

  if (byEmail) {
    return byEmail;
  }


  /*
   * 2. Search by name
   */

  const customerName =
    `${order.firstName || ""} ${
      order.lastName || ""
    }`.trim();

  const byName =
    await findCustomerByName(
      accessToken,
      customerName
    );

  if (byName) {
    return byName;
  }


  /*
   * 3. Create customer
   */

  return await createCustomer(
    accessToken,
    order
  );
}


/*
|--------------------------------------------------------------------------
| FIND ZOHO ITEM
|--------------------------------------------------------------------------
|
| Searches the existing Zoho sales item by name.
|
*/

async function findZohoItem(
  accessToken,
  itemName
) {
  if (!itemName) return null;

  console.log(
    "Searching Zoho item:",
    itemName
  );

  try {
    const response = await axios.get(
      `${ZOHO_BOOKS_URL}/items`,
      {
        headers: zohoHeaders(accessToken),

        params: {
          organization_id:
            ZOHO_ORGANIZATION_ID,

          search_text: itemName,

          status: "active",

          per_page: 200,
        },

        timeout: 30000,
      }
    );

    const items =
      response.data?.items || [];

    /*
     * Prefer exact name match.
     */

    const exact =
      items.find(
        (item) =>
          String(item.name || "")
            .trim()
            .toLowerCase() ===
          String(itemName)
            .trim()
            .toLowerCase()
      );

    if (exact) {
      console.log(
        "Zoho item found:",
        exact.item_id,
        exact.name,
        "type:",
        exact.item_type
      );

      return exact;
    }

    console.log(
      "No exact Zoho item found:",
      itemName
    );

    return null;
  } catch (error) {
    console.error(
      "ZOHO FIND ITEM ERROR:"
    );

    console.error(
      error.response?.data ||
      error.message
    );

    return null;
  }
}


/*
|--------------------------------------------------------------------------
| CREATE SALES ITEM
|--------------------------------------------------------------------------
|
| IMPORTANT:
|
| Zoho requires an item_id on invoice line items.
|
| A purchase-only item cannot be directly used on a sales invoice.
|
| This function attempts to create a dedicated SALES item.
|
| Required environment variable:
|
| ZOHO_SALES_ACCOUNT_ID
|
| Example:
|
| ZOHO_SALES_ACCOUNT_ID=xxxxxxxxxxxxxxxx
|
| This must be a SALES account ID from your Zoho Books organization.
|
*/

async function createZohoSalesItem(
  accessToken,
  productName,
  rate,
  description
) {
  const salesAccountId =
    process.env.ZOHO_SALES_ACCOUNT_ID;

  if (!salesAccountId) {
    throw new Error(
      "ZOHO_SALES_ACCOUNT_ID is missing. Add your Zoho Books sales account ID to backend .env before creating automatic sales items."
    );
  }

  const cleanName =
    String(productName || "A4 Product")
      .trim();

  const salesItemName =
    `A4 Sales - ${cleanName}`;

  console.log(
    "Creating Zoho sales item:",
    salesItemName
  );

  const itemData = {
    name: salesItemName,

    description:
      description ||
      cleanName,

    rate:
      Number(rate || 0),

    unit: "unit",

    item_type: "sales",

    account_id:
      String(salesAccountId),
  };


  try {
    const response = await axios.post(
      `${ZOHO_BOOKS_URL}/items`,
      itemData,
      {
        headers: zohoHeaders(accessToken),

        params: {
          organization_id:
            ZOHO_ORGANIZATION_ID,
        },

        timeout: 30000,
      }
    );

    const item =
      response.data?.item;

    if (!item?.item_id) {
      console.error(
        "ZOHO CREATE ITEM RESPONSE:",
        response.data
      );

      throw new Error(
        "Zoho sales item was not created"
      );
    }

    console.log(
      "Zoho sales item created:",
      item.item_id
    );

    return item;
  } catch (error) {
    console.error(
      "ZOHO CREATE SALES ITEM ERROR:"
    );

    console.error(
      error.response?.data ||
      error.message
    );

    throw error;
  }
}


/*
|--------------------------------------------------------------------------
| GET OR CREATE SALES ITEM
|--------------------------------------------------------------------------
|
| Strategy:
|
| Existing product name
|        |
|        +--> Existing sales item?
|                 |
|                 +--> YES → use it
|                 |
|                 +--> NO → create "A4 Sales - Product"
|
| We deliberately do NOT use a purchase-only item.
|
*/

async function getOrCreateSalesItem(
  accessToken,
  productName,
  rate,
  description
) {
  /*
   * First search for the dedicated A4 sales item.
   */

  const salesItemName =
    `A4 Sales - ${String(
      productName || ""
    ).trim()}`;


  const dedicatedSalesItem =
    await findZohoItem(
      accessToken,
      salesItemName
    );

  if (dedicatedSalesItem) {
    /*
     * Make sure it is actually usable for sales.
     */

    const itemType =
      String(
        dedicatedSalesItem.item_type ||
        dedicatedSalesItem.product_type ||
        ""
      ).toLowerCase();

    if (
      itemType === "sales" ||
      itemType === "sales_and_purchases" ||
      itemType === "inventory" ||
      itemType === ""
    ) {
      console.log(
        "Using existing A4 sales item:",
        dedicatedSalesItem.item_id
      );

      return dedicatedSalesItem;
    }
  }


  /*
   * Create dedicated sales item.
   */

  return await createZohoSalesItem(
    accessToken,
    productName,
    rate,
    description
  );
}


/*
|--------------------------------------------------------------------------
| BUILD INVOICE LINE ITEMS
|--------------------------------------------------------------------------
*/

async function buildInvoiceLineItems(
  accessToken,
  order
) {
  const items =
    Array.isArray(order.items)
      ? order.items
      : [];

  if (items.length === 0) {
    throw new Error(
      "Order contains no items"
    );
  }

  const lineItems = [];

  for (const orderItem of items) {
    const productName =
      orderItem.productTitle ||
      orderItem.product?.title ||
      orderItem.product?.name ||
      orderItem.name ||
      `Product ${orderItem.productId}`;

    const quantity =
      Number(orderItem.quantity || 1);

    const rate =
      Number(
        orderItem.price ||
        orderItem.unitPrice ||
        0
      );

    if (rate < 0) {
      throw new Error(
        `Invalid product price for ${productName}`
      );
    }


    const zohoItem =
      await getOrCreateSalesItem(
        accessToken,
        productName,
        rate,
        productName
      );


    lineItems.push({
      item_id:
        String(zohoItem.item_id),

      name:
        productName,

      description:
        productName,

      rate:
        rate,

      quantity:
        quantity,
    });
  }

  return lineItems;
}


/*
|--------------------------------------------------------------------------
| CALCULATE INVOICE AMOUNT
|--------------------------------------------------------------------------
|
| IMPORTANT:
|
| We use order.total as the final amount.
|
| We do NOT subtract order.discount again.
|
| This prevents the double-discount problem.
|
*/

function getOrderTotals(order) {
  const subtotal =
    Number(order.subtotal || 0);

  const discount =
    Number(order.discount || 0);

  const deliveryCharge =
    Number(order.deliveryCharge || 0);

  let total;

  if (
    order.total !== undefined &&
    order.total !== null
  ) {
    total =
      Number(order.total);
  } else {
    total =
      subtotal -
      discount +
      deliveryCharge;
  }

  return {
    subtotal,
    discount,
    deliveryCharge,
    total,
  };
}


/*
|--------------------------------------------------------------------------
| CREATE ZOHO INVOICE
|--------------------------------------------------------------------------
*/

async function createZohoInvoice(
  order
) {
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


  try {
    /*
     * Validate configuration.
     */

    validateZohoConfig();


    /*
     * Get access token.
     */

    const accessToken =
      await getZohoAccessToken();


    /*
     * Find/create customer.
     */

    const customer =
      await findOrCreateCustomer(
        accessToken,
        order
      );


    if (!customer?.contact_id) {
      throw new Error(
        "Unable to obtain Zoho customer ID"
      );
    }


    /*
     * Build invoice items.
     */

    const lineItems =
      await buildInvoiceLineItems(
        accessToken,
        order
      );


    /*
     * Get totals.
     */

    const totals =
      getOrderTotals(order);


    console.log(
      "Zoho Customer ID:",
      customer.contact_id
    );

    console.log(
      "Zoho Line Items:",
      JSON.stringify(
        lineItems,
        null,
        2
      )
    );

    console.log(
      "Order totals:",
      totals
    );


    /*
     |--------------------------------------------------------------------------
     | INVOICE DATA
     |--------------------------------------------------------------------------
     */

    const invoiceData = {
      customer_id:
        String(customer.contact_id),

      reference_number:
        order.orderNumber,

      date:
        new Date()
          .toISOString()
          .split("T")[0],

      line_items:
        lineItems,

      shipping_charge:
        totals.deliveryCharge,

      notes:
        `A4 Events Order ${order.orderNumber}. Payment proof submitted. Payment verification is pending.`,

      terms:
        "Payment received by bank transfer is subject to verification by A4 Events.",

      send: false,

      allow_partial_payments: false,
    };


    /*
     * If there is an order discount that is NOT already
     * reflected in the item prices, apply it here.
     *
     * Your current order structure already stores final
     * item prices / total, so we intentionally do NOT
     * send the discount again.
     */


    console.log(
      "Sending invoice request to Zoho..."
    );

    console.log(
      "Customer ID:",
      customer.contact_id
    );

    console.log(
      "Reference:",
      order.orderNumber
    );

    console.log(
      "Line Items:",
      JSON.stringify(
        lineItems,
        null,
        2
      )
    );


    /*
     |--------------------------------------------------------------------------
     | CREATE INVOICE
     |--------------------------------------------------------------------------
     */

    const response =
      await axios.post(
        `${ZOHO_BOOKS_URL}/invoices`,
        invoiceData,
        {
          headers:
            zohoHeaders(accessToken),

          params: {
            organization_id:
              ZOHO_ORGANIZATION_ID,
          },

          timeout: 30000,
        }
      );


    const invoice =
      response.data?.invoice;


    if (!invoice?.invoice_id) {
      console.error(
        "ZOHO CREATE INVOICE RESPONSE:",
        response.data
      );

      throw new Error(
        "Zoho invoice was not created"
      );
    }


    console.log(
      "========================================"
    );

    console.log(
      "ZOHO INVOICE CREATED SUCCESSFULLY"
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
      "Customer ID:",
      customer.contact_id
    );

    console.log(
      "Order:",
      order.orderNumber
    );

    console.log(
      "========================================"
    );


    /*
     * Return useful data to controller.
     */

    return {
      success: true,

      invoice,

      invoiceId:
        invoice.invoice_id,

      invoiceNumber:
        invoice.invoice_number,

      customerId:
        customer.contact_id,

      customerName:
        customer.contact_name,

      total:
        invoice.total ??
        totals.total,

      status:
        invoice.status,
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
      "Zoho HTTP Status:",
      error.response?.status
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
}


/*
|--------------------------------------------------------------------------
| GET ZOHO INVOICE
|--------------------------------------------------------------------------
*/

async function getZohoInvoice(
  invoiceId
) {
  try {
    const accessToken =
      await getZohoAccessToken();

    const response =
      await axios.get(
        `${ZOHO_BOOKS_URL}/invoices/${invoiceId}`,
        {
          headers:
            zohoHeaders(accessToken),

          params: {
            organization_id:
              ZOHO_ORGANIZATION_ID,
          },

          timeout: 30000,
        }
      );

    return response.data?.invoice;
  } catch (error) {
    console.error(
      "ZOHO GET INVOICE ERROR:"
    );

    console.error(
      error.response?.data ||
      error.message
    );

    throw error;
  }
}


/*
|--------------------------------------------------------------------------
| MARK INVOICE AS SENT
|--------------------------------------------------------------------------
|
| Optional helper.
|
*/

async function markZohoInvoiceAsSent(
  invoiceId
) {
  try {
    const accessToken =
      await getZohoAccessToken();

    const response =
      await axios.post(
        `${ZOHO_BOOKS_URL}/invoices/${invoiceId}/status/sent`,
        {},
        {
          headers:
            zohoHeaders(accessToken),

          params: {
            organization_id:
              ZOHO_ORGANIZATION_ID,
          },

          timeout: 30000,
        }
      );

    console.log(
      "Zoho invoice marked as sent:",
      invoiceId
    );

    return response.data;
  } catch (error) {
    console.error(
      "ZOHO MARK INVOICE SENT ERROR:"
    );

    console.error(
      error.response?.data ||
      error.message
    );

    throw error;
  }
}


/*
|--------------------------------------------------------------------------
| EXPORTS
|--------------------------------------------------------------------------
*/

module.exports = {
  getZohoAccessToken,

  findCustomerByEmail,

  findCustomerByName,

  createCustomer,

  findOrCreateCustomer,

  findZohoItem,

  createZohoSalesItem,

  getOrCreateSalesItem,

  buildInvoiceLineItems,

  createZohoInvoice,

  getZohoInvoice,

  markZohoInvoiceAsSent,
};