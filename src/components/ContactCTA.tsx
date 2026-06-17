"use client";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section id="contacto" className="py-24 bg-cian relative overflow-hidden">
      {/* Decoración fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-6xl mb-6 animate-wiggle inline-block">👋</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            ¿Listo para visitar la tienda<br />
            más divertida de Soacha?
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Estamos en el Piso 1, Calle 32 # 7A-Este-09.
            Ven a conocernos — los niños ya saben el camino.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:3224151140"
              className="inline-flex items-center justify-center gap-2 bg-white text-cian font-black text-lg px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              📞 Llámanos ahora
            </a>
            <a
              href="https://instagram.com/hey_paper_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-black text-lg px-8 py-4 rounded-2xl hover:bg-white hover:text-cian transition-all duration-200"
            >
              📸 Síguenos en Instagram
            </a>
          </div>

          <p className="text-white/60 text-sm">
            contacto@heypaper.org · www.heypaper.org
          </p>
        </motion.div>
      </div>
    </section>
  );
}
