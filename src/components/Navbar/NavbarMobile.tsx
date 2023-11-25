import { IoClose } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
import { CiMenuFries } from 'react-icons/ci';
import { IoIosPeople } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHouseChimneyUser } from "react-icons/fa6";

export default function NavbarMobile() {  
  const menuItems = [
    {
      name: 'INICIO',
      href: '/',
      icon: <TiContacts />
    },
    {
      name: 'SOBRE NOSOTROS',
      href: '#about',
      icon: <IoIosPeople />
    },
    {
      name: 'SERVICIOS',
      href: '#services',
      icon: <FaUserCheck />
    },
    {
      name: 'LOCALIZACIÓN',
      href: '#location',
      icon: <FaMapMarkerAlt />
    },
    {
      name: 'PROPIEDADES',
      href: '#properties',
      icon: <FaHouseChimneyUser />
    }
  ]

  const handleLinkClick = () => {
    const menuMobile = document.getElementById('menuMobile') as HTMLInputElement | null;

    if (menuMobile) {
      menuMobile.checked = !menuMobile.checked;
    }
  };
  
  return (
    <nav className="md:hidden ml-8">
    <label htmlFor="menuMobile">
      <input type='checkbox' id='menuMobile' className='hidden peer' />
      <CiMenuFries className='h-8 w-8 peer-checked:scale-0 absolute top-5 right-5 z-0
      transition duration-700 delay-100 peer-checked:delay-0' />
      <IoClose className='h-8 w-8 scale-0 text-black peer-checked:block z-[70] 
      peer-checked:scale-100 absolute top-5 right-5 transition duration-700 delay-0 peer-checked:delay-100' />
      
      <ul className='z-[60] translate-x-[-150%] w-full absolute right-0 top-0 transition duration-700 
      pt-24 flex flex-col gap-y-8 bg-gradient-to-r from-secondary to-green-800 
      peer-checked:translate-x-0 overflow-auto h-screen'>
        {menuItems.map(item => (
          <li key={item.name} className="flex justify-between w-full text-3xl py-2
          border-gray-300 border-b px-8">
            <a onClick={handleLinkClick} href={item.href} className={`w-full text-white flex 
              justify-between items-center font-semibold`}
            >
              {item.name}
              <span className="text-white">{item.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </label>
  </nav>
  )
}