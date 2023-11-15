import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

export function SearchProperty() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section 
      className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrHome />

      <article>
        <p>Propiedad</p>
        <p className='text-xs'>Selecciona el tipo de propiedad</p>
      </article>

      {isOpen ? <GrFormUp />: <GrFormDown />}
      {isOpen && (
        <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0'>
          <p>Casa</p>
          <p>Departamento</p>
          <p>Chalet</p>
        </div>
      )}
    </section>
  )
}