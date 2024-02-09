import {Landing} from "./Landing";
import Propreties from "./Propreties";
import Accordion from "./Accordion";
import FAQ from "./FAQ";
import Profile from "./Profile";


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
];

const profile = {
    name: "Certificat ISO 9001",
    description: "La promotion Immobilière Daoud Kamel se lance dans le cours sur les normes ISO avec enthousiasme. À la recherche de l'excellence, l'agence vise à perfectionner sa gestion de la qualité, intégrant les principes et pratiques pour garantir une conformité optimale et renforcer sa réputation dans le secteur immobilier.",
    image: {
        link: "/logo.png",
        alt: "Kamel Daoud immobilier promotion bouira" 
    },
    button: {
        text: "Voir plus",
        link: "",
    }
}

export {
    faq,
    Landing,
    profile,
    FAQ,
    Propreties,
    header,
    Profile,
    Accordion
}