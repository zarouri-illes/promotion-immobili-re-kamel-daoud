"use client"

import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import React from 'react';
import { useState } from "react";


const Reviews = () => {
    const [isInView, setIsInView] = useState(false);
    return (
        <section>
            <div class="md:px-[70px] px-8 w-full py-12 mx-auto">
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

                <div className='mt-8 text-white flex flex-col md:flex-row gap-4'>

                    <motion.div 
                    initial={{y:-50, opacity:0}}
                    transition={{ duration: 2}}
                    animate={isInView ? {y:0, opacity:1}: {}}
                    onViewportEnter={() => {
                        setIsInView(true);
                    }}
                    className='bg-secondary rounded-[10px] p-8 gap-8 items-start '>
                        <FaQuoteLeft className="text-4xl" />
                        <div className="mt-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis libero cumque facere, consequatur dolorem?</p>
                            <div className='mt-8'>
                                <h2 className="text-xl font-semibold">Zarouri Illes</h2>
                                <p>Lorem ipsum dolor sit.</p>
                                <p className="flex mt-8 text-3xl space-x-4 text-primary"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></p>
                            </div>
                        </div>
                    </motion.div>
                   
                </div>
            </div>
        </section>
    )
}

export default Reviews