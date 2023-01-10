import Image from 'next/image';

export default function ImageCard({ src, name, description }) {
  
    return (
        <>
            <Image
                src={src}
                width={500}
                height={500}
                alt={description}
                priority
                className="block object-cover object-center w-full h-full rounded-lg"
            />
            <section className="absolute px-4 ml-2 rounded-lg bottom-6 backdrop-blur-md bg-cyan-900/30 shadow-white/50">
                <p className="font-semibold text-white ">{name}</p>
            </section>
        </>
    )
}


