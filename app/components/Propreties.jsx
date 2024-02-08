import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { TfiLayoutPlaceholder } from "react-icons/tfi";

const Propreties = () => {
    return (
        <section className="md:px-[70px] px-8 w-full h-screen overflow-hidden relative place-items-center mt-16">

            <div className="mb-4 w-full">
                <p className="text-primary text-lg">Featured listings</p>
                <h2 className="text-3xl font-bold text-secondary">Available Propreties</h2>
            </div>

            <div className=" flex flex-nowrap overflow-x-auto whitespace-nowrap pb-8 gap-4">
                <div className="border rounded-[10px]">
                    <div>
                        <img src="/propreties/ap1.jpg" alt="" className="rounded-t-[10px]"/>
                    </div>

                    <div className="mt-2 px-4 pb-6">
                        <p className="flex items-center gap-1 font-medium text-secondary"><FaLocationDot className="text-primary text-xl" /> El Riche, Bouira</p>
                        <h2 className="font-bold text-2xl mt-2">Appartement F3</h2>

                        <ul className="flex items-center flex-wrap gap-4 mt-8">
                            <li className="flex items-center gap-2">
                                <IoBedOutline className="text-primary text-3xl" />
                                <strong>3</strong>
                                Bedrooms
                            </li>

                            <li className="flex  items-center gap-3">
                                <TfiLayoutPlaceholder className="text-primary text-2xl" />
                                <strong>45</strong>
                                m²
                            </li>
                        </ul>
                    </div>
                </div>

         

                <div className="border rounded-[10px]">
                    <div>
                        <img src="/propreties/ap1.jpg" alt="" className="rounded-t-[10px]"/>
                    </div>

                    <div className="mt-2 px-4 pb-6">
                        <p className="flex items-center gap-1 font-medium text-secondary"><FaLocationDot className="text-primary text-xl" /> El Riche, Bouira</p>
                        <h2 className="font-bold text-2xl mt-2">Appartement F3</h2>

                        <ul className="flex items-center flex-wrap gap-4 mt-8">
                            <li className="flex items-center gap-2">
                                <IoBedOutline className="text-primary text-3xl" />
                                <strong>3</strong>
                                Bedrooms
                            </li>

                            <li className="flex  items-center gap-3">
                                <TfiLayoutPlaceholder className="text-primary text-2xl" />
                                <strong>45</strong>
                                m²
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border rounded-[10px]">
                    <div>
                        <img src="/propreties/ap1.jpg" alt="" className="rounded-t-[10px]"/>
                    </div>

                    <div className="mt-2 px-4 pb-6">
                        <p className="flex items-center gap-1 font-medium text-secondary"><FaLocationDot className="text-primary text-xl" /> El Riche, Bouira</p>
                        <h2 className="font-bold text-2xl mt-2">Appartement F3</h2>

                        <ul className="flex items-center flex-wrap gap-4 mt-8">
                            <li className="flex items-center gap-2">
                                <IoBedOutline className="text-primary text-3xl" />
                                <strong>3</strong>
                                Bedrooms
                            </li>

                            <li className="flex  items-center gap-3">
                                <TfiLayoutPlaceholder className="text-primary text-2xl" />
                                <strong>45</strong>
                                m²
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Propreties
