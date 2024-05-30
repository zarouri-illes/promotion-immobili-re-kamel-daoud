import Link from "next/link";

export default function page() {
    return (
        <main className="w-full z-[999] bg-secondary py-28 relative mb-32 px-8 md:px-16 xl:px-16">
            <section className="flex gap-16 justify-between items-center">
                <div>
                    <img src="/apropos/propos.jpg" alt="kamel daoud immobilier algerie bouira f2 f3 f4 f5 duplex suplex"
                    className="w-[2000px] rounded-[10px]" />
                </div>

                <div>
                    0558587081
                    0770565092
                </div>

                <div className="flex flex-col md:space-y-16 items-start">
                    <h1 className="md:text-5xl text-white font-bold">Lorem ipsum dolor sit amet.</h1>

                    <p className=" font-semibold text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ducimus optio atque laborum possimus eveniet iure earum hic quo commodi excepturi? Maiores vel explicabo soluta? Placeat, itaque doloremque. Sequi, eveniet iusto tenetur laboriosam optio a odio omnis expedita vitae et velit impedit nulla architecto tempora? Minima saepe mollitia officia cum.</p>

                    <Link href={"/projets"}>
                        <button className="px-10 text-white cursor-pointer transition-all duration-300 hover:opacity-70 py-2 bg-primary rounded-[50px]">Voir les projets</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
