
import dotenv from "dotenv";
import mongoose from "mongoose";

import Vendor from "./models/Vendor.js";

dotenv.config();

const vendors = [
  {
    businessName: "Royal Mehndi Art",
    category: "Mehndi",
    description:
      "Traditional and modern bridal mehndi designs for weddings and special occasions.",
    city: "Lucknow",
    address: "Lucknow, Uttar Pradesh",
    phone: "",
    images: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
    ],

    packages: [
      {
        name: "Bridal Mehndi",
        price: 5000,
        duration: "4 Hours",
        features: [
          "Bridal Mehndi Design",
          "Traditional Arabic Design",
          "Experienced Mehndi Artist",
        ],
      },
      {
        name: "Premium Bridal Mehndi",
        price: 8000,
        duration: "6 Hours",
        features: [
          "Premium Bridal Design",
          "Arabic + Traditional Design",
          "Full Hand & Feet Mehndi",
        ],
      },
    ],

    rating: 4.9,
    reviews: 128,
    isVerified: true,
    status: "approved",
  },

  {
    businessName: "Glow Bridal Studio",
    category: "Makeup & Boutique",
    description:
      "Professional bridal makeup and boutique services for your special day.",
    city: "Lucknow",
    address: "Lucknow, Uttar Pradesh",
    phone: "",
    images: [
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    ],

    packages: [
      {
        name: "Bridal Makeup",
        price: 15000,
        duration: "3 Hours",
        features: [
          "HD Bridal Makeup",
          "Hair Styling",
          "Draping",
        ],
      },
      {
        name: "Premium Bridal Package",
        price: 25000,
        duration: "5 Hours",
        features: [
          "HD Makeup",
          "Hair Styling",
          "Draping",
          "False Lashes",
        ],
      },
    ],

    rating: 4.8,
    reviews: 94,
    isVerified: true,
    status: "approved",
  },

  {
    businessName: "Royal Beats",
    category: "DJs & Wedding Bands",
    description:
      "Professional DJ and wedding entertainment services for memorable celebrations.",
    city: "Lucknow",
    address: "Lucknow, Uttar Pradesh",
    phone: "",
    images: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    ],

    packages: [
      {
        name: "Wedding DJ Package",
        price: 25000,
        duration: "5 Hours",
        features: [
          "Professional DJ",
          "Sound System",
          "Dance Floor Music",
        ],
      },
      {
        name: "Premium DJ Package",
        price: 40000,
        duration: "7 Hours",
        features: [
          "Professional DJ",
          "Premium Sound System",
          "DJ Lights",
          "Unlimited Music",
        ],
      },
    ],

    rating: 4.7,
    reviews: 76,
    isVerified: true,
    status: "approved",
  },

  {
    businessName: "Dream Stage Decor",
    category: "Lighting & Stage Decoration",
    description:
      "Beautiful wedding stage decoration and lighting solutions for every celebration.",
    city: "Lucknow",
    address: "Lucknow, Uttar Pradesh",
    phone: "",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    ],

    packages: [
      {
        name: "Basic Decoration",
        price: 20000,
        duration: "1 Day",
        features: [
          "Stage Decoration",
          "Basic Lighting",
          "Backdrop Decoration",
        ],
      },
      {
        name: "Premium Decoration",
        price: 40000,
        duration: "1 Day",
        features: [
          "Premium Stage Decoration",
          "Decorative Lighting",
          "Floral Backdrop",
          "Entrance Decoration",
        ],
      },
    ],

    rating: 4.8,
    reviews: 61,
    isVerified: true,
    status: "approved",
  },
];

const seedVendors = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Vendor.deleteMany();

    await Vendor.insertMany(vendors);

    console.log("4 vendors inserted successfully");

    await mongoose.connection.close();

    console.log("MongoDB connection closed");

    process.exit(0);
  } catch (error) {
    console.error("Vendor seeding failed:", error.message);

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedVendors();

