import React from "react";


const Title = ({ title, dark }) => {
  return (
    <div className={`section-title ${dark ? 'dark' : null}`}>
      <h4>{title}</h4>
      <div />
    </div>
  );
};

export default Title;
