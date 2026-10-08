import QuoteRequest from "../models/QuoteRequest.js";

export const createQuoteRequest = async (req, res) => {
  try {
    const {
      vendor,
      packageName,
      customerName,
      customerPhone,
      weddingDate,
      weddingLocation,
      message,
    } = req.body;

    if (
      !vendor ||
      !packageName ||
      !customerName ||
      !customerPhone ||
      !weddingDate ||
      !weddingLocation
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const quoteRequest = await QuoteRequest.create({
      vendor,
      packageName,
      customerName,
      customerPhone,
      weddingDate,
      weddingLocation,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Quote request submitted successfully",
      data: quoteRequest,
    });
  } catch (error) {
    console.error("Quote request error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit quote request",
      error: error.message,
    });
  }
};
export const getQuoteRequests = async (req, res) => {
  try {
    const quoteRequests = await QuoteRequest.find()
      .populate(
        "vendor",
        "businessName category city"
      )
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: quoteRequests.length,
      data: quoteRequests,
    });
  } catch (error) {
    console.error(
      "Failed to fetch quote requests:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch quote requests",
      error: error.message,
    });
  }
};