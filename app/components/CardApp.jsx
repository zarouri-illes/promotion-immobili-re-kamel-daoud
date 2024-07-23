"use client"

import React from "react";
import { Carousel } from "./const";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiRectangleDashedLight } from "react-icons/pi";
import { MdAlignHorizontalLeft } from "react-icons/md";
import { MdViewCarousel } from "react-icons/md";
import { MdBalcony } from "react-icons/md";

const CardApp = (props) => {
  return (
    <div className="flex items-center gap-16">
      <div>
        <Carousel slides={props.slides} />
      </div>

      <div>
        <h1>f3</h1>
        <ul>
          <li><FaMapLocationDot />address : errich</li>
          <li><PiRectangleDashedLight />Surface : 15m²</li>
          <li><MdAlignHorizontalLeft />Etage : 1-2-3-4-5</li>
          <li><MdViewCarousel />Façades : 2</li>
          <li><MdBalcony />Blacon : 3</li>
        </ul>
      </div>
    </div>
  )
}

export default CardApp
