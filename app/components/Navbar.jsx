"use client"
import { useState } from "react";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { header } from "./const";
import Link from "next/link";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50">
            <div className="lg:block hidden bg-secondary text-white py-2">
                <div className="container mx-auto lg:flex hidden items-center justify-between px-3">

                    <span className="flex items-center gap-x-3">
                        <FaLocationDot className="text-primary text-xl" />
                        <p className="text-[15px]">{header.address}</p>
                    </span>

                    <div className="flex items-center gap-x-6">
                        <span className="flex items-center gap-x-3">
                            <FaPhone className="text-primary text-xl" />
                            <p className="text-[15px]">{header.number}</p>
                        </span>

                        <span className="flex items-center gap-x-3">
                            <MdEmail className="text-primary text-xl" />
                            <p className="text-[15px]">{header.email}</p>
                        </span>
                    </div>

                </div>
            </div>

            <div>
                <ul>
                    <li>
                        <Link to="/">
                            <img src={header.image.link} alt={header.image.alt} />
                        </Link>
                    </li>
                    {
                        header.list.map((item) => (
                            <li>
                                <Link to={item.link}>{item.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar