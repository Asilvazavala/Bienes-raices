'use client';

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import ToastProvider from '../../../providers/toastProvider';
import { useEffect, useState } from 'react';

interface FormValues {
  name: string;
  phone: string;
  description: string;
}

export function Form() {
  const { Toaster, notifySucess, notifyWarning } = ToastProvider();
  const pathname = usePathname()

  const [returnPage, setReturnPage] = useState('');
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    phone: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = () => {
    if (formValues.name.trim() !== '' && 
        formValues.phone.trim() !== '' && 
        formValues.description.trim() !== '') {
      notifySucess();
    } else {
      notifyWarning();
    }
  };

  useEffect(() => {
    setReturnPage(`https://as-bienes-raices.vercel.app${pathname}`)
  }, [pathname])

  return (
    <section className="px-3">
      <Toaster />
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

        <form className="mt-5" action="https://formsubmit.co/c985d2a549f57e35c2cc0011b290fe39" method="POST">
          <aside>
            <label htmlFor="name" className="text-sm text-gray">Nombre</label>
            <div className="mt-2">
              <input 
                id="name"
                type="text" 
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
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
                value={formValues.phone}
                onChange={handleChange}
                type="number"  
                pattern="[0-9]*"
                required
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
                value={formValues.description}
                onChange={handleChange}
                rows={4}
                required
                defaultValue={''}
                className="w-full rounded-md border-0 py-1.5 px-3 text-black shadow-sm ring-1 
                ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm"
              />
            </div>
          </aside>

          <input type="hidden" name="_next" value={returnPage} />
          <input type="hidden" name="_captcha" value="false" />

          <div className="flex justify-between gap-5 mt-4 mb-2">
            <button 
              onClick={handleSubmit}
              type="submit"
              className="bg-secondary px-4 py-2 rounded-lg text-sm lg:hover:bg-secondary/70 transition">
              Enviar mensaje
            </button>
            <Link 
              target="_blank"
              rel="noopener"
              href="tel:4561148433" 
              className='cursor-pointer border-[1px] border-secondary 
              text-secondary p-2 rounded-lg text-sm lg:hover:bg-secondary/30 transition'>
              Llamar
            </Link>
          </div>


        </form>

      </header>
    </section>
  )
}
