import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'
import { dataProperties } from "../Properties/Properties.data"
import { useProperties }from '../../hooks/PropertiesContext';

export function SearchLocation() {
  const { filters, applyFilters} = useProperties();

  const [isOpen, setIsOpen] = useState(false)
  const uniqueStates = new Set();

  const deleteDuplicatedStates = dataProperties.filter(obj => {
    if (!uniqueStates.has(obj.state)) {
      uniqueStates.add(obj.state);
      return true;
    }
    return false;
  });

  const orderedStates = deleteDuplicatedStates.sort((a, b) => a.state.localeCompare(b.state));


  const handleLocation = (location: string) => {
    applyFilters({ location: location === filters.location ? null : location });
  };

  return (
    <section 
      className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 
      justify-between cursor-pointer z-50'
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrLocation />

      <article>
        <p>Localización</p>
        <p className='text-xs'>Selecciona tu localización</p>
      </article>

      {isOpen ? <GrFormUp />: <GrFormDown />}
      {isOpen && (
        <div className='absolute top-[70px] bg-white p-4 rounded-lg shadow-light w-[200px] left-0 z-50'>
          {orderedStates.map(({id, state}) => (
            <div 
              key={id}
              className='hover:bg-secondary/30 transition z-50'
              onClick={() => handleLocation(state)}
            >
              {state}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
