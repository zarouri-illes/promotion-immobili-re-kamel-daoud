import React from "react";
import { Carousel } from "./const";

const appp = {
  title: "",
  floors: "1,2,3,4",
  surface: 5,
  location: "",
  description: "",
  images:[""]
};

const Card = (props) => {
  return (
    <div>
      <div>
        <Carousel slides={props.slides} />
      </div>

      <div>
        <h1>f3</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
