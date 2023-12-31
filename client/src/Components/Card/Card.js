import React from "react";
// import "./Card.scss";
import chef1 from "../../../src/assets/images/staff/chef-2.jpg";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="food-result">
      <div className="food-box">
        <img src={props.imageSrc} alt="" />
        <h2 className="menuItem-name">{props.mealName}</h2>
        <Link to={`/menu/${props.id}`}>
          <button className="view-meal">view meal</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
