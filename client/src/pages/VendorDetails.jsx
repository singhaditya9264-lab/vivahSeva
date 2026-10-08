import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getVendorById } from "../api/vendorApi";
import { createQuoteRequest } from "../api/bookingApi";
import "../style/VendorDetails.css";

export const VendorDetails = () => {
  const { id } = useParams();

  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [weddingDate, setWeddingDate] = useState("");
  const [weddingLocation, setWeddingLocation] = useState("");
  const [message, setMessage] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [quoteLoading, setQuoteLoading] = useState(false);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getVendorById(id);

        setVendor(response.data.data);
      } catch (error) {
        console.error("Failed to fetch vendor:", error);

        setError(
          error.response?.data?.message ||
          "Failed to load vendor details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVendor();
  }, [id]);

  if (loading) {
    return (
      <div className="vendor-not-found">
        <h2>Loading vendor details...</h2>
      </div>
    );
  }

  if (error || !vendor) {
    return (
      <div className="vendor-not-found">
        <h1>Vendor Not Found</h1>

        <p>{error}</p>

        <Link to="/vendors">
          Back to Vendors
        </Link>
      </div>
    );
  }

  const handleAvailability = (event) => {
    event.preventDefault();

    if (!weddingDate || !weddingLocation) {
      setMessage(
        "Please select a date and enter your wedding location."
      );
      return;
    }

    setMessage(
      `Availability request sent for ${weddingDate}.`
    );
  };

  const handleQuote = (packageName) => {
    setSelectedPackage(packageName);
    setMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const submitQuoteRequest = async (event) => {
    event.preventDefault();

    if (
      !selectedPackage ||
      !customerName ||
      !customerPhone ||
      !weddingDate ||
      !weddingLocation
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    try {
      setQuoteLoading(true);
      setMessage("");

      await createQuoteRequest({
        vendor: vendor._id,
        packageName: selectedPackage,
        customerName,
        customerPhone,
        weddingDate,
        weddingLocation,
      });

      setMessage(
        "Quote request submitted successfully! The vendor will contact you soon."
      );

      setSelectedPackage("");
      setCustomerName("");
      setCustomerPhone("");
    } catch (error) {
      console.error("Quote request failed:", error);

      setMessage(
        error.response?.data?.message ||
        "Failed to submit quote request."
      );
    } finally {
      setQuoteLoading(false);
    }
  };

  const vendorImage =
    vendor.images?.length > 0
      ? vendor.images[0]
      : "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80";

  return (
    <main className="vendor-details">

      {/* Cover */}

      <section className="vendor-cover">
        <img
          src={vendorImage}
          alt={vendor.businessName}
        />

        <div className="cover-overlay">
          <div>
            <span>{vendor.category}</span>

            <h1>{vendor.businessName}</h1>

            <p>📍 {vendor.city}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}

      <section className="vendor-main">

        <div className="vendor-description">

          {/* Vendor Heading */}

          <div className="vendor-heading">

            <div>
              {vendor.isVerified && (
                <span className="verified">
                  ✓ Verified Vendor
                </span>
              )}

              <h2>{vendor.businessName}</h2>

              <p>📍 {vendor.city}</p>
            </div>

            <div className="rating">
              ⭐ {vendor.rating}

              <small>
                ({vendor.reviews} reviews)
              </small>
            </div>

          </div>

          {/* Message */}

          {message && (
            <div className="vendor-message">
              {message}
            </div>
          )}
          {selectedPackage && (
            <div className="quote-form">

              <h3>Request a Quote</h3>

              <p>
                Package: <strong>{selectedPackage}</strong>
              </p>

              <form onSubmit={submitQuoteRequest}>

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={customerName}
                  onChange={(event) =>
                    setCustomerName(event.target.value)
                  }
                />

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={customerPhone}
                  onChange={(event) =>
                    setCustomerPhone(event.target.value)
                  }
                />

                <button
                  type="submit"
                  disabled={quoteLoading}
                >
                  {quoteLoading
                    ? "Submitting..."
                    : "Submit Quote Request"}
                </button>

              </form>

            </div>
          )}

          {/* About */}

          <div className="about-vendor">

            <h3>About This Vendor</h3>

            <p>{vendor.description}</p>

          </div>

          {/* Packages */}

          <div className="packages">

            <h3>Packages</h3>

            {vendor.packages?.length > 0 ? (
              <div className="package-grid">

                {vendor.packages.map((pkg, index) => (

                  <div
                    className="package-card"
                    key={pkg._id || index}
                  >

                    <div className="package-top">

                      <h4>{pkg.name}</h4>

                      <strong>
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </strong>

                    </div>

                    {pkg.duration && (
                      <p className="duration">
                        ⏱ {pkg.duration}
                      </p>
                    )}

                    {pkg.features?.length > 0 && (
                      <ul>
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>
                            ✓ {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    <button
                      onClick={() =>
                        handleQuote(pkg.name)
                      }
                    >
                      Request Quote
                    </button>

                  </div>

                ))}

              </div>
            ) : (
              <p>
                No packages available for this vendor yet.
              </p>
            )}

          </div>

        </div>

        {/* Booking Card */}

        <aside className="booking-card">

          <h3>Book This Vendor</h3>

          <p>
            Check availability for your wedding date.
          </p>

          <form onSubmit={handleAvailability}>

            <label>
              Wedding Date
            </label>

            <input
              type="date"
              value={weddingDate}
              onChange={(event) =>
                setWeddingDate(event.target.value)
              }
              min={
                new Date()
                  .toISOString()
                  .split("T")[0]
              }
            />

            <label>
              Wedding Location
            </label>

            <input
              type="text"
              placeholder="Enter wedding location"
              value={weddingLocation}
              onChange={(event) =>
                setWeddingLocation(event.target.value)
              }
            />

            <button
              type="submit"
              className="availability-btn"
            >
              Check Availability
            </button>

          </form>

          <div className="booking-note">

            ✓ Secure booking
            <br />

            ✓ Verified vendor
            <br />

            ✓ Easy enquiry process

          </div>

        </aside>

      </section>

    </main>
  );
};