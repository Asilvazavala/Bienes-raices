"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"
import Link from 'next/link';

export function Services() {
  return (
    <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
      <article className="max-w-xl mb-7">
        <h4 id="services" className="text-secondary">Servicios</h4>
        <h2 className="my-4 text-3xl font-semibold">Promociona tu vivienda para alquilarla o venderla al mejor precio.</h2>
        <p className="mb-10 mt-7 ">Contactáme para ayudarte con tu propiedad y sacarle el mejor provecho.</p>
        <Link
          href="tel:4561148433" 
          className="px-4 py-3 text-white transition duration-200 rounded-lg bg-secondary lg:hover:bg-secondary/70">
          Llamar
        </Link>
      </article>

      <article className="flex items-center justify-center">
        <Slider />
      </article>
    </Transition>
  )
}
