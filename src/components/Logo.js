import React from 'react';
import {Link} from 'react-router-dom';
import { FaCarAlt } from "react-icons/fa";


function Logo() {
  return (
    <Link to="/" className="logo">
      <FaCarAlt className="logo-icon" />
      <h2 className="logo-typo">RentCar</h2>
    </Link>
  )
}

export default Logo;
