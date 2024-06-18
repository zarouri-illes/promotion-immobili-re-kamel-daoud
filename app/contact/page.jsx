import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLocationDot, FaTiktok, FaYoutube, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { HiBuildingOffice2 } from "react-icons/hi2";

const info = [
    {
        icon: <MdEmail className='text-primary text-xl xl:text-5xl'/>,
        title: "Email",
        value: "etbph.daoud@gmail.com"
    },
    {
        icon: <HiBuildingOffice2 className='text-primary text-xl xl:text-5xl'/>,
        title: "Bureau",
        value: "À côté de la banque ABC, Bouira, Algérie"
    },
    {
        icon: <FaPhone className='text-primary text-xl xl:text-5xl'/>,
        title: "Numéro",
        value: "07 93 08 05 67"
    }
]

const socials = [
    {
        icon: <FaFacebook />,
        link: "#",
    },
    {
        icon: <FaInstagram />,
        link: "#",
    },
    {
        icon: <FaTiktok />,
        link: "#",
    },
    {
        icon: <FaYoutube />,
        link: "#",
    }
]

export default function page() {
    return (
        <section>
            <div>
                <div className='flex justify-center gap-10'>
                    {
                        info.map((item) => (
                            <div className='text-center flex flex-col items-center justify-center place-content-center'>
                                {item.icon}
                                <br />
                                <h1>{item.title}</h1>
                                <h2>{item.value}</h2>
                            </div>
                        ))
                    }
                </div>

                <form action="">

                </form>
            </div>
        </section>
    )
}
