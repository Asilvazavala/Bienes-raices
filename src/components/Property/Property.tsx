import { formatPrice } from "@/utils/formatPrice";
import { PropertyProps } from "./Property.types";
import { LiaBathSolid, LiaBedSolid, LiaRulerCombinedSolid, LiaStarSolid } from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
import { Form } from "../Form";

export function Property(props: PropertyProps) {
  const { house } = props;

  return (
    <main className="max-w-5xl mx-auto">
      <section className="grid md:grid-cols-[70%,1fr] my-3 py-5">
        <article className="px-6">
          <h1 className="text-3xl mb-4 text-secondary flex justify-between">
            <span>Casa {house.id}</span>
            <span className="font-semibold">{formatPrice(house.price)}</span>
          </h1>
          
          <aside className="flex gap-5 my-4">
            <h2 className="flex gap-3 text-3xl items-center">
              <TfiLocationPin />
              {house.location}
            </h2>
            
            <div className="flex items-center px-2 py-1 rounded-lg bg-secondary text-white h-10 w-16">
              <LiaStarSolid />
              <span className="ml-1 font-semibold">{house.star}</span>
            </div>
          </aside>

          <Image 
            src={`/assets/properties/${house.image}`}
            alt={`Casa en ${house.location}`}
            width={800}
            height={800}
            className="md:w-[700px] lg:h-[600px] w-full h-[400px] rounded-2xl bg-cover"
            priority
          />
          <div className="gap-4 lg:flex mt-4">
            <div className="flex items-center justify-center px-2 py-1 rounded-lg my-1 bg-slate-300/50">
              <LiaBedSolid />
              <span className="ml-2">{house.bedrooms}</span>
              <span className="lg:hidden block ml-1 text-gray">{house.bedrooms > 1 ? 'Habitaciones' : 'Habitación'}</span>
            </div>

            <div className="flex items-center justify-center px-2 py-1 rounded-lg my-1 bg-slate-300/50">
              <LiaBathSolid />
              <span className="ml-2">{house.bathroom}</span>
              <span className="lg:hidden block ml-1 text-gray">{house.bathroom > 1 ? 'Baños' : 'Baño'}</span>
            </div>

            <div className="flex items-center justify-center px-2 py-1 rounded-lg my-1 bg-slate-300/50">
              <LiaRulerCombinedSolid />
              <span className="ml-2">{house.meters}</span>
              <span className="lg:hidden block ml-1 text-gray">Metros</span>
            </div>
          </div>

          <div className="my-3">{house.description}</div>
        </article>
        <Form />
      </section>
    </main>
  )
}
