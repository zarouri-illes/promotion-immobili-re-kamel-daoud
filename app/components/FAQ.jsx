"use client"

import { Accordion } from "./const";
import { faq } from "./const";
import { Title } from "./const";
import { motion } from "framer-motion";
import { useState } from "react";


const FAQ = () => {

    const [inView, setView] = useState(false);

    return (
        <section className="w-full mt-16 px-8 md:px-16 xl:px-16">
            
            <Title title="Questions fréquemment posées" miniTitle="Q&A" />

            <motion.div 
            initial={{ y: -50,opacity: 0}}
            onViewportEnter={ () => setView(true) }
            animate={ inView ? { y: 0, opacity: 1 } : {} }
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8">
                {faq.map((item) => (
                    <Accordion
                    question={item.question} answer={item.answer} />
                ))}
            </motion.div>
        </section>  
  )
}

export default FAQ
