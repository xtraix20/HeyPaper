export default function SocialProof() {
  const items = [
    "🎒 +500 familias en Soacha nos eligen",
    "✏️ Diseñado a la altura de los niños",
    "🌈 Colores, cuadernos y mucho más",
    "📍 Calle 32 # 7A-Este-09, Soacha",
    "⭐ Calidad garantizada en cada producto",
    "🎨 Una experiencia visual, no solo una tienda",
  ];

  const doubled = [...items, ...items];

  return (
    <section className="bg-cian py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-white font-bold text-base px-8"
          >
            {item}
            <span className="text-white/40 ml-6">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
