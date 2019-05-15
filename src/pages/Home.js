import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Button from "../components/Button";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="One step to drive"
          subtitle="Book a car with one click"
        >
          <Button to="/cars" caption="our cars" />
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
