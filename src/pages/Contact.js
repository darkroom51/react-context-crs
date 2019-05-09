import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Hero>
      <Banner title="Contact Us" subtitle="Get in touch">
        <Link to="/" className="btn-primary">
          Find Us
        </Link>
      </Banner>
    </Hero>
  );
};

export default Contact;
