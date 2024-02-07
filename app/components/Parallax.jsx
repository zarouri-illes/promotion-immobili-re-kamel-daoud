"use client"

import React from 'react'
import { Hero } from './const'
import { useState } from "react";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdClose, MdEmail } from "react-icons/md";
import { header } from "./const";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";

export const Parallax = () => {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="w-full h-screen overflow-hidden relative grid place-items-center">

            <nav className="w-full shadow-md z-30 inset-0 absolute" style={{backgroundColor: "transparent"}}>
                <div className="px-8 md:px-24 w-full flex justify-between items-center">
                    <div>
                        <img src={header.image.link} alt={header.image.alt} className="w-[90px]" />
                    </div>

                    {
                        !open ? <FaBarsStaggered className="font-bold text-2xl absolute right-8 md:hidden" onClick={() => toggleOpen()} /> : <MdClose className="font-bold text-2xl absolute right-8 md:hidden" onClick={() => toggleOpen()} />
                    }

                    <ul className="hidden absolute right-[500px] list-none md:flex gap-8 items-center">
                        {
                            header.list.map((item) => (
                                <li>
                                    <Link href={item.link} className="font-bold text-secondary cursor-pointer transition-all duration-500 hover:text-primary">{item.title}</Link>
                                </li>
                            ))
                         }
                    </ul>

                    <div className={`md:hidden absolute left-0 bg-white w-full px-8 transition-all duration-500 ${open ? 'top-[110px]' : 'top-[-410px]'} `}>
                        <ul className="rounded-[10px] py-8 border list-none flex flex-col max-w-full gap-6 justify-center text-center items-center">
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
            </nav>
            
            <section className="z-30  left-14 mt-[-200px] px-8">
                <h1 className="text-secondary text-4xl font-bold md:text-6xl text-left">Trouvez la maison de vos reves</h1>
            </section>

            <div 
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
