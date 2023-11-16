import Image from "next/image";

export function Form() {
  return (
    <section className="px-3">
      <header className="py-4 px-3 rounded-lg shadow-light">
        <article className="flex gap-4">
          <Image 
            src="/assets/comercial.png"
            alt="Comercial"
            width={50}
            height={50}
            className="border-2 rounded-full border-gray"
          />
          <aside>
            <p>Antonio Silva</p>
            <p className="text-secondary font-semibold">Asesor Comercial</p>
          </aside>
        </article>

        <article className="my-5">
          <aside>
            <label htmlFor="name" className="text-sm text-gray">Nombre</label>
            <div className="mt-2">
              <input 
                id="name"
                type="text" 
                name="name"
                className="w-full rounded-md border-0 py-1.5 px-3 text-black shadow-sm ring-1 
                ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm"
              />
            </div>
          </aside>

          <aside className="my-2">
            <label htmlFor="phone" className="text-sm text-gray">Teléfono</label>
            <div className="mt-2">
              <input 
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone" 
                className="w-full rounded-md border-0 py-1.5 px-3 text-black shadow-sm ring-1 
                ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm"
              />
            </div>
          </aside>

          <aside>
            <label htmlFor="description" className="text-sm text-gray">Descripción</label>
            <div className="mt-2">
              <textarea 
                id="description"
                name="description"
                rows={4}
                defaultValue={''}
                className="w-full rounded-md border-0 py-1.5 px-3 text-black shadow-sm ring-1 
                ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm"
              />
            </div>
          </aside>
        </article>

        <div className="flex justify-between gap-5 my-4">
          <button className="bg-secondary px-4 py-2 rounded-lg text-sm hover:bg-black transition hover:text-white">
            Enviar mensaje
          </button>
          <button className="border-[1px] border-secondary text-secondary p-2 rounded-lg text-sm hover:bg-black transition hover:text-white">
            Llamar
          </button>
        </div>

      </header>
    </section>
  )
}
