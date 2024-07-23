"use client";
import React, { useState, useEffect, useRef } from "react";
import { Title } from "../components/const";
import { FaRulerCombined, FaBed } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { Situation, Carousel } from "../components/const";
import Card from "../components/Card";

const page = () => {
  const slides = ["/riche1/pic2.jpg", "/riche1/pic3.jpg"];

  const details = {
    title: "Résidence Erriche 1",
    description:
      "Bienvenue à La résidence 28 Logements, une résidence de premier choix située au cœur d'Erriche, Bouira. Cette propriété exceptionnelle offre une expérience de vie inégalée, alliant commodités modernes et beauté sereine de son environnement. Chaque appartement de la résidence est conçu avec confort et élégance, offrant des espaces de vie spacieux, des installations à la pointe de la technologie et des vues imprenables. Que vous recherchiez un refuge paisible ou un style de vie communautaire dynamique, Cette résidence promet d'être la maison idéale pour vous et votre famille. Découvrez le luxe et la commodité de vivre dans l'un des emplacements les plus prisés de Bouira.",
    appa: [
      {
        name: "F3",
        price: 45644,
        surface: "90m²",
        image: [
          "/riche2/appa/f3.jpg",
          "/riche2/appa/f3.jpg",
          "/riche2/appa/f3.jpg",
        ],
        alt: "F3 bouira",
        floor: 2,
      },
    ],
  };

  return (
    <div>
      <div className="w-full gap-16 bg-secondary px-8 md:px-16 xl:px-16 flex-col xl:flex-row flex items-center py-16 text-white">
        <div className=" md:w-[800px] md:px-20 xl:px-0 w-full ">
          <Carousel slides={slides} />
        </div>
        <div className="w-full">
          <h1 className="text-primary text-3xl font-bold">{details.title}</h1>
          <br />
          <br />
          <p>{details.description}</p>
        </div>
      </div>

      <section className="w-full mt-16 mb-32 px-8 md:px-16 xl:px-16">
        <Situation situ={"sold"} />
        <div>
          <Title title="Types d'appartements disponible" miniTitle="" />

          {details.appa.map((item) => {
            return <Card slides={item.image} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default page;
