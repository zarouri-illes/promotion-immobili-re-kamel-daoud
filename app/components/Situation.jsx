import { FaTriangleExclamation } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdConstruction } from "react-icons/md";

const text = ""

const Situation = (props) => {

    const situObject = {
        text: "",
        color: "",
        icon: null,
    }

    switch(props.situ) {
        case "disponible":
            situObject.text = "Notre résidence de luxe propose des appartements à vendre. Soyez rapide pour obtenir la maison de vos rêves avant qu'ils ne partent. Contactez-nous dès aujourd'hui !";
            situObject.color = "bg-green"
            situObject.icon = <FaCheckCircle className="text-2xl text-white"/>
            break;
        case "sold":
            situObject.text = "Tous les appartements de notre résidence de luxe sont désormais vendus. Merci pour votre intérêt. Restez à l'écoute pour les futures opportunités et les projets à venir. Contactez-nous pour plus d'informations.";
            situObject.color = "bg-primary"
            situObject.icon = <FaTriangleExclamation className="text-2xl text-white" />
            break;
        case "sold":
            situObject.text = "Notre résidence est en construction, mais vous pouvez toujours acheter un appartement. Sécurisez votre futur logement dès aujourd'hui—contactez-nous pour plus de détails !";
            situObject.color = "bg-orange"
            situObject.icon = <MdConstruction className="text-2xl text-white" />
            break;
    }
  return (
    <div className="mb-16">
        <div className={`w-full p-6 rounded-[15px] flex flex-col xl:flex-row gap-4 items-center ${situObject.color}`}>
            {situObject.icon}
            <p>{situObject.text}</p>
        </div>
    </div>
  )
}

export default Situation
