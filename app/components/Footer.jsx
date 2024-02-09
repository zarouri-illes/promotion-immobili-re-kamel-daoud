import React from 'react'
import { FaFacebook, FaInstagram, FaLocationDot, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

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
                            <a href="" target='_blank'><FaFacebook /></a>
                            <a href="" target='_blank'><FaInstagram /></a>
                            <a href="" target='_blank'><FaTiktok /></a>
                            <a href="" target='_blank'><FaYoutube /></a>
                        </div>
                    </div>

                    <div class="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
                        <div class="mb-4 flex max-w-[272px] items-start justify-start">
                            <FaLocationDot className='text-4xl pr-2 text-primary' />
                            <p>8502 Preston Rd. Inglewood, Maine 98380, USA</p>
                        </div>
                        <div class="mb-4 flex max-w-[272px] items-center justify-start">
                            <MdEmail className='text-4xl pr-2 text-primary' />
                            <p>support@flowspark.co</p>
                        </div>
                    </div>
                </div>   
            </div>
        </footer>
    )
}

export default Footer
