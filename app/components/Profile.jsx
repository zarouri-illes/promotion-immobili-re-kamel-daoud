"use client"

import { profile } from "./const"
import { TiChevronRight } from "react-icons/ti";
import { motion } from "framer-motion";

const Profile = () => {
    return (  
        <section className=' w-full px-8 lg:py-8 md:px-8 xl:px-10 mt-[100px] md:mt-[50px] text-3xl '>
            <div className='flex flex-col lg:flex-row justify-between lg:justify-center lg:gap-32  items-center gap-2 '>
                
                <div>
                    <motion.img 
                    initial={{scale: 0.5, opacity:0}}
                    whileInView={{scale: 1, opacity:1}}
                    transition={{ duration: 1}}
                    src={profile.image.link} alt={profile.image.alt} className='w-[500px] md:w-[500px] lg:w-[600px]'/>
                </div>

                <div className='space-y-6 xl:space-y-10'>
                    <h1 className='xl:text-6xl font-bold text-secondary lg:text-4xl'>{profile.name}</h1>
                    <p className='xl:text-xl text-lg text-gray md:max-w-[600px] lg:text-[15px]'>{profile.description}</p>
                    <a href={profile.button.link} target="_blank" className="flex transition-all items-center text-2xl text-primary font-bold text-center justify-start gap-4">
                        {profile.button.text}
                        <TiChevronRight />
                    </a>
                </div>

            </div>
        </section>
        )
}

export default Profile
