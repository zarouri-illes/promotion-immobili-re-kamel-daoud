import { profile } from "./const"
import { TiChevronRight } from "react-icons/ti";

const Profile = () => {
    return (  
        <section className=' w-full px-8 md:px-16 xl:px-10 mt-[100px] md:mt-[50px] text-3xl '>
            <div className='flex flex-col lg:flex-row justify-between lg:justify-center lg:gap-32  items-center gap-2 '>
                
                <div>
                    <img src={profile.image.link} alt={profile.image.alt} className='w-[500px] md:w-[500px] lg:w-[600px]'/>
                </div>

                <div className='space-y-6 xl:space-y-10'>
                    <h1 className='xl:text-6xl font-bold text-secondary lg:text-4xl'>{profile.name}</h1>
                    <p className='xl:text-xl text-lg text-gray md:max-w-[600px] lg:text-[15px]'>{profile.description}</p>
                    <a href={profile.button.link} target="_blank" className="flex transition-all duration-500 hover:opacity-75 items-center text-xl px-6 py-2 bg-primary w-[70%] md:w-[45%] text-white rounded-[10px] text-center justify-center gap-4">
                        {profile.button.text}
                        <TiChevronRight />
                    </a>
                </div>

            </div>
        </section>
        )
}

export default Profile
