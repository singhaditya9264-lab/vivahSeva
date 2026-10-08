import { Link } from "react-router-dom";
import "../style/Home.css";

const categories = [
  {
    title: "Mehndi",
    description: "Beautiful bridal and family mehndi artists",
    icon: "🌿",
  },
  {
    title: "Makeup & Boutique",
    description: "Bridal makeup, hair styling and boutique services",
    icon: "💄",
  },
  {
    title: "DJs & Wedding Bands",
    description: "Make your celebration unforgettable",
    icon: "🎵",
  },
  {
    title: "Lighting & Decoration",
    description: "Elegant stages, lights and wedding decoration",
    icon: "✨",
  },
];

export const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO VIVAHSEVA</p>

          <h1>
            Your Wedding.
            <br />
            Everything Booked in One Place.
          </h1>

          <p className="hero-description">
            Discover trusted wedding service providers, compare packages,
            check availability and make your wedding arrangements easier.
          </p>

          <div className="hero-buttons">
            <Link to="/vendors" className="primary-btn">
              Explore Vendors
            </Link>

            <Link to="/register" className="secondary-btn">
              Join VivahSeva
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="section-heading">
          <p>OUR SERVICES</p>
          <h2>Everything Your Wedding Needs</h2>
          <span>
            Find the right professionals for your special day.
          </span>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.title}>
              <div className="category-icon">{category.icon}</div>

              <h3>{category.title}</h3>

              <p>{category.description}</p>

              <Link to="/vendors">Explore →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="section-heading">
          <p>HOW IT WORKS</p>
          <h2>Plan Your Wedding Simply</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Discover</h3>
            <p>Find wedding vendors according to your requirements.</p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Compare</h3>
            <p>Compare services, packages, prices and reviews.</p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Check Availability</h3>
            <p>Check whether your preferred vendor is available.</p>
          </div>

          <div className="step">
            <span>04</span>
            <h3>Book</h3>
            <p>Request a quote or book your wedding service.</p>
          </div>
        </div>
      </section>
    </main>
  );
};