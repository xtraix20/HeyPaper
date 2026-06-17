export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-4 border-amarillo">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-rosado rounded-xl flex items-center justify-center text-sm">✏️</div>
              <span className="text-2xl font-black">
                <span className="text-amarillo">Hey</span>
                <span className="text-cian">Paper</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Aprender nunca fue tan divertido. Papelería moderna diseñada a la altura y
              gusto de los niños, en el corazón de Soacha.
            </p>
            <a
              href="https://instagram.com/hey_paper_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
            >
              <span>📸</span> @hey_paper_
            </a>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-black text-lg mb-5">Encuéntranos</h3>
            <ul className="space-y-3">
              {[
                { icon: "📍", text: "Calle 32 # 7A-Este-09, Piso 1, Soacha", href: null },
                { icon: "📞", text: "322-4151140", href: "tel:3224151140" },
                { icon: "✉️", text: "contacto@heypaper.org", href: "mailto:contacto@heypaper.org" },
                { icon: "🌐", text: "www.heypaper.org", href: "https://www.heypaper.org" },
              ].map((item) => (
                <li key={item.text}>
                  {item.href ? (
                    <a href={item.href} className="flex items-start gap-2 text-gray-400 hover:text-cian transition-colors text-sm">
                      <span className="mt-0.5">{item.icon}</span>
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <span className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="mt-0.5">{item.icon}</span>
                      <span>{item.text}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-white font-black text-lg mb-5">Horarios</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Lunes – Viernes</span><span className="text-white font-semibold">8am – 6pm</span></li>
              <li className="flex justify-between"><span>Sábados</span><span className="text-white font-semibold">8am – 5pm</span></li>
              <li className="flex justify-between"><span>Domingos</span><span className="text-gray-600">Cerrado</span></li>
            </ul>

            <div className="mt-8 p-4 bg-amarillo/10 border border-amarillo/30 rounded-2xl">
              <p className="text-amarillo font-bold text-sm mb-1">📣 ¿Primera vez?</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Visítanos y conoce nuestra tienda. Diseñada especialmente para que los niños elijan con alegría.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">© 2025 HeyPaper. Todos los derechos reservados.</p>
          <p className="text-gray-600 text-xs">Hecho con 💛 en Soacha, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
