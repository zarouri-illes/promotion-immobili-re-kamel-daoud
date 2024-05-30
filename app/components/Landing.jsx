"use client"

import { motion } from "framer-motion";

export const Landing = () => {

    return (
        <div className="w-full h-screen overflow-hidden grid">
            <section className="z-[9999] w-full md:left-[35px] px-8 mt-16 md:px-16">
                <motion.h1
                initial={{ x : -100, opacity: 0 }}
                animate={{ x : 0, opacity: 1 }}
                transition={{ duration : 1.5, delay: 0.5}}
                className="text-secondary text-[36px] md:leading-relaxed xl:text-6xl md:max-w-[500px] xl:max-w-[700px] xl:leading-relaxed  font-bold md:text-5xl text-left">Trouvez la maison de vos <span className='text-primary'>reves</span>.</motion.h1>
            </section>

            <motion.div
                initial={{x: 1500}}
                animate={{x: 0}}
                transition={{ duration : 2}}
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: ` url("/hero/Subtract.png") `,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover"
                }}
            />

        </div>
    )
}
