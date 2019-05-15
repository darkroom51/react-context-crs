import React from "react";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Button from "../components/Button";
import LeafletMap from "../components/LeafletMap";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <StyledHero>
      <Banner title="Contact Us" subtitle="Get in touch">
        <Button to="#scrollToMap" caption="find us" external />
      </Banner>
    </StyledHero>
    <ContactForm />
    <LeafletMap />
    <Footer />
    </>
  );
};

export default Contact;
