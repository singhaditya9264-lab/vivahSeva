import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Vendors.css";
import { getVendors } from "../api/vendorApi";

export const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getVendors();

        setVendors(response.data.data);
      } catch (error) {
        console.error("Failed to fetch vendors:", error);

        setError("Unable to load vendors. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  const filteredVendors =
    category === "All"
      ? vendors
      : vendors.filter((vendor) => vendor.category === category);

  if (loading) {
    return (
      <main className="vendors-page">
        <section className="vendors-header">
          <p>VIVAHSEVA VENDORS</p>
          <h1>Find Wedding Professionals</h1>
          <span>Discover trusted wedding services for your special day.</span>
        </section>

        <div className="vendors-status">
          <h2>Loading vendors...</h2>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="vendors-page">
        <section className="vendors-header">
          <p>VIVAHSEVA VENDORS</p>
          <h1>Find Wedding Professionals</h1>
          <span>Discover trusted wedding services for your special day.</span>
        </section>

        <div className="vendors-status error">
          <h2>{error}</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="vendors-page">
      <section className="vendors-header">
        <p>VIVAHSEVA VENDORS</p>
        <h1>Find Wedding Professionals</h1>
        <span>
          Discover trusted wedding services for your special day.
        </span>
      </section>

      <section className="vendor-filters">
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Mehndi" ? "active" : ""}
          onClick={() => setCategory("Mehndi")}
        >
          Mehndi
        </button>

        <button
          className={category === "Makeup & Boutique" ? "active" : ""}
          onClick={() => setCategory("Makeup & Boutique")}
        >
          Makeup & Boutique
        </button>

        <button
          className={category === "DJs & Wedding Bands" ? "active" : ""}
          onClick={() => setCategory("DJs & Wedding Bands")}
        >
          DJs & Bands
        </button>

        <button
          className={
            category === "Lighting & Stage Decoration" ? "active" : ""
          }
          onClick={() => setCategory("Lighting & Stage Decoration")}
        >
          Decoration
        </button>
      </section>

      <section className="vendor-grid">
        {filteredVendors.map((vendor) => (
          <article className="vendor-card" key={vendor._id}>
            <div className="vendor-image">
              <img
                src={vendor.images?.[0]}
                alt={vendor.businessName}
              />

              {vendor.isVerified && (
                <span className="verified">✓ Verified</span>
              )}
            </div>

            <div className="vendor-info">
              <p className="vendor-category">{vendor.category}</p>

              <h2>{vendor.businessName}</h2>

              <p className="location">
                📍 {vendor.city}
              </p>

              <div className="vendor-bottom">
                <div>
                  <strong>★ {vendor.rating}</strong>

                  <p>
                    {vendor.reviews} reviews
                  </p>
                </div>

                <Link to={`/vendors/${vendor._id}`}>
                  View Profile
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {filteredVendors.length === 0 && (
        <div className="vendors-status">
          <h2>No vendors found</h2>
          <p>Try selecting another category.</p>
        </div>
      )}
    </main>
  );
};