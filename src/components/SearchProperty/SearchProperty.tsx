import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";
import { useProperties }from '../../hooks/PropertiesContext';
import { dataProperties } from "../Properties/Properties.data"

export function SearchProperty() {
  const { setProperties, setFilters } = useProperties();

  const [isOpen, setIsOpen] = useState(false)

  const uniqueStates = new Set();

  const deleteDuplicatedTypeProperties = dataProperties.filter(obj => {
    if (!uniqueStates.has(obj.propertyType)) {
      uniqueStates.add(obj.propertyType);
      return true;
    }
    return false;
  });

  const orderedTypeProperties = deleteDuplicatedTypeProperties.sort((a, b) => a.propertyType.localeCompare(b.state));

  const handlePropertyType = (propertyType: string) => {
    const filteredProperties = dataProperties.filter(property => property.propertyType === propertyType);
    setProperties(filteredProperties);

    setFilters(prevFilters => ({
      ...prevFilters,
      propertyType: propertyType,
    }));
  };

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
        <div className='absolute top-[70px] bg-neutral-100 z-50 p-4 rounded-lg shadow-light w-[230px] left-0'>
          {orderedTypeProperties.map(({id, propertyType}) => (
            <p 
              key={id}
              className='hover:bg-secondary/30 transition z-[9999]'
              onClick={() => handlePropertyType(propertyType)}
            >
              {propertyType}
            </p>
          ))}
        </div>
      )}
    </section>
  )
}