import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Mehndi",
        "Makeup & Boutique",
        "DJs & Wedding Bands",
        "Lighting & Stage Decoration",
      ],
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      default: "",
      trim: true,
    },

    phone: {
      type: String,
      default: "",
      trim: true,
    },

    images: {
      type: [String],
      default: [],
    },

    packages: {
      type: [
        {
          name: {
            type: String,
            required: true,
            trim: true,
          },

          price: {
            type: Number,
            required: true,
            min: 0,
          },

          duration: {
            type: String,
            default: "",
            trim: true,
          },

          features: {
            type: [String],
            default: [],
          },
        },
      ],
      default: [],
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "inactive"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

export default Vendor;