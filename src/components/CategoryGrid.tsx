"use client";
import { motion } from "framer-motion";

const categories = [
  {
    id: "cuadernos",
    emoji: "📓",
    title: "Cuadernos y Libretas",
    description: "Para las grandes ideas de las mentes pequeñas",
    bg: "bg-cian/20",
    border: "border-cian/30",
    hover: "hover:bg-cian/30",
    accent: "text-teal-700",
  },
  {
    id: "colores",
    emoji: "🎨",
    title: "Colores y Marcadores",
    description: "El arcoíris que cabe en su mochila",
    bg: "bg-rosado/20",
    border: "border-rosado/30",
    hover: "hover:bg-rosado/30",
    accent: "text-pink-700",
  },
  {
    id: "mochilas",
    emoji: "🎒",
    title: "Mochilas y Loncheras",
    description: "Listos para conquistar el colegio",
    bg: "bg-amarillo/30",
    border: "border-amarillo/40",
    hover: "hover:bg-amarillo/50",
    accent: "text-yellow-700",
  },
  {
    id: "manualidades",
    emoji: "✂️",
    title: "Manualidades",
    description: "Crear, cortar, pegar y sorprender",
    bg: "bg-cian/20",
    border: "border-cian/30",
    hover: "hover:bg-cian/30",
    accent: "text-teal-700",
  },
  {
    id: "stickers",
    emoji: "⭐",
    title: "Stickers y Decoración",
    description: "Porque cada cuaderno merece su historia",
    bg: "bg-rosado/20",
    border: "border-rosado/30",
    hover: "hover:bg-rosado/30",
    accent: "text-pink-700",
  },
  {
    id: "regreso",
    emoji: "🏫",
    title: "Regreso a Clases",
    description: "Todo listo para el primer día",
    bg: "bg-amarillo/30",
    border: "border-amarillo/40",
    hover: "hover:bg-amarillo/50",
    accent: "text-yellow-700",
  },
];

export default function CategoryGrid() {
  return (
    <section id="categorias" className="py-24 bg-crema">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-amarillo/40 text-yellow-800 font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            🛍️ Nuestras categorías
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            ¿Qué vas a encontrar?
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Todo lo que un niño necesita para conquistar el cole, en un solo lugar.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group cursor-pointer rounded-3xl p-6 md:p-8 border-2 ${cat.bg} ${cat.border} ${cat.hover} transition-all duration-300 shadow-sm hover:shadow-xl`}
            >
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 block">
                {cat.emoji}
              </div>
              <h3 className={`text-lg md:text-xl font-black ${cat.accent} mb-2 leading-tight`}>
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-snug">
                {cat.description}
              </p>
              <div className={`mt-4 text-sm font-bold ${cat.accent} opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                Ver más <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
