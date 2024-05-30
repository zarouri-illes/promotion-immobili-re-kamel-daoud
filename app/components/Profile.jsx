"use client"

import { profile } from "./const"
import { TiChevronRight } from "react-icons/ti";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Profile = () => {

    const [inView, setView] = useState(false);

    return (  
        <section className=' w-full px-8 lg:py-8 md:px-8 xl:px-10 mt-[100px] md:mt-[50px] text-3xl '>
            <div className='flex flex-col lg:flex-row justify-between lg:justify-center lg:gap-24  items-center gap-2 '>
                
                <div>
                    <motion.img 
                    initial={{scale: 0.5, opacity:0}}
                    onViewportEnter={ () => setView(true) }
                    animate={ inView ? {scale: 1, opacity:1} : {}}
                    transition={{ duration: 1}}
                    src={profile.image.link} alt={profile.image.alt} className='w-[500px] md:w-[450px] lg:w-[400px]'/>
                </div>

                <motion.div
                initial={{x: 200, opacity:0}}
                onViewportEnter={ () => setView(true) }
                animate={ inView ? {x: 0, opacity:1} : {}}
                transition={{ duration: 1, delay: 0.5}}
                className='space-y-6 xl:space-y-10'>
                    <h1 className='xl:text-6xl font-bold text-secondary lg:text-4xl'>{profile.name}</h1>
                    <p className='xl:text-xl text-lg text-gray md:max-w-[600px] lg:text-[15px]'>{profile.description}</p>
                </motion.div>

            </div>
        </section>
        )
}

export default Profile
