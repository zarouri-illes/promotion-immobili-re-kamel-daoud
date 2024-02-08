import { Accordion } from "./const";
import { faq } from "./const";

const FAQ = () => {
    return (
        <section className="w-full px-8 md:px-16 xl:px-16 h-screen">
            <div className="mb-4 w-full">
                <p className="text-primary text-xl">FAQ</p>
                <h2 className="text-3xl font-bold text-secondary">Some questions</h2>
            </div>
            <div>
                {faq.map((item) => (
                    <Accordion question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>  
  )
}

export default FAQ
