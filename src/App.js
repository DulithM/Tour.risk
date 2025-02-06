import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container">
      <a className="navbar-brand fw-bold text-primary" href="#">Tou.risk</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <section id="home" className="py-5 bg-primary text-white text-center">
    <div className="container">
      <h1 className="display-4 fw-bold">Welcome to Tou.risk</h1>
      <p className="lead">Your trusted platform for a scam-free and safe journey.</p>
      <a href="#features" className="btn btn-light btn-lg mt-3 shadow-sm">Explore Features</a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4 fw-bold">About Us</h2>
      <p className="text-center lead">
        Tou.risk is designed to protect tourists from scams, ensure fair purchases,
        and provide peace of mind for a safe and enjoyable trip. Our mission is to
        make travel safer and more transparent for everyone.
      </p>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4 fw-bold">Features</h2>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="feature-card p-4 shadow-sm bg-white rounded">
            <i className="bi bi-shield-check display-4 text-primary"></i>
            <h3 className="mt-3">Scam Protection</h3>
            <p>Comprehensive guides and tools to avoid tourist scams.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-card p-4 shadow-sm bg-white rounded">
            <i className="bi bi-cart-check display-4 text-success"></i>
            <h3 className="mt-3">Fair Purchases</h3>
            <p>Verified marketplaces to ensure fair pricing and quality.</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-card p-4 shadow-sm bg-white rounded">
            <i className="bi bi-geo-alt display-4 text-danger"></i>
            <h3 className="mt-3">Safe Trip</h3>
            <p>Trusted resources to make your trip safe and enjoyable.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
      <form className="contact-form mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm">Submit</button>
      </form>
    </div>
  </section>
);

const App = () => (
  <>
    <Navbar />
    <Home />
    <About />
    <Features />
    <Contact />
  </>
);

export default App;
