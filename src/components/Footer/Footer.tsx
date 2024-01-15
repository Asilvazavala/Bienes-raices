import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import Link from 'next/link';

export function Footer() {
  return (
    <section className='px-4 py-8 bg-black/90 md:py-40 md:px-36'>
      <article className='grid gap-8 text-center grid-cols-1 md:grid-cols-[1fr,1fr,_400px] text-white'>
        {dataFooter.map(({id, links}) => (
          <div key={id}>
            {links.map(({id, name, link}) => (
              <Link
                key={id}
                href={link}
                className='block mb-5 hover:underline transition'
              >
                {name}
              </Link>
            ))}
          </div>
        ))}
        <aside className='lg:text-right'>
          <h4 className='mb-6 text-xl font-semibold'>Bienes raíces</h4>
          <p>Calle Juárez, 25</p>
          <p>Guanajuato, México</p>
          <div className='flex gap-4 mt-5 lg:justify-end justify-center'>
            <Link href="https://instagram.com" target='_blank' rel='noopener'><LiaInstagram className="text-3xl cursor-pointer transition hover:text-purple-500" /></Link>
            <Link href="https://www.linkedin.com/in/antonio-silva-developer/" target='_blank' rel='noopener'><LiaLinkedinIn className="text-3xl cursor-pointer transition hover:text-blue-500" /></Link>
            <Link href="https://www.pinterest.com.mx/" target='_blank' rel='noopener'><LiaPinterestP className="text-3xl cursor-pointer transition hover:text-red-300" /></Link>
            <Link href="https://youtube.com" target='_blank' rel='noopener'><LiaYoutube className="text-3xl cursor-pointer transition hover:text-red-500" /></Link>
          </div>
        </aside>
      </article>
    </section>
  )
}
