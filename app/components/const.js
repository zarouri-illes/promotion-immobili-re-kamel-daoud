import { Landing } from "./Landing";
import Propreties from "./Propreties";

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

export {
    Landing,
    Propreties,
    header,
}