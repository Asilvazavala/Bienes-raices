import { useEffect, useState } from "react"
import { dataHeader } from "../Header/Header.data"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const router = useRouter();

  const handleScroll = () => {
    window.scrollY >= window.innerHeight 
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
            className="mx-auto md:fixed z-[9999] right-0 left-0 px-6 py-3 text-gray/80 bg-black/10 
            top-5 rounded-3xl backdrop-blur w-fit"
          >

            {/* Menu Scrolling */}
            <div className="items-center hidden gap-5 md:flex">
              {dataHeader.map(({id, name, link}) => (
                <Link 
                  key={id}
                  href={link}
                  className="hover:text-secondary text-black hover:border-b-[1px] hover:border-secondary"
                >
                  {name}
                </Link>
              ))}
             {/* <Link
                href="/"
                className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black"
              >
                Login
              </Link>*/}
            </div>
          </motion.nav>
        )
        : (
          // Menu Principal & Responsive
          <div className='z-0 gap-5 flex duration-500 '
          >
            {dataHeader.map(({ id, name, link}) => (
              <button 
                onClick={() => handleNavigate(link)}
                key={id} 
                className='block md:hover:text-secondary md:hover:border-b-secondary 
                md:border-b-[1px] mx-auto py-6 md:py-0 w-full md:w-fit
                border-b-gray border-b-[1px] md:border-b-transparent  border-b-transparent'
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