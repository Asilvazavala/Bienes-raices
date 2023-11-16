"use client"

import Image from "next/image";
import { Transition } from "../Transition"
import Link from 'next/link';
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from 'react-icons/lia';
import { formatPrice } from "@/utils/formatPrice";
import { useState } from 'react';
import { useProperties } from '../../hooks/PropertiesContext';
import { FaTrash } from "react-icons/fa";
import { dataProperties } from '../Properties/Properties.data';

export function Properties() {
	const { properties, filters, setFilters, setProperties } = useProperties();

	const [counterHouses, setCounterHouses] = useState(8);
	const dataFilteredHouses = properties.slice(0, counterHouses)

	const loadMoreHouses = () => {
		setCounterHouses(counterHouses + 4)
	}	

	const currentFilters = Object.values(filters).filter(filter => filter !== null)	

	const deleteFilters = () => {
		setFilters({
			location: null,
			propertyType: null,
			price: null,
		});

		setProperties(dataProperties)
	}

	return (
		<Transition className={`px-4 my-8 md:py-32 md:px-40 
		${currentFilters.length > 0 && dataFilteredHouses.length === 0 ? 'mb-24 lg:mb-0' : ''}`}>
			
			<main id="properties" className={`grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 relative 
			mt-10 md:mt-0 `}>
			{currentFilters.length > 0 && 
				<span className="text-gray font-semibold absolute -z-10 -top-8 lg:-top-14 left-0
				max-w-[70%] text-sm">
					Resultados de {`"${currentFilters.join(', ')}"`}
				</span>
			}
			
			{currentFilters.length > 0 && dataFilteredHouses.length === 0 &&
				<span className="text-red-700 bg-red-300 p-2 rounded-full font-semibold absolute 
				-z-10 top-12 lg:top-0 left-0">
					¡UPS! No hay propiedades con estas características
				</span>
			}

			{currentFilters.length > 0 &&
				<button 
					onClick={deleteFilters}
					className="absolute -top-8 text-sm lg:-top-20 right-0 flex items-center justify-between p-1 lg:py-3 lg:px-4 
				text-white transition-all duration-100 bg-red-500 rounded-md lg:rounded-lg w-20 lg:w-fit hover:bg-red-500/70">
				 <FaTrash/>
				 <span className="lg:ml-3">Borrar filtros</span>
			 </button>
			}

				{dataFilteredHouses.map(({id, location, price, bedrooms, bathroom, image, star, meters}) => (
					<Link 
						key={id}
						href={`/properties/${id}`}
						className={`shadow-light hover:shadow-xl rounded-2xl transition duration-300 
						cursor-pointer ${currentFilters.length > 0 ? 'mt-10 lg:mt-0' : ''}`}
					>
						<article className={`relative -z-10`}>
							<figure className="relative">
								<div className="absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary">
									<LiaStarSolid />
									<span className="ml-1 font-semibold">{star}</span>
								</div>

								<Image 
									src={`/assets/properties/${image}`}
									alt="location"
									width={150}
									height={150}
									className="object-cover w-full max-h-full h-[200px] rounded-t-2xl"
								/>

								<footer className="px-3 py-5">
									<p className="text-gray">{location}</p>
									<p className="font-semibold">{formatPrice(price)}</p>
									<div className="gap-4 mt-2 xl:flex">
										<div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 lg:my-0 bg-slate-300/30">
											<LiaBedSolid />
											<span className="ml-2">{bedrooms}</span>
											<span className="lg:hidden block ml-1 text-gray max-[340px]:truncate">{bedrooms > 1 ? 'Habitaciones' : 'Habitación'}</span>
										</div>
										<div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 lg:my-0 bg-slate-300/30">
											<LiaBathSolid />
											<span className="ml-2">{bathroom}</span>
											<span className="lg:hidden block ml-1 text-gray">{bathroom > 1 ? 'Baños' : 'Baño'}</span>
										</div>
										<div className="flex items-center justify-center px-2 py-1 rounded-lg my-2 lg:my-0 bg-slate-300/30">
											<LiaRulerCombinedSolid />
											<span className="ml-2">{meters}</span>
											<span className="lg:hidden block ml-1 text-gray">Metros</span>
										</div>
									</div>
								</footer>
							</figure>
						</article>
					</Link>
				))}
			</main>
			<div className="text-center my-7">
				{counterHouses < properties.length && (
					<button 
						onClick={loadMoreHouses}
						className="p-4 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black">
						Ver más viviendas
					</button>
				)}
			</div>
		</Transition>
	)
}
