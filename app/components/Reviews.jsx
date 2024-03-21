"use client"

import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { reviews } from "./const";


const Reviews = () => {

    return (
        <section className="md:px-[70px] h-auto px-8 w-full py-12 mx-auto">

            <div class="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-6 md:grid-cols-2 lg:mb-8">
                {reviews.map((item) => (
                    <div class="grid grid-cols-1 gap-6 rounded-md border border-solid border-secondary bg-white p-8 md:p-10">
                    <FaQuoteLeft className="text-4xl text-primary"/>
                        <p class="text-[#636262]">{item.par}</p>
                        <div class="flex flex-row items-start">
                            <div class="flex flex-col items-start">
                                <h6 class="text-base font-bold">{item.name}</h6>
                                <p class="text-sm text-[#636262] sm:text-sm">   {item.appartement}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Reviews