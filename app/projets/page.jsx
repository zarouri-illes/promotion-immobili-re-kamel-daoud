import Link from "next/link";
import { Title } from "../components/const";
import { FaCheckCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const newest = [
    {
        title: "El riche Résidence",
        location: "El riche",
        image: "/propreties/constru.jpg",
        alt: "promotion immobilier daoud kamel f2 f3 f4 f5 el asnam algerie dz",
        numberOfAppartements: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit non et incidunt, commodi soluta iste aliquam. Minima eaque fuga deleniti perspiciatis, dolore laboriosam numquam ut ea nesciunt incidunt vel?",
        elevator: false,   
    },
    {
        title: "El riche Résidence",
        location: "El riche",
        image: "/propreties/constru.jpg",
        alt: "promotion immobilier daoud kamel f2 f3 f4 f5 el asnam algerie dz",
        numberOfAppartements: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit non et incidunt, commodi soluta iste aliquam. Minima eaque fuga deleniti perspiciatis, dolore laboriosam numquam ut ea nesciunt incidunt vel?",
        elevator: false,   
    }
    ,{
        title: "El riche Résidence",
        location: "El riche",
        image: "/propreties/constru.jpg",
        alt: "promotion immobilier daoud kamel f2 f3 f4 f5 el asnam algerie dz",
        numberOfAppartements: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit non et incidunt, commodi soluta iste aliquam. Minima eaque fuga deleniti perspiciatis, dolore laboriosam numquam ut ea nesciunt incidunt vel?",
        elevator: false,   
    }
]

export default function page() {
    return (
        <section className="w-full mb-32 mt-16 px-8 md:px-16 xl:px-16">

            <div className="flex items-center">
                <h1 className=" text-lg w-[300px] text-primary">Tous les projets disponibles</h1>
                <div className="w-full h-[1px] bg-primary"></div>
            </div>

            <br />
            <br />

            <div className="space-y-24">
                {
                    newest.map((item) => (
                        <div className="flex border-[1px] border-black">
                            <img src={item.image} alt="promotion immobiliere daoud kamel" className="w-[500px]"/>
                        <div>
                        <div className="p-8">

                            <h1 className="font-bold text-2xl">{item.title}</h1>
                            <br />
                            <br />
                            <p className="text-xl">{item.description}</p>
                            <br />
                            <br />
                            <ul>
                                <li className="flex items-center gap-4"><FaLocationDot className="text-primary" size={20} />{item.location}</li>
                                <br />
                                <li className="flex items-center gap-4"><FaCheckCircle size={20} className="text-primary" /> Parking</li>
                                <br />
                                <li className="flex items-center gap-4"><FaCheckCircle size={20} className="text-primary" /> Ascenseur</li>
                            </ul>

                            <br />
                            <br />
                            <Link href={'/el-riche-2'} className="text-primary flex gap-4 items-center font-bold">Voir plus <IoIosArrowForward size={20}/>
                            </Link>

                        </div>

                    </div>
                </div>
                    ))
                }
            </div>
            
        </section>
    )
}
