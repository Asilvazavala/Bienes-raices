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
          <div className={`${openMobileMenu ? 'absolute z-[1] left-0 bg-secondary w-full text-white p-2 top-16' : 'hidden'} gap-3 lg:gap-5 md:flex`}>
            {dataHeader.map(({ id, name, link}) => (
              <button 
                onClick={() => handleNavigate(link)}
                key={id} 
                className="block lg:hover:text-secondary lg:hover:border-b-secondary lg:border-b-[1px] lg:border-b-transparent mx-auto my-2"
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