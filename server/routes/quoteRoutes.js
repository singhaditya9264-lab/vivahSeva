import express from "express";

import {
  createQuoteRequest,
} from "../controllers/quoteController.js";

const router = express.Router();

router.post("/", createQuoteRequest);

export default router;