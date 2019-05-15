import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/defaultBcg.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
import styled from "styled-components";


const Room = memo(({ room }) => {
  const { name, slug, images, price } = room;
 
  return (
    <CarContainer>
      <ImgContainer>
        <img src={images[0] || defaultImg} alt="car" />
        <div className="car__price">
          <h6>${price}</h6>
          <p>per day</p>
        </div>
        <Link to={`/cars/${slug}`} className="car__link">
          details
        </Link>
      </ImgContainer>
      <TitleContainer>
        {name}
      </TitleContainer>
    </CarContainer>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

//TODO - refactor styles
const ImgContainer = styled.div`
  position: relative;
  flex:1;
  background: rgba(0, 0, 0, 0.8);

  :hover {
    img {
      opacity: 0.3;
    }

    .car__price {
      opacity: 0;
    }

    .car__link {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-height: 100%;
    transition: var(--mainTransition);
  }

  .car__link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0);
    transition: all 0.3s linear;
    display: inline-block;
    text-decoration: none;
    letter-spacing: ${({ theme }) => theme.mainSpacing};
    color: ${({ theme }) => theme.mainBlack};
    background: ${({ theme }) => theme.primaryColor};
    padding: 0.4rem 0.9rem;
    border: 3px solid ${({ theme }) => theme.primaryColor};
    transition: ${({ theme }) => theme.mainTransition};
    text-transform: uppercase;
    cursor: pointer;

    :hover {
      background: transparent;
      color: ${({ theme }) => theme.primaryColor};
    }
  }

  .car__price {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: var(--mainWhite);
    padding: 0.3rem 0.6rem 0.5rem;
    border-bottom-right-radius: 1rem;
    font-size: 0.5rem;
    text-align: center;
    transition: var(--mainTransition);

    h6 {
      margin-bottom: 0;
      font-size: 0.9rem;
      font-weight: 300;
      letter-spacing: var(--mainSpacing);
    }
  }
`;

const CarContainer = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  display:flex;
  flex-direction: column;
  :hover {
    box-shadow: var(--darkShadow);
  }
`;

const TitleContainer = styled.p`
  background: var(--darkGrey);
  color: var(--mainWhite);
  text-transform: capitalize;
  padding: 0.5rem 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: var(--mainSpacing);
`;

export default Room;
