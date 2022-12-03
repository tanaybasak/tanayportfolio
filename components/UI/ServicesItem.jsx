import React from "react";
import classes from "../../styles/services-item.module.css";

const ServicesItem = ({ title, icon, handleServices }) => {
  return (
    <div className={`${classes.service__item}`} onClick={handleServices}>
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default ServicesItem;
