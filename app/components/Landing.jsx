"use client"

import { useState } from "react";
import { MdClose } from "react-icons/md";
import { header } from "./const";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

export const Landing = () => {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="w-full h-screen overflow-hidden relative grid place-items-center">

            <motion.nav 
            initial={{y:-200, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{ duration : 1}}
            className="w-full shadow-md z-30 inset-0 absolute" style={{backgroundColor: "transparent"}}>
                <div className="px-8 md:px-16 w-full flex justify-between items-center">
                    <div>
                        <img src={header.image.link} alt={header.image.alt} className="w-[90px] lg:w-[120px] xl:w-[150px]" />
                    </div>

                    {
                        !open ? <FaBarsStaggered className="font-bold text-2xl absolute right-8 md:hidden" onClick={() => toggleOpen()} /> : <MdClose className="font-bold text-2xl absolute right-8 md:hidden" onClick={() => toggleOpen()} />
                    }

                    <ul className="hidden md:absolute lg:right-[450px] md:right-[200px] xl:right-[550px] list-none md:flex gap-8 items-center">
                        {
                            header.list.map((item) => (
                                <li>
                                    <Link href={item.link} className="font-bold xl:text-2xl text-secondary cursor-pointer transition-all duration-500 lg:text-xl md:text-[16px] hover:text-primary">{item.title}</Link>
                                </li>
                            ))
                         }
                    </ul>

                    <div className={`md:hidden absolute left-0 z-50  w-full px-8 transition-all duration-500 ${open ? 'top-[110px]' : 'top-[-410px]'} `}>
                        <ul className="rounded-[10px] bg-white z-40 py-8 border list-none flex flex-col max-w-full gap-6 justify-center text-center items-center">
                            {
                                header.list.map((item) => (
                                    <li>
                                        <Link href={item.link} className="font-bold text-secondary">{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div> 
            </motion.nav>
            
            <section className="z-20 w-full absolute md:left-[35px] xl:max-w-[800px]  md:max-w-[500px] md:mt-[-180px] lg:mt-[-80px] xl:mt-[-150px] mt-[-120px] px-8">
                <motion.h1
                initial={{ x : -100, opacity: 0 }}
                animate={{ x : 0, opacity: 1 }}
                transition={{ duration : 1.5, delay: 0.5}}
                className="text-secondary text-[36px] md:leading-relaxed xl:text-7xl xl:leading-relaxed  font-bold md:text-5xl text-left">Trouvez la maison de vos <span className='text-primary'>reves</span>.</motion.h1>
            </section>

            <motion.div
                initial={{x: 1500}}
                animate={{x: 0}}
                transition={{ duration : 2}}
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: ` url("/hero/Subtract.png") `,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }}
            />

        </div>
    )
}
