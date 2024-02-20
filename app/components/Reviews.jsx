import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Reviews = () => {
    return (
        <section>
            <div class="md:px-[70px] h-auto px-8 w-full py-12 mx-auto">
                <div className="lg:mb-4 w-full">
                    <p className="text-primary xl:text-2xl md:text-lg">Fuk sum right</p>
                    <h2 className="md:text-3xl xl:text-5xl text-2xl font-bold text-secondary">This shit is outta control</h2>
                </div>

                <div className='mt-8 text-white flex flex-col md:flex-row gap-4'>

                    <div className='bg-secondary rounded-[10px] p-8 gap-8 items-start '>
                        <FaQuoteLeft className="text-4xl" />
                        <div className="mt-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis libero cumque facere, consequatur dolorem?</p>
                            <div className='mt-8'>
                                <h2 className="text-xl font-semibold">Zarouri Illes</h2>
                                <p>Lorem ipsum dolor sit.</p>
                                <p className="flex mt-8 text-3xl space-x-4 text-primary"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Reviews