import Reviews from "./components/Reviews";
import { FAQ, Landing, Profile, Propreties, Socials } from "./components/const";

export default function Home() {
  return (
    <>
      <Landing />
      <Propreties />
      <Profile />
      <Reviews />
      <FAQ />
      <Socials />
    </>
  );
}
