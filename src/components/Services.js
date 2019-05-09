import React, { Component } from "react";
import { FaCarSide, FaMoneyBillAlt, FaPlane } from "react-icons/fa";
import Title from "./Title";


class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCarSide />,
        title: "Best Cars",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaMoneyBillAlt />,
        title: "Lowest Prices",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        icon: <FaPlane />,
        title: "Free Pickup",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
  
  render() {
    return (
      <section className="services">
        <Title title="services" dark={true} />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
