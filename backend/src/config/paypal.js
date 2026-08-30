const PAYPAL_BASE_URL =
  process.env.PAYPAL_ENVIRONMENT === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
  console.warn(
    "⚠️ PayPal credentials are missing from .env"
  );
}

const getPayPalAccessToken = async () => {
  const credentials = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(
    `${PAYPAL_BASE_URL}/v1/oauth2/token`,
    {
      method: "POST",

      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type":
          "application/x-www-form-urlencoded",
      },

      body: "grant_type=client_credentials",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(
      "PayPal token error:",
      data
    );

    throw new Error(
      data?.error_description ||
        "Failed to authenticate with PayPal"
    );
  }

  return data.access_token;
};

module.exports = {
  PAYPAL_BASE_URL,
  getPayPalAccessToken,
};