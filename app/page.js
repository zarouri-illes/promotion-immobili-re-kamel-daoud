import Reviews from "./components/Reviews";
import { FAQ, Footer, Landing, Profile, Propreties, Socials } from "./components/const";

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
