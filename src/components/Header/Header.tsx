"use client";

import { CiMenuFries } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from '../Navbar';

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <section className="container mx-auto my-5">
      <article className="flex items-center justify-between px-5 md:px-0">
        <Link href="/">
          <h1 className='font-medium'>Bienes Raíces</h1>
        </Link>

        <CiMenuFries 
          className="block text-2xl md:hidden" 
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        />

        <Navbar openMobileMenu={openMobileMenu} />

        <article className='flex items-center gap-2 md:gap-5'>
          <Link href="tel:1234567890" className='flex items-center gap-4 cursor-pointer'>
            <BsTelephone />
            <span className='hidden md:block'>+52 123 456 7890</span>
          </Link>
          <Link href="/Login" className='px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black'>
            Login
          </Link>
        </article>
      </article>
    </section>
  )
}
