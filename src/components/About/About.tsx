import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
  return (
    <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
      <article 
        className="flex flex-col items-center justify-center max-w-xl mb-7"
        id="about"
      >
        <h4 className="text-secondary">Sobre nosotros</h4>
        <h2 className="my-4 text-3xl font-semibold">Más de 1000 viviendas para vender y comprar en México</h2>
        <p className="mb-10 mt-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore debitis repellendus praesentium quaerat id accusamus nemo deleniti modi autem similique a possimus, consequuntur impedit enim commodi voluptatem illo, doloribus eum!</p>
      </article>

      <article className="flex items-center justify-center">
        <Image 
          src="/assets/house.jpeg"
          alt="About"
          width={350}
          height={450}
          className="w-auto h-auto"
          priority
        />
      </article>
    </Transition>
  )
}
