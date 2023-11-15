import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <section className="container relative mx-auto px-8">
      <article className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-5xl font-semibold">Encuentra la vivienda ideal para tu familia en México</h2>
          <p className="mt-2 text-xl md:mt-8">Con más de 30 años de experiencia, en bienes raíces contamos con los mejores profesionales para lo que necesitas</p>
        </div>
        <FloatedSearch />
      </article>
    </section>
  )
}
