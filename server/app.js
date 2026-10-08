import express from "express";
import vendorRoutes from "./routes/vendorRoutes.js";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";
import quoteRoutes from "./routes/quoteRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "VivahSeva API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/quotes", quoteRoutes);



export default app;