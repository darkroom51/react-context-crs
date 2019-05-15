import React, { Component } from "react";
import defaultBcg from "../images/defaultBcg.jpg";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";


class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }

  // use of context for class components
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>sorry, no such car...</h3>
          <Button to="/cars" caption="back to cars" />
        </div>
      );
    }

    const {
      name,
      description,
      color,
      power,
      price,
      extras,
      insurance,
      assistance,
      images
    } = room;
    const [main, ...defaultImages] = images;

    return (
      <>
        <StyledHero img={main || this.state.defaultBcg}>
          <Banner title={`${name}`}>
          <Button to="/cars" caption="back to cars" />
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price} per day</h6>
              <h6>power : {power} BPH</h6>
              <h6>color : {color}</h6>
              <h6>{insurance ? "insurance included" : "no extra insurance package"}</h6>
              <h6>{assistance && "free assistance included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;