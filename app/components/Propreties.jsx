"use client"

import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { TfiLayoutPlaceholder } from "react-icons/tfi";
import { propreties } from "./const";
import { motion } from "framer-motion";

const Propreties = () => {
    
    return (
        <section className="md:px-[70px] px-8 w-full overflow-hidden relative place-items-center mt-16">

            <div className="mb-4 w-full">
                <motion.p 
                initial={{ x : -200, opacity: 0}}
                whileInView={{ x : 0, opacity: 1}}
                transition={{duration:1, delay: 0.3}}
                className="text-primary xl:text-2xl md:text-lg">Featured listings</motion.p>
                <motion.h2 
                initial={{ x : -200, opacity: 0}}
                whileInView={{ x : 0, opacity: 1}}
                transition={{duration:1}}
                className="md:text-3xl xl:text-5xl text-2xl font-bold text-secondary">Available Propreties</motion.h2>
            </div>

            <motion.div
            initial={{}}
            animate={{}}
            transition={{staggerChildren: 1}}
            className=" flex flex-nowrap lg:mt-8 overflow-x-auto whitespace-nowrap pb-8 gap-4">
                {
                    propreties.map((item) => (
                        <motion.div 
                        initial={{y:200, opacity:0}}
                        transition={{ duration: 1, delay: item.num}}
                        whileInView={{y:0 , opacity:1
                        }}

                        className="border rounded-[10px]">
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
            </motion.div>
        </section>
    )
}

export default Propreties
