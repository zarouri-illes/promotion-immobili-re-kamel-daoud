import Link from "next/link";

export default function page() {
    return (
        <main className="w-full z-[999] bg-secondary py-28 relative mb-32 px-8 md:px-16 xl:px-16">
            <section className="flex gap-16 justify-between items-center">
                <div>
                    <img src="/apropos/propos.jpg" alt="kamel daoud immobilier algerie bouira f2 f3 f4 f5 duplex suplex"
                    className="w-[2000px] rounded-[10px]" />
                </div>

                <div className="flex flex-col md:space-y-16 items-start">
                    <h1 className="md:text-3xl text-white font-bold">Promotion immobilier DAOUD KAMEL</h1>

                    <p className=" font-semibold text-white">Nous nous engageons à vous aider à trouver la maison de vos rêves. Notre mission est de fournir des services immobiliers exceptionnels avec une touche personnelle, garantissant que chaque client trouve la propriété idéale pour répondre à ses besoins.

                    Avec une base fondée sur la confiance, la transparence et l’intégrité, nous visons à construire des relations durables avec nos clients. De la consultation initiale à la clôture finale, nous fournissons des conseils honnêtes et une assistance complète, garantissant que vous vous sentez en confiance et informé à chaque étape du processus.</p>


                </div>
            </section>
        </main>
    )
}
