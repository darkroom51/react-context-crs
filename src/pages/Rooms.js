import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Button from "../components/Button";
import RoomsContainer from "../components/RoomsContainer";


const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our cars">
        <Button to="/" caption="back to home" />
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
