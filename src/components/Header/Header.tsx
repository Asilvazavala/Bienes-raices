"use client";

import { BsTelephone } from 'react-icons/bs';
import Link from 'next/link';
import { Navbar } from '../Navbar';
import { BsBuildings } from "react-icons/bs";
import NavbarMobile from '../Navbar/NavbarMobile';

export function Header() {

  return (
    <section className="container mx-auto my-5 lg:px-8">
      <article className="flex items-center justify-between px-5 md:px-0">
        <Link href="/">
          <BsBuildings className="text-2xl w-6 h-6" />
        </Link>

        <div className='hidden md:flex'>
          <Navbar />
        </div>

        <article className='flex items-center gap-2 md:gap-5'>
          <Link href="tel:1234567890" className='flex items-center gap-4 cursor-pointer'>
            <BsTelephone className="text-gray w-5 h-5" />
            <span className='hidden md:block'>+52 123 456 7890</span>
          </Link>
          <Link href="/" className='mr-1 lg:mr-0 py-1 px-2 lg:px-3 lg:py-2 text-white rounded-lg bg-secondary
           hover:bg-black'>
            Login
          </Link>

          <nav
          className="block text-2xl md:hidden w-fit" 
        >
          <NavbarMobile />
        </nav>

        </article>
      </article>
    </section>
  )
}
