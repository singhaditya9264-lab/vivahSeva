import Package from "../models/Package.js";

export const getPackagesByVendor = async (req, res) => {
  try {
    const packages = await Package.find({
      vendorId: req.params.vendorId,
      isActive: true,
    }).sort({ price: 1 });

    res.status(200).json({
      success: true,
      count: packages.length,
      data: packages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch packages",
      error: error.message,
    });
  }
};