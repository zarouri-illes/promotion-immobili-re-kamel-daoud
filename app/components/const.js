import {Landing} from "./Landing";
import Propreties from "./Propreties";
import Accordion from "./Accordion";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Profile from "./Profile";
import { MdEmail } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaLocationDot, FaTiktok, FaYoutube, FaPhone } from 'react-icons/fa6';
import { HiBuildingOffice2 } from "react-icons/hi2";
import Socials from "./Socials";
import Title from "./Title";

const header = {
    address: "Banque ABC, Bouira",
    number: "+213 7 93 08 05 67",
    email: "kamel-daoud@gmail.com",

    image: {
        link: "/logo.png",
        alt: "Kamel Daoud Immobilier Bouira Promotion Algerie",
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
};

const propreties = [
    {
        address: "El Riche, Bouira",
        title: "Projet El Riche 1",
        bed: "30",
        surface: "45",
        image: {
            link: "/propreties/ap1.jpg",
            alt: "Promotion immobiliere kamel daoud bouira f3 f2 f4 f5 duplex suplex"
        },
        num:0.2,
    },
    {
        address: "El Riche, Bouira",
        title: "Appartement F3",
        bed: "3",
        surface: "45",
        image: {
            link: "/propreties/ap1.jpg",
            alt: "Promotion immobiliere kamel daoud bouira f3 f2 f4 f5 duplex suplex"
        },
        num:0.5,
    },
    {
        address: "El Riche, Bouira",
        title: "Appartement F3",
        bed: "3",
        surface: "45",
        image: {
            link: "/propreties/ap1.jpg",
            alt: "Promotion immobiliere kamel daoud bouira f3 f2 f4 f5 duplex suplex"
        },
        num:0.7,
    },
];

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
};

const footer = {
    socials: [
        {
            icon: <FaFacebook />,
            link: "#",
        },
        {
            icon: <FaInstagram />,
            link: "#",
        },
        {
            icon: <FaTiktok />,
            link: "#",
        },
        {
            icon: <FaYoutube />,
            link: "#",
        }
    ],

    extra: [
        {
            icon: <FaLocationDot className='text-4xl pr-2 text-primary' />,
            text: "À côté de la banque ABC, Bouira, Algérie",
            class: "mb-4 flex max-w-[272px] gap-5 items-start justify-start"
        },
        {
            icon: <MdEmail className='text-4xl pr-2 text-primary' />,
            text: "etbph.daoud@gmail.com",
            class: "mb-4 flex max-w-[272px] gap-3 items-center justify-start"
        },
        {
            icon: <FaPhone className='text-3xl pr-2 text-primary' />,
            text: "05 58 58 70 81",
            class: "mb-4 flex max-w-[272px] gap-4 items-center justify-start"
        }
    ]
};

const reviews = [
    {
        par: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis     libero cumque facere, consequatur dolorem?",
        name: "Zarouri Illes",
        appartement: "Duplex, El Asnam",
        delay: 0.2
    },
    {
        par: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur perferendis     libero cumque facere, consequatur dolorem?",
        name: "Daoud Dhia Eddine",
        appartement: "F5, El Rich.",
        delay: 0.5
    }
]

const socials = {
    miniTitle: "Plus d'informations",
    title: "Pour nous contacter",
    contact: [
        {
            icon: <MdEmail className='text-primary text-xl xl:text-3xl'/>,
            title: "Email",
            value: "etbph.daoud@gmail.com"
        },
        {
            icon: <HiBuildingOffice2 className='text-primary text-xl xl:text-3xl'/>,
            title: "Bureau",
            value: "À côté de la banque ABC, Bouira, Algérie"
        },
        {
            icon: <MdEmail className='text-primary text-xl xl:text-3xl'/>,
            title: "Numéro",
            value: "07 93 08 05 67"
        }
    ]
}

export {
    faq,
    Landing,
    propreties,
    footer,
    profile,
    FAQ,
    Propreties,
    header,
    socials,
    Footer,
    reviews,
    Profile,
    Accordion,
    Socials,
    Title
}