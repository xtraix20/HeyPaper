"use client";
import { motion } from "framer-motion";

const trustItems = [
  { icon: "📍", text: "Tienda física en Soacha" },
  { icon: "🎨", text: "Diseño a la altura de los niños" },
  { icon: "⭐", text: "Calidad garantizada" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-crema pt-16">

      {/* Formas decorativas flotantes — fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-20 right-[8%] w-40 h-40 rounded-full bg-cian/20 blur-sm" />
        <div className="animate-float-delayed absolute top-40 right-[20%] w-24 h-24 rounded-full bg-amarillo/40" />
        <div className="animate-float-slow absolute bottom-32 right-[12%] w-52 h-52 rounded-full bg-rosado/15 blur-md" />
        <div className="animate-float absolute top-[55%] right-[5%] w-16 h-16 rounded-2xl bg-amarillo/50 rotate-12" />
        <div className="animate-float-delayed absolute bottom-20 left-[5%] w-20 h-20 rounded-full bg-cian/25" />
        <div className="animate-float-slow absolute top-32 left-[2%] w-12 h-12 rounded-xl bg-rosado/30 rotate-45" />

        {/* Elementos emoji flotantes */}
        <div className="animate-wiggle absolute top-28 right-[35%] text-4xl opacity-60 hidden lg:block">✏️</div>
        <div className="animate-float-delayed absolute top-52 right-[28%] text-3xl opacity-50 hidden lg:block">🎨</div>
        <div className="animate-float absolute bottom-40 right-[30%] text-3xl opacity-40 hidden lg:block">📚</div>
        <div className="animate-float-slow absolute top-44 left-[12%] text-2xl opacity-40 hidden lg:block">⭐</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda — texto */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 bg-amarillo/40 text-yellow-800 font-bold text-sm px-4 py-2 rounded-full mb-6 border border-amarillo/60"
          >
            <span className="animate-wiggle inline-block">✨</span>
            Papelería para niños curiosos · Soacha, Colombia
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-gray-800 mb-6"
          >
            Donde aprender
            <br />
            se siente como{" "}
            <span className="text-cian inline-block -rotate-2">
              jugar
            </span>{" "}
            <span className="animate-wiggle inline-block">🎉</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl text-gray-500 leading-relaxed max-w-lg mb-6"
          >
            Cuadernos, colores y todo lo que necesitan para que el cole sea su lugar favorito.
            <span className="font-bold text-gray-700"> Diseñado a su altura. Para las familias de Soacha.</span>
          </motion.p>

          {/* Trust strip */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {trustItems.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-1.5 bg-white/70 border border-gray-200 text-gray-600 text-sm font-semibold px-3 py-1.5 rounded-full"
              >
                <span>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <a
              href="#categorias"
              className="group inline-flex items-center gap-2 bg-rosado text-white font-black text-lg px-8 py-4 rounded-2xl hover:bg-rosado/85 hover:scale-105 hover:shadow-xl hover:shadow-rosado/30 transition-all duration-200"
            >
              Descubre la tienda
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="tel:3224151140"
              className="inline-flex items-center gap-2 text-gray-500 font-semibold hover:text-cian transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-cian/15 flex items-center justify-center text-cian">📞</span>
              322-4151140
            </a>
          </motion.div>
        </motion.div>

        {/* Columna derecha — ilustración visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex relative h-[520px] items-center justify-center"
        >
          {/* Tarjeta central grande */}
          <div className="absolute w-72 h-80 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center justify-center gap-4 p-8 -rotate-3">
            <div className="text-8xl">🎒</div>
            <p className="text-center font-black text-gray-700 text-xl leading-tight">Todo para el cole<br/>en un solo lugar</p>
            <div className="flex gap-2">
              {["bg-cian","bg-rosado","bg-amarillo"].map((c) => (
                <div key={c} className={`w-4 h-4 rounded-full ${c}`} />
              ))}
            </div>
          </div>

          {/* Tarjeta cian — arriba derecha */}
          <div className="animate-float absolute top-8 right-4 bg-cian rounded-2xl p-4 shadow-lg rotate-[5deg]">
            <div className="text-4xl mb-1">✏️</div>
            <p className="text-white font-bold text-sm">Cuadernos</p>
          </div>

          {/* Tarjeta amarilla — abajo izquierda */}
          <div className="animate-float-delayed absolute bottom-16 left-0 bg-amarillo rounded-2xl p-4 shadow-lg rotate-[-4deg]">
            <div className="text-4xl mb-1">🎨</div>
            <p className="text-gray-800 font-bold text-sm">Colores</p>
          </div>

          {/* Badge flotante */}
          <div className="animate-float-slow absolute top-20 left-8 bg-rosado text-white rounded-2xl px-4 py-3 shadow-lg rotate-3">
            <p className="font-black text-sm">+500 familias</p>
            <p className="text-white/80 text-xs">nos eligen 💛</p>
          </div>

          {/* Stars badge */}
          <div className="animate-float absolute bottom-8 right-8 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
            <div className="flex gap-0.5 text-amarillo text-lg mb-1">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 font-semibold text-xs">Calidad garantizada</p>
          </div>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#84D6DC" fillOpacity="0.15"/>
        </svg>
      </div>
    </section>
  );
}
