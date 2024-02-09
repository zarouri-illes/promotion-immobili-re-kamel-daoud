import React from 'react'
import { FaPhone } from 'react-icons/fa6'
import { FaFacebook, FaInstagram, FaLocationDot, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { footer } from './const'

const Footer = () => {
    return (             
        <footer class="bg-secondary mt-24 lg:px-10 text-white">
            <div class=" w-full px-8 lg:px-10 py-8 md:px-16 md:py-24 lg:py-20">
                <div class="flex flex-row justify-between items-center max-[767px]:flex-col max-[767px]:items-start">
                    <div class="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
                        <h2 class="text-2xl font-semibold text-white lg:leading-relaxed md:text-[25px]">
                        Votre maison de <span className='text-primary'>rêve</span> , à portée de main!
                        </h2>

                        <div className='flex lg:gap-8 md:gap-6 gap-8 mt-8 text-3xl text-white'>
                            {
                                footer.socials.map((item) => (
                                    <a href={item.link} target='_blank'>{item.icon}</a>
                                ))
                            }
                        </div>
                    </div>

                    <div class="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
                        {footer.extra.map((item)=>(
                        <div class={`${item.class}`}>
                            {item.icon}
                            <p className=''>{item.text}</p>
                        </div>
                        ))}
                    </div>
                </div>   
            </div>
        </footer>
    )
}

export default Footer
