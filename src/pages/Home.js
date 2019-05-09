import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";


const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="One step to drive"
          subtitle="Book a car with one click"
        >
          <Link to="/cars" className="btn-primary">
            our cars
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default home;
