"use client"

import { Title, socials } from './const'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Socials = () => {

    const [inView, setView] = useState(false);

    return (
        <section class="bg-white mt-12">
            <div class="md:px-[70px] h-auto px-8 w-full py-12 mx-auto">
                
                <Title title={socials.title} miniTitle={socials.miniTitle} />

                <div class="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-3 ">
                    <motion.div 
                    initial={{opacity:0, x: -100}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onViewportEnter={ () => setView(true) }
                    animate={ inView ? {x: 0, opacity: 1} : {}}
                    class="rounded-[10px] px-4 xl:p-12 py-4 bg-secondary">
                        {
                            socials.contact.map((item) => (
                                <div>
                                    <h2 class="mt-4 font-bold text-primary lg:text-2xl text-lg flex items-center gap-4">
                                        <div className='bg-white rounded-full p-3'>
                                            {item.icon}
                                        </div>
                                        {item.title}
                                    </h2>
                                
                                    <div className='text-white pl-[0] xl:pl-[70px]'>
                                        <p class="mt-2 lg:text-xl font-semibold">{item.value}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </motion.div>

                    <motion.div
                    initial={{opacity:0, x: 100}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    onViewportEnter={ () => setView(true) }
                    animate={ inView ? {x: 0, opacity: 1} : {}}
                    class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                        <iframe width="100%" height="100%" frameborder="0" title="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.1246872720412!2d3.8870566756676914!3d36.38197547236926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128c2f006aaf048f%3A0x360bd32cd88e1ef3!2sPromotion%20immobili%C3%A8re%20Daoud%20Kamel!5e0!3m2!1sfr!2sdz!4v1710995035489!5m2!1sfr!2sdz">
                        </iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Socials