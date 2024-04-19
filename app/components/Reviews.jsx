"use client"

import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { reviews } from "./const";
import { useState } from "react";
import { Title } from "./const";

const Reviews = () => {

    const [onView, setView] = useState(false);

    return (
        <section className="w-full mt-32 mb-32 px-8 md:px-16 xl:px-16">

            <Title title="Les avis de nos clients" miniTitle="Commentaires" />

            <div
            class="mb-5 mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-6 md:grid-cols-2 lg:mb-8">
                {reviews.map((item) => (
                    <motion.div
                    initial={{y:200, opacity:0}}
                    transition={{ duration: 1, delay: item.delay}}
                    onViewportEnter={ () => setView(true) }
                    animate={ onView ? { y: 0, opacity: 1 } : {} }

                    class="grid grid-cols-1 gap-6 rounded-md border border-solid border-secondary bg-white p-8 md:p-10">
                    <FaQuoteLeft className="text-4xl text-primary"/>
                        <p class="text-[#636262]">{item.par}</p>
                        <div class="flex flex-row items-start">
                            <div class="flex flex-col items-start">
                                <h6 class="text-base font-bold">{item.name}</h6>
                                <p class="text-sm text-[#636262] sm:text-sm">{item.appartement}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Reviews