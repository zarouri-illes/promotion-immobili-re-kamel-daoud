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
        <section className='mt-24'>
            <div>
                <div className='flex justify-center gap-24'>
                    {
                        info.map((item, id) => (
                            <div key={id} className='text-center flex flex-col items-center justify-center place-content-center'>
                                {item.icon}
                                <br />
                                <h1 className='font-bold'>{item.title}</h1>
                                <h2>{item.value}</h2>
                            </div>
                        ))
                    }
                </div>

             </div>

             <form className="mx-auto opacity-[0.2] text-white rounded-[10px] w-[800px] mt-16 bg-secondary mb-4 text-left sm:p-4 md:p-20">
                <div className="mb-4 grid w-full grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name-2" className="mb-1 font-medium">Nom</label>
                        <input type="text" className="text-secondary block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black" placeholder="" required="" />
                    </div>
                    <div>
                        <label htmlFor="name-3" className="mb-1 font-medium"> Prénom</label>
                        <input type="text" className="text-secondary block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black" placeholder="" required="" />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="field" className="mb-1 font-medium"> Telephone </label>
                    <input type="text" className="mb-4 text-secondary block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black" />
                </div>
                <div className="mb-5 md:mb-6 lg:mb-8">
                    <label htmlFor="field" className="mb-1 font-medium"> Message </label>
                    <textarea placeholder="" maxLength="5000" name="field" className="mb-2.5 block h-auto min-h-44 text-secondary w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-black"></textarea>
                </div>
            
                <input type="submit" value="Envoyer" className="inline-block w-full rounded-md cursor-pointer bg-black px-6 py-3 text-center font-semibold bg-primary transition-all duration-200 hover:opacity-65 text-white" />
            </form>
    </section>
    )
}
