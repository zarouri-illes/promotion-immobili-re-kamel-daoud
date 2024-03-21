"use client"

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({question, answer}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return(
        <section>
            <div>
                <div className="bg-secondary px-8 py-4 rounded-xl mt-4">
                    <button className="flex items-center cursor-default justify-between w-full">
                        <p className="font-bold text-xl text-white">{question}</p>
                        {
                            accordionOpen ? <IoIosArrowUp className="text-2xl transition-all duration-500 text-white cursor-pointer" onClick={() => setAccordionOpen(!accordionOpen)} /> : 
                            <IoIosArrowDown className="text-2xl transition-all duration-500 text-white cursor-pointer" onClick={() => setAccordionOpen(!accordionOpen)} />
                        }
                    
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-500 ease-in-out
                        ${accordionOpen ? 'grid-rows-[1fr] mt-8 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}
                    `}>
                        <p className="text-white overflow-hidden">{answer}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordion;