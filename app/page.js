import Reviews from "./components/Reviews";
import { Accordion, FAQ, Footer, Landing, OldProjects, Profile, Propreties, Socials } from "./components/const";

export default function Home() {
    return (
        <>
            <Landing />
            <Propreties />            
            <Profile />           
            <Reviews />
            <FAQ />
            <Socials />
            <Footer />
        </>
    )
}
