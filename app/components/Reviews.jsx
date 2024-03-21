"use client"

import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { reviews } from "./const";
import { useState } from "react";


const Reviews = () => {

    const [isInView, setIsInView] = useState(false);

    return (
        <section className="md:px-[70px] h-auto px-8 w-full py-12 mx-auto">
            <div className="mb-4 w-full">
                <p className="text-primary xl:text-2xl md:text-lg">Featured listings</p>
                <h2 className="md:text-3xl xl:text-5xl text-2xl font-bold text-secondary">Available Propreties</h2>
            </div>

            <div>
                <div className="bg-secondary flex gap-8 rounded-md px-6 py-4">
                    <div className="text-4xl text-white">
                        <FaQuoteLeft />
                    </div>

                    <div className="text-white">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <div>
                            <h3>Zarouri Illes</h3>
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews