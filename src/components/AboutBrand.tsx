"use client";
import { motion } from "framer-motion";

const differentiators = [
  "Diseño a la altura y gusto de los niños",
  "Productos seleccionados con criterio de calidad",
  "Una experiencia visual, no solo una tienda",
];

const stats = [
  { value: "+500", label: "familias en Soacha nos eligen", bg: "bg-white", textColor: "text-gray-800", rotate: "rotate-2", position: "top-[15%] right-[5%]" },
  { value: "100%", label: "diseñado para niños de verdad", bg: "bg-amarillo", textColor: "text-gray-800", rotate: "-rotate-2", position: "bottom-[15%] left-[5%]" },
];

export default function AboutBrand() {
  return (
    <section
      id="nosotros"
      className="py-24 bg-[linear-gradient(135deg,_#FAA5AB15_0%,_#84D6DC15_100%)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-rosado font-bold text-sm uppercase tracking-widest mb-3">
              Nuestra historia
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6 leading-tight">
              No somos una<br />
              <span className="text-cian">papelería más.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-4">
              HeyPaper nació con una pregunta simple:{" "}
              <span className="font-bold text-gray-700">¿por qué las papelerías siempre son tan aburridas?</span>{" "}
              Decidimos cambiar eso. Cada estante está a la altura de los niños.
              Cada producto fue elegido pensando en ellos.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Estamos en el corazón de Soacha porque creemos que las familias de acá merecen
              un espacio donde comprar útiles escolares sea, también,{" "}
              <span className="font-bold text-gray-700">una experiencia.</span>
            </p>

            {/* Lista diferenciadores */}
            <ul className="space-y-3 mb-10">
              {differentiators.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-cian flex items-center justify-center text-white text-xs font-black mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 font-semibold">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border-2 border-cian text-cian font-black px-7 py-3.5 rounded-2xl hover:bg-cian hover:text-white transition-all duration-200 group"
            >
              Visítanos en Soacha
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Columna stats visuales */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center h-80 lg:h-96"
          >
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-cian/10 to-rosado/10 rounded-3xl" />

            {/* Emoji central */}
            <div className="absolute text-9xl animate-float opacity-30">🏪</div>

            {/* Stat cards */}
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className={`absolute ${stat.bg} rounded-3xl shadow-xl p-6 w-52 ${stat.rotate} border border-white/60 ${stat.position}`}
              >
                <p className={`text-4xl font-black ${stat.textColor} mb-1`}>{stat.value}</p>
                <p className="text-gray-600 text-sm font-semibold leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
