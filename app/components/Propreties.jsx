"use client"

import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { Title, propreties } from "./const";
import { motion } from "framer-motion";
import { useState } from "react";

const Propreties = () => {

    const [onView, setView] = useState(false);
    
    return (
        <section className="md:px-[70px] px-8 w-full overflow-hidden relative place-items-center mt-16">

            <Title miniTitle="Featured Listings" title="Avalaible appartements" />

            <div
            className=" flex flex-nowrap lg:mt-8 overflow-x-auto whitespace-nowrap pb-8 gap-4">
                {
                    propreties.map((item) => (
                        <motion.div 
                        initial={{y:200, opacity:0}}
                        transition={{ duration: 1, delay: item.num}}
                        onViewportEnter={ () => setView(true) }
                        animate={ onView ? { y: 0, opacity: 1 } : {} }

                        className="border rounded-[10px] z-[41684]">
                            <div>
                                <img src={item.image.link} alt={item.image.alt} className="rounded-t-[10px]"/>
                            </div>

                            <div className="mt-2 px-4 pb-6">
                                <p className="flex items-center gap-1 font-medium lg:text-xl text-secondary"><FaLocationDot className="text-primary lg:text-3xl" /> {item.address}</p>
                                <h2 className="font-bold text-2xl mt-2 lg:text-3xl">{item.title}</h2>

                                <ul className="flex items-center flex-wrap gap-4 mt-8">
                                    <li className="flex items-center lg:text-2xl gap-1">
                                        <IoBedOutline className="text-primary text-3xl lg:text-5xl" />
                                        <strong>{item.bed}</strong>
                                        Bedrooms
                                    </li>

                                    <li className="flex  items-center lg:text-2xl gap-2">
                                        <TfiLayoutPlaceholder className="text-primary text-xl lg:text-4xl" />
                                        <strong>{item.surface}</strong>
                                        m²
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default Propreties
