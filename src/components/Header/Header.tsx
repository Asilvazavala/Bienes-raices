"use client";

import { CiMenuFries } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';
import { Navbar } from '../Navbar';
import { BsBuildings } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <section className="container mx-auto my-5 lg:px-8">
      <article className="flex items-center justify-between px-5 md:px-0">
        <Link href="/">
          <BsBuildings className="text-2xl" />
        </Link>

        <nav
          className="block text-2xl md:hidden" 
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          {openMobileMenu 
            ? <IoClose className="text-gray text-3xl" />
            : <CiMenuFries />
          }
        </nav>

        <Navbar openMobileMenu={openMobileMenu} setOpenMobileMenu={setOpenMobileMenu} />

        <article className='flex items-center gap-2 md:gap-5'>
          <Link href="tel:1234567890" className='flex items-center gap-4 cursor-pointer'>
            <BsTelephone />
            <span className='hidden md:block'>+52 123 456 7890</span>
          </Link>
          <Link href="/" className='px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black'>
            Login
          </Link>
        </article>
      </article>
    </section>
  )
}
