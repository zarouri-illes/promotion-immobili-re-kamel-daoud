import {Landing} from "./Landing";
import Propreties from "./Propreties";
import Accordion from "./Accordion";
import FAQ from "./FAQ";


const header = {
    address: "Banque ABC, Bouira",
    number: "+213 7 93 08 05 67",
    email: "kamel-daoud@gmail.com",

    image: {
        link: "/logo.png",
        alt: "Kamel Daoud Immobilier Bouira Promotion Algerie"
    },

    list: [
        {
            title: "Acceuil",
            link: "/",
        },
        {
            title: "A propos",
            link: "/",
        },
        {
            title: "Projets",
            link: "/",
        },
        {
            title: "Contact",
            link: "/",
        }
    ]
}

const faq = [
    {
        question: "Question 1",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, mollitia?"
    },
    {
        question: "Question 2",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, mollitia?"
    },
    {
        question: "Question 3",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, mollitia?"
    },
]

export {
    faq,
    Landing,
    FAQ,
    Propreties,
    header,
    Accordion
}