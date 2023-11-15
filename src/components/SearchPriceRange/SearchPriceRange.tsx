import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section 
      className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrTag />

      <article>
        <p>Rango de precios</p>
        <p className='text-xs'>Selecciona el rango de precios</p>
      </article>

      {isOpen ? <GrFormUp />: <GrFormDown />}
      {isOpen && (
        <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0'>
          <p>Cualquier rango</p>
          <p>$100,000 - $400,000</p>
          <p>$400,000 - $700,000</p>
          <p>$700,000 - $1,000,000</p>
          <p>$1,000,000 en adelante </p>
        </div>
      )}
    </section>
  )
}
