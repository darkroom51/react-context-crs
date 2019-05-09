import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";


// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    color,
    price,
    minPrice,
    maxPrice,
    minPower,
    maxPower,
    insurance,
    assistance
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  // get unique colors
  let colors = getUnique(rooms, "color");
  colors = ["all", ...colors];
  colors = colors.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search for cars" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Car type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* color  */}
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <select
            name="color"
            id="color"
            onChange={handleChange}
            className="form-control"
            value={color}
          >
            {colors}
          </select>
        </div>
        {/* end of color */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">price ${price} per day</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* power */}
        <div className="form-group">
          <label htmlFor="price">Engine Power</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minPower"
              value={minPower}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxPower"
              value={maxPower}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of inputs power */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="insurance"
              id="insurance"
              checked={insurance}
              onChange={handleChange}
            />
            <label htmlFor="insurance">insurance</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="assistance"
              id="assistance"
              checked={assistance}
              onChange={handleChange}
            />
            <label htmlFor="assistance">assistance</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
