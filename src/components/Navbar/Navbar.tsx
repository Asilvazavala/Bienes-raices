import { useEffect, useState } from "react"
import { dataHeader } from "../Header/Header.data"
import { NavbarProps } from "./Navbar.types"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar(props: NavbarProps) {
  const { openMobileMenu, setOpenMobileMenu } = props;
  const [isScrolling, setIsScrolling] = useState(false);

  const router = useRouter();

  const handleScroll = () => {
    window.scrollY >= window.innerHeight - 600
      ? setIsScrolling(true)
      : setIsScrolling(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return() => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])  

  const handleNavigate = (url: string) => {
    router.push(`/${url}`)
    setOpenMobileMenu(false)
  }

  return (
    <AnimatePresence>
      {isScrolling 
        ? (
          <motion.nav
            key={1}
            variants={animationNavbar}
            initial='initial'
            animate='animate'
            exit='exit'
            className="mx-auto md:fixed z-[9999] right-0 left-0 px-6 py-3 text-white bg-gray-400/40 top-5 rounded-3xl backdrop-blur w-fit"
          >

            {/* Menu Scrolling */}
            <div className="items-center hidden gap-5 md:flex">
              {dataHeader.map(({id, name, link}) => (
                <Link 
                  key={id}
                  href={link}
                  className="hover:text-secondary hover:border-b-[1px] hover:border-secondary"
                >
                  {name}
                </Link>
              ))}
              <Link
                href="/"
                className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black"
              >
                Login
              </Link>
            </div>
          </motion.nav>
        )
        : (
          // Menu Principal & Responsive
          <div className={`${
            openMobileMenu
              ? 'block translate-y-0 transition-transform duration-300 absolute left-0 bg-secondary w-full h-screen text-white p-2 top-16 z-[9999] text-3xl'
              : 'max-[500px]:translate-y-full z-0 transition-transform duration-300 lg:translate-y-0 max-[500px]:border-none max-[500px]:text-transparent max-[500px]:absolute left-0 top-16'
            } gap-3 lg:gap-5 md:flex`}
          >
            {dataHeader.map(({ id, name, link}) => (
              <button 
                onClick={() => handleNavigate(link)}
                key={id} 
                className={`block md:hover:text-secondary md:hover:border-b-secondary 
                md:border-b-[1px] mx-auto py-6 md:py-0 w-full md:w-fit
                border-b-gray border-b-[1px] md:border-b-transparent ${openMobileMenu ? '' : 'border-b-transparent'}`}
              >
                {name}
              </button>
            ))}
          </div>
        )}
    </AnimatePresence>
  )
}

const animationNavbar = {
  initial: {
    y: -20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 100,
      damping: 20,
      type: 'spring'
    }
  },
  exit: {
    y: -20,
    opacity: 0
  }
}