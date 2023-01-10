import { pets } from "../data/pets.js";
import ImageCard from './ImageCard';
import { useRepeated } from '../custom_hooks/useRepeated';
import { memo } from 'react'


function Trending({ answersArr }) {
    console.log("Trending is rendered")
    // we want to render images of the pet that people searched for the most
    // calling the custom hook instead of having the logic inside the component
    const petArr = useRepeated(pets, answersArr);

    return (
        <>

            <h2 className="pt-6 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 underline border-t-2 border-gray-300 dark:bg-black dark:text-white"> Trending</h2>
            <section className="overflow-hidden text-gray-700 dark:bg-black dark:text-white">
                <section className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <section className="flex flex-wrap -m-1 ">
                        {
                            petArr.map(pet => {
                                return (
                                    <section className={`relative ${pet.size} p-1 md:p-2`} key={pet.id}>
                                        <ImageCard src={pet.image} name={pet.name} description={pet.description} size={pet.size} />
                                    </section>
                                )
                            })
                        }
                    </section>
                </section>
            </section>
        </>
    )
}

export default memo(Trending)