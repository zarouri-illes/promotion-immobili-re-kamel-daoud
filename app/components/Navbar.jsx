"use client"

import { useState } from "react";
import { MdClose } from "react-icons/md";
import { header } from "./const";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <motion.nav 
            initial={{y:-200, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{ duration : 1}}
            className="w-full relative z-[9999]" style={{backgroundColor: "transparent"}}>
                <div className="px-8 md:px-16 w-full flex justify-between items-center">
                    <div>
                        <img src={header.image.link} alt={header.image.alt} className="w-[90px] lg:w-[120px] xl:w-[100px]" />
                    </div>

                    {
                        !open ? <FaBarsStaggered className="font-bold text-2xl absolute right-8 md:hidden" onClick={() => toggleOpen()} /> : <MdClose className="font-bold text-2xl absolute right-8 md:hidden" onClick={() => toggleOpen()} />
                    }

                    <ul className="hidden lg:right-[450px] md:right-[200px] xl:right-[550px] list-none md:flex gap-8 items-center">
                        {
                            header.list.map((item) => (
                                <li>
                                    <Link href={item.link} className="font-bold xl:text-xl text-secondary cursor-pointer transition-all duration-500 lg:text-xl md:text-[16px] hover:text-primary">{item.title}</Link>
                                </li>
                            ))
                         }
                    </ul>

                    <div>
                        
                    </div>

                    <div className={`md:hidden absolute left-0 z-[1000]  w-full px-8 transition-all duration-500 ${open ? 'top-[110px]' : 'top-[-410px]'} `}>
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
    )
}
