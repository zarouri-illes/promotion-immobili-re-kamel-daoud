"use client"

import { FaLocationDot } from "react-icons/fa6";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { Title, propreties } from "./const";
import { motion } from "framer-motion";
import { useState } from "react";

const Propreties = () => {

    const [onView, setView] = useState(false);
    
    return (
        <section className="w-full px-8 md:px-16 xl:px-16 overflow-hidden relative place-items-center my-16">

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
                                        <FaBuilding className="text-primary text-3xl lg:text-3xl" />
                                        <strong>{item.bed}</strong>
                                        Appartements
                                    </li>

                                    <li className="flex  items-center lg:text-2xl gap-2">
                                        <TfiLayoutPlaceholder className="text-primary text-xl lg:text-4xl" />
                                        <strong>{item.surface}</strong>
                                        m²
                                    </li>
                                </ul>

                                <div className="mt-8 w-full place-content-end flex justify-end">
                                    <MdOutlineKeyboardDoubleArrowRight className="text-primary cursor-pointer text-4xl" />
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default Propreties
