import { useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Container from "../components/Container"
import Link from "../components/Link"
import Logo from "../components/Logo"
import Button from "../components/Button"
import ThemeToggle from "../components/Theme-Toggle"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuBtn = useRef(null);

  return (
    <Container className="border-b flex items-center justify-between pb-4">
      <Logo />
      
      {/* Desktop Nav */}
      <div className="items-center gap-6 hidden md:flex">
        <nav>
          <ul className="flex items-center gap-6">
            <li><Link>Services</Link></li>
            <li><Link>Work</Link></li>
            <li><Link>Studio</Link></li>
            <li><Link>Blog</Link></li>
          </ul>
        </nav>
        <Button className="uppercase text-lg font-accent">let's talk</Button>
        <div className="gap-2 flex items-center border-l border-r px-6">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border p-2 uppercase leading-none">in</span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border p-2 uppercase leading-none">pi</span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border p-2 uppercase leading-none">tw</span>
        </div>
        <ThemeToggle />
      </div>

      {/* Mobile Nav & Toggle */}
      <div className="md:hidden flex items-center gap-4 relative">
        <ThemeToggle />
        
        {/* Animated Hamburger to Cross */}
        <button 
          ref={menuBtn} 
          onClick={() => setIsOpen((prev) => !prev)} 
          className="flex flex-col justify-center items-center gap-1.5 w-8 h-8 relative z-50"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 2.5 } : { rotate: 0, y: 0 }}
            className="w-6 h-px inline-block bg-(--foreground)"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-6 h-px inline-block bg-(--foreground)"
          />
        </button>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-12 -left-52 z-10 bg-background w-[80vw] max-w-xs border p-4 shadow-xl"
            >
              <ul className="w-full flex flex-col items-stretch gap-4">
                <li className="w-full text-foreground border-b pb-2"><Link>Services</Link></li>
                <li className="w-full text-foreground border-b pb-2"><Link>Work</Link></li>
                <li className="w-full text-foreground border-b pb-2"><Link>Studio</Link></li>
                <li className="w-full text-foreground border-b pb-2"><Link>Blog</Link></li>
                <li className="w-full pt-2">
                  <Button className="w-full uppercase font-accent text-sm">let's talk</Button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </Container>
  )
}

export default Header