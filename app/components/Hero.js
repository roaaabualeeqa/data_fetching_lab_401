import Image from "next/image"

export default function Hero() {
    return (
        <section className="bg-white dark:bg-black">
            <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
                <section className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white">Welcome to the Cutest Pets Shop</h1>

                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 lg:text-xl ">We are the Biggest online pet store. You can now shop for all your pet needs: Pet food, treats, cat litter, toys and accessories. Choose what you need, and we will deliver the goods to your door step!</p>

                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg bg-cyan-900 hover:bg-cyan-700 focus:ring-4">
                        Get Started
                    </a>
                </section>
                <section className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="/assets/pets.png"
                        width={500}
                        height={500}
                        alt="Pet Shop Pets"
                    />
                </section>
            </section>
        </section>
    )
}