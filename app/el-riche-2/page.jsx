"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Title } from '../components/const';
import { FaRulerCombined, FaBed } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

export default function page() {

    const images = [
        "/riche2/bloca.jpg",
        "/riche2/blocb.jpg",
        "/riche2/blocc.jpg",
        "/riche2/blocd.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        slideInterval.current = setInterval(nextSlide, 5000);
    
        return () => {
            clearInterval(slideInterval.current);
        };
    }, []);

    const appa = [
        {
            name: "F3",
            price: "9.500.000 DA",
            rooms: "3 Chambres",
            surface: "90m²",
            image: "/riche2/appa/f3.jpg",
            alt: "F3 bouira",
            place: "Bloc A"
        },
        {
            name: "F4",
            price: "12.000.000 DA",
            rooms: "3 Chambres",
            surface: "160m²",
            image: "/riche2/appa/f4.jpg",
            alt: "F3 bouira",
            place: "Bloc A"
        },
        {
            name: "F5",
            price: "17.000.000 DA",
            rooms: "3 Chambres",
            surface: "210m²",
            image: "/riche2/appa/f5.jpg",
            alt: "F3 bouira",
            place: "Bloc D"
        },
        {
            name: "F5",
            price: "17.000.000 DA",
            rooms: "3 Chambres",
            surface: "210m²",
            image: "/riche2/appa/f5.jpg",
            alt: "F3 bouira",
            place: "Bloc D"
        },
        {
            name: "F5",
            price: "17.000.000 DA",
            rooms: "3 Chambres",
            surface: "210m²",
            image: "/riche2/appa/f5.jpg",
            alt: "F3 bouira",
            place: "Bloc D"
        }
    ]


    return (
        <div>
            <div className='w-full bg-secondary px-8 md:px-16 xl:px-16 py-16 text-white'>
                <h1 className="text-primary text-3xl font-bold">Résidence El Riche 2</h1>
                <br />
                <br />
                <p>L'équipe promotion immobilière DAOUD a le plaisir de vous annoncer le lancement de son nouveau projet 83 Logements, Un projet bien situé dans la ville de Bouira , dans un endroit idéal pour ceux qui apprécient la tranquillité et l'intimité, Tout en souhaitant être à proximité des commodités de la ville. Une conception moderne et raffinée qui s’allie avec le haut standing, Des appartements de divers typologies allant du F2 en simplex au F5 en duplex. (F2, F3 ,F4 ,F5).</p>
            </div>
            <section className="w-full mt-16 mb-32 px-8 md:px-16 xl:px-16">
                <div>
                    <Title title="Les appartements disponible" miniTitle="" />

                    <div className='pt-8'>
                        <div className='flex gap-4  flex-wrap'>
                        {
                            appa.map((item, index) => (
                                <div className='space-y-6 border-[1px] rounded-[10px] border-secondary' key={index}>
                                    <img src={item.image} alt={item.alt} className='w-[400px] rounded-t-[10px]'/>

                                    <div className='px-4'>
                                        <h1 className='text-primary font-bold text-xl'>{item.price}</h1>
                                        <h2 className='text-3xl text-secondary font-bold'>{item.name}</h2>

                                        <div className='mt-10 pb-3 border-t-[1px] flex justify-between border-dashed border-primary'>
                                            <div className='flex gap-2 p-2 items-center'>
                                                <FaRulerCombined className='text-primary text-xl'/>{item.surface}
                                            </div>
                                            <div className='flex gap-2 p-2 items-center'>
                                                <MdPlace className='text-primary text-xl'/>{item.place}
                                            </div>
                                            <div className='flex gap-2 p-2 items-center'>
                                                <FaBed className='text-primary  text-xl'/> {item.rooms}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
            <div className="relative w-full max-w-4xl overflow-hidden">
                <div className="flex transition-transform py-16 duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full h-[700px]" />
                    ))}
                </div>
                <button className="absolute top-1/2 text-white transform -translate-y-1/2 left-0 py-2 px-6 m-6 bg-primary rounded-full shadow-lg" onClick={prevSlide}>
                    &lt;
                </button>
                <button className="absolute top-1/2 text-white transform -translate-y-1/2 right-0 py-2 px-6 m-6  bg-primary rounded-full shadow-lg" onClick={nextSlide}>
                    &gt;
                </button>
            </div>

            
        </section>
        </div>
    )
}
