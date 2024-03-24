import { Accordion } from "./const";
import { faq } from "./const";
import { Title } from "./const";


const FAQ = () => {
    return (
        <section className="w-full mt-16 px-8 md:px-16 xl:px-16">
            
            <Title title="" miniTitle="" />

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
