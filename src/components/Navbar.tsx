import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
        }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <button
          onClick={() => scrollTo("work")}
          className="font-display text-xl md:text-2xl tracking-editorial font-bold"
        >
          VISHNU.
        </button>
        <div className="flex gap-8 md:gap-12 text-xs font-medium tracking-wide-xl uppercase">
          <button onClick={() => scrollTo("work")} className="hover:opacity-50 transition-opacity">
            Work
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:opacity-50 transition-opacity">
            Contact
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
