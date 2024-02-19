import { socials } from './const'
import { MdEmail } from 'react-icons/md'

const Socials = () => {
    return (
        <section class="bg-white dark:bg-gray-900 mt-12">
            <div class="md:px-[70px] h-auto px-8 w-full py-12 mx-auto">
                <div className="mb-4 w-full">
                    <p className="text-primary xl:text-2xl md:text-lg">{socials.miniTitle}</p>
                    <h2 className="md:text-3xl xl:text-5xl text-2xl font-bold text-secondary">{socials.title}</h2>
                </div>

                <div class="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-3 ">
                    <div class="rounded-[10px] px-4 xl:p-12 py-4 bg-secondary">
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
                    </div>

                    <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                        <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Socials