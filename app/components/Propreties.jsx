"use client"

import { FaLocationDot } from "react-icons/fa6";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { Title, propreties } from "./const";
import { motion } from "framer-motion";
import { useState } from "react";
import Situ from "./Situ";
import Link from "next/link";

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

                        className="border flex flex-col justify-between rounded-[10px] z-[41684]">
                            <div>
                                <div className="relative">
                                    <img width={500} src={item.image.link} alt={item.image.alt} className="rounded-t-[10px] h-[300px]"/>
                                    
                                    {
                                        item.situation === 0? <Situ text="Vendu" color="bg-primary" /> :
                                        item.situation === 1? <Situ text="Disponible" color="bg-green" />:
                                        <Situ text="En cours de construction" color="bg-orange" />
                                    }
                                </div>

                                <div className="mt-2 px-4">
                                    <p className="flex items-center gap-1 font-medium lg:text-xl text-secondary"><FaLocationDot className="text-primary lg:text-3xl" /> {item.address}</p>
                                    <div className="w-[100px]">
                                        <h2 className="font-bold text-2xl mt-2 lg:text-2xl">{item.title}</h2>
                                    </div>

                                    <ul className=" items-center flex-wrap gap-4 mt-8">
                                        <li className="flex items-center lg:text-2xl gap-6">
                                            <FaBuilding className="text-primary text-3xl lg:text-3xl" />
                                            <strong>{item.bed} Log</strong>
                                        </li>

                                        <br />       
                                    </ul>
                                </div>
                            </div>

                            <div className="px-4 pb-4">

                                <div className=" w-full place-content-end flex justify-end">
                                    <Link href={item.link}>
                                        <MdOutlineKeyboardDoubleArrowRight className="text-primary cursor-pointer text-4xl" />
                                    </Link>
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
