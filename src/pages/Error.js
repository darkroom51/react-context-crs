import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Button from "../components/Button";


const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="page not found">
      <Button to="/" caption="back to home" />
      </Banner>
    </Hero>
  );
};

export default Error;
