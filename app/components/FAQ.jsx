import { Accordion } from "./const";
import { faq } from "./const";


const FAQ = () => {
    return (
        <section className="w-full mt-16 px-8 md:px-16 xl:px-16">
            <div className="mb-4 w-full">
                <p className="text-primary xl:text-2xl md:text-lg">Featured listings</p>
                <h2 className="md:text-3xl xl:text-5xl text-2xl font-bold text-secondary">Available Propreties</h2>
            </div>
            <div className="mt-8">
                {faq.map((item) => (
                    <Accordion
                    question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>  
  )
}

export default FAQ
