"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Categorías", href: "#categorias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-crema/95 backdrop-blur-md shadow-sm border-b border-amarillo/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-rosado rounded-xl flex items-center justify-center text-white text-sm font-black transition-transform group-hover:rotate-12 duration-300">
            ✏️
          </div>
          <span className="text-2xl font-black tracking-tight">
            <span className="text-amarillo drop-shadow-[0_0_8px_rgba(255,228,102,0.4)]">Hey</span>
            <span className="text-cian">Paper</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-gray-600 rounded-full hover:text-cian hover:bg-cian/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="tel:3224151140"
          className="hidden md:flex items-center gap-2 bg-rosado text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-rosado/80 hover:scale-105 transition-all duration-200 shadow-md shadow-rosado/20"
        >
          <span>📞</span> Llámanos
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-cian/10 transition-colors"
          aria-label="Menú"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-700 block rounded-full transition-all"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-gray-700 block rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gray-700 block rounded-full transition-all"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-crema border-t border-amarillo/30 px-6 pb-4 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-semibold text-gray-700 border-b border-gray-100 hover:text-cian transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="tel:3224151140"
              className="mt-4 flex items-center justify-center gap-2 bg-rosado text-white font-bold py-3 rounded-2xl"
            >
              📞 Llámanos ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
