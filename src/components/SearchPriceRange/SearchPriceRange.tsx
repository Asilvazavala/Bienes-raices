import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";
import { useProperties }from '../../hooks/PropertiesContext';
import { formatPrice } from "@/utils/formatPrice";

export function SearchPriceRange() {
  const { applyFilters } = useProperties();

  const [isOpen, setIsOpen] = useState(false)

  const handlePrice = (range1: number, range2: number) => {
    const formatedRange1 = formatPrice(range1);
    const formatedRange2 = formatPrice(range2);

    applyFilters({
      price: `${formatedRange1} - ${formatedRange2}`
    });
  };

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
        <div className='absolute top-[70px] bg-neutral-100 z-50 p-4 rounded-lg shadow-light w-[230px] left-0'>
          <p className='hover:bg-secondary/30 transition z-[9999]' onClick={() => handlePrice(100000,400000)}>$100,000 - $400,000</p>
          <p className='hover:bg-secondary/30 transition z-[9999]' onClick={() => handlePrice(400000,700000)}>$400,000 - $700,000</p>
          <p className='hover:bg-secondary/30 transition z-[9999]' onClick={() => handlePrice(700000,1000000)}>$700,000 - $1,000,000</p>
          <p className='hover:bg-secondary/30 transition z-[9999]' onClick={() => handlePrice(1000000,2000000)}>$1,000,000 o más </p>
        </div>
      )}
    </section>
  )
}
