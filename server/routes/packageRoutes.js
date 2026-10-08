import express from "express";
import {
  getPackagesByVendor,
} from "../controllers/packageController.js";

const router = express.Router();

router.get("/vendor/:vendorId", getPackagesByVendor);

export default router;