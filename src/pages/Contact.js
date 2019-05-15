import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Button from "../components/Button";

const Contact = () => {
  return (
    <Hero>
      <Banner title="Contact Us" subtitle="Get in touch">
        <Button to="/" caption="find us" />
      </Banner>
    </Hero>
  );
};

export default Contact;
