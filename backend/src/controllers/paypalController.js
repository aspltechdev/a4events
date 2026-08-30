const prisma = require("../config/db");

const {
  PAYPAL_BASE_URL,
  getPayPalAccessToken,
} = require("../config/paypal");


// =====================================================
// CREATE PAYPAL ORDER
// =====================================================

const createPayPalOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).json({
        success: false,
        message: "Order ID is required",
      });
    }

    const parsedOrderId = Number(orderId);

    if (
      !Number.isInteger(parsedOrderId) ||
      parsedOrderId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }


    // -------------------------------------------------
    // Get order from database
    // -------------------------------------------------

    const order = await prisma.order.findUnique({
      where: {
        id: parsedOrderId,
      },

      include: {
        items: true,
      },
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }


    // -------------------------------------------------
    // Don't allow already paid orders
    // -------------------------------------------------

    if (order.paymentStatus === "PAID") {
      return res.status(400).json({
        success: false,
        message: "Order has already been paid",
      });
    }


    // -------------------------------------------------
    // Check total
    // -------------------------------------------------

    const total = Number(order.total);

    if (!Number.isFinite(total) || total <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid order total",
      });
    }


    // -------------------------------------------------
    // If PayPal order already exists
    // -------------------------------------------------

    if (order.paypalOrderId) {
      return res.json({
        success: true,
        paypalOrderId: order.paypalOrderId,
        orderId: order.id,
        orderNumber: order.orderNumber,
        total: total.toFixed(2),
        currency: order.currency || "EUR",
      });
    }


    // -------------------------------------------------
    // Get PayPal access token
    // -------------------------------------------------

    const accessToken =
      await getPayPalAccessToken();


    // -------------------------------------------------
    // Create PayPal order
    // -------------------------------------------------

    const paypalResponse = await fetch(
      `${PAYPAL_BASE_URL}/v2/checkout/orders`,
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",

          Prefer: "return=representation",

          "PayPal-Request-Id":
            `A4-${order.id}-${Date.now()}`,
        },

        body: JSON.stringify({
          intent: "CAPTURE",

          purchase_units: [
            {
              reference_id:
                order.orderNumber,

              custom_id:
                String(order.id),

              description:
                `A4A Group Order ${order.orderNumber}`,

              amount: {
                currency_code:
                  order.currency || "EUR",

                value:
                  total.toFixed(2),
              },
            },
          ],

          application_context: {
            brand_name: "A4A Group",

            landing_page:
              "BILLING",

            user_action:
              "PAY_NOW",

            shipping_preference:
              "NO_SHIPPING",
          },
        }),
      }
    );


    const paypalData =
      await paypalResponse.json();


    if (!paypalResponse.ok) {
      console.error(
        "PayPal create order error:",
        paypalData
      );

      return res.status(500).json({
        success: false,
        message:
          paypalData?.message ||
          "Failed to create PayPal order",
      });
    }


    // -------------------------------------------------
    // Save PayPal order ID
    // -------------------------------------------------

    const updatedOrder =
      await prisma.order.update({
        where: {
          id: order.id,
        },

        data: {
          paypalOrderId:
            paypalData.id,

          paymentMethod:
            "PAYPAL",

          paymentStatus:
            "PENDING",

          status:
            "PAYMENT_PROCESSING",
        },
      });


    // -------------------------------------------------
    // Response
    // -------------------------------------------------

    return res.status(201).json({
      success: true,

      paypalOrderId:
        paypalData.id,

      orderId:
        updatedOrder.id,

      orderNumber:
        updatedOrder.orderNumber,

      total:
        total.toFixed(2),

      currency:
        order.currency || "EUR",

      status:
        paypalData.status,
    });

  } catch (error) {
    console.error(
      "Create PayPal order error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Failed to create PayPal order",
    });
  }
};



// =====================================================
// CAPTURE PAYPAL ORDER
// =====================================================

const capturePayPalOrder = async (req, res) => {
  try {
    const { orderId, paypalOrderId } =
      req.body;


    if (!orderId || !paypalOrderId) {
      return res.status(400).json({
        success: false,
        message:
          "orderId and paypalOrderId are required",
      });
    }


    const parsedOrderId =
      Number(orderId);


    if (
      !Number.isInteger(parsedOrderId) ||
      parsedOrderId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid order ID",
      });
    }


    // -------------------------------------------------
    // Find website order
    // -------------------------------------------------

    const order =
      await prisma.order.findUnique({
        where: {
          id: parsedOrderId,
        },

        include: {
          items: true,
        },
      });


    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }


    // -------------------------------------------------
    // Verify PayPal order belongs to our order
    // -------------------------------------------------

    if (
      order.paypalOrderId &&
      order.paypalOrderId !== paypalOrderId
    ) {
      return res.status(400).json({
        success: false,
        message:
          "PayPal order does not match website order",
      });
    }


    // -------------------------------------------------
    // Already paid?
    // -------------------------------------------------

    if (
      order.paymentStatus === "PAID"
    ) {
      return res.json({
        success: true,
        message:
          "Order is already paid",

        order: {
          id: order.id,
          orderNumber:
            order.orderNumber,

          paymentStatus:
            order.paymentStatus,

          status:
            order.status,
        },
      });
    }


    // -------------------------------------------------
    // Get PayPal token
    // -------------------------------------------------

    const accessToken =
      await getPayPalAccessToken();


    // -------------------------------------------------
    // Capture payment
    // -------------------------------------------------

    const captureResponse =
      await fetch(
        `${PAYPAL_BASE_URL}/v2/checkout/orders/${encodeURIComponent(
          paypalOrderId
        )}/capture`,
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${accessToken}`,

            "Content-Type":
              "application/json",

            Prefer:
              "return=representation",

            "PayPal-Request-Id":
              `CAPTURE-A4-${order.id}-${Date.now()}`,
          },
        }
      );


    const captureData =
      await captureResponse.json();


    if (!captureResponse.ok) {
      console.error(
        "PayPal capture error:",
        captureData
      );

      return res.status(400).json({
        success: false,

        message:
          captureData?.message ||
          "PayPal payment capture failed",

        details:
          captureData?.details || [],
      });
    }


    // -------------------------------------------------
    // Check PayPal status
    // -------------------------------------------------

    const purchaseUnit =
      captureData.purchase_units?.[0];

    const capture =
      purchaseUnit?.payments
        ?.captures?.[0];


    const captureStatus =
      capture?.status;


    if (
      captureData.status !== "COMPLETED" ||
      captureStatus !== "COMPLETED"
    ) {
      return res.status(400).json({
        success: false,

        message:
          "PayPal payment was not completed",

        paypalStatus:
          captureData.status,

        captureStatus,
      });
    }


    // -------------------------------------------------
    // Verify amount
    // -------------------------------------------------

    const paypalAmount =
      Number(
        capture?.amount?.value
      );

    const paypalCurrency =
      capture?.amount?.currency_code;


    const databaseTotal =
      Number(order.total);

    const databaseCurrency =
      order.currency || "EUR";


    if (
      paypalCurrency !==
      databaseCurrency
    ) {
      console.error(
        "Currency mismatch",
        {
          databaseCurrency,
          paypalCurrency,
        }
      );

      return res.status(400).json({
        success: false,
        message:
          "Payment currency does not match order",
      });
    }


    if (
      Math.abs(
        paypalAmount -
          databaseTotal
      ) > 0.01
    ) {
      console.error(
        "Amount mismatch",
        {
          databaseTotal,
          paypalAmount,
        }
      );

      return res.status(400).json({
        success: false,
        message:
          "Payment amount does not match order total",
      });
    }


    // -------------------------------------------------
    // Update order
    // -------------------------------------------------

    const updatedOrder =
      await prisma.order.update({
        where: {
          id: order.id,
        },

        data: {
          paypalOrderId:
            paypalOrderId,

          paypalCaptureId:
            capture.id,

          paymentMethod:
            "PAYPAL",

          paymentStatus:
            "PAID",

          status:
            "PAID",
        },

        include: {
          items: true,
        },
      });


    // -------------------------------------------------
    // Return success
    // -------------------------------------------------

    return res.json({
      success: true,

      message:
        "Payment completed successfully",

      order: {
        id:
          updatedOrder.id,

        orderNumber:
          updatedOrder.orderNumber,

        total:
          updatedOrder.total,

        currency:
          databaseCurrency,

        status:
          updatedOrder.status,

        paymentStatus:
          updatedOrder.paymentStatus,

        paypalOrderId:
          updatedOrder.paypalOrderId,

        paypalCaptureId:
          updatedOrder.paypalCaptureId,
      },
    });

  } catch (error) {
    console.error(
      "Capture PayPal order error:",
      error
    );

    return res.status(500).json({
      success: false,

      message:
        "Failed to capture PayPal payment",
    });
  }
};



module.exports = {
  createPayPalOrder,
  capturePayPalOrder,
};