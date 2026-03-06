export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-teal-600" />
            <span
              className="text-teal-500 text-sm font-bold uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Hablemos
            </span>
          </div>
          <h2
            className="text-white font-black uppercase leading-none"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            CONTÁCTANOS
            <br />
            <span className="text-teal-600">HOY</span>
          </h2>
          <div className="h-1 w-20 bg-teal-600 mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — contact info */}
          <div className="flex flex-col gap-8">
            <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              La forma más rápida de comunicarse con nosotros es por WhatsApp.
              Respondemos rápido y sin vueltas.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/56971386400?text=Hola%2C%20quiero%20consultar%20por%20una%20reparaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white p-6 transition-colors duration-200 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p
                  className="text-white font-black uppercase tracking-widest text-xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Escribir por WhatsApp
                </p>
                <p className="text-green-200 text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>
                  Respuesta rápida · Cotización sin compromiso
                </p>
              </div>
              <svg
                className="w-6 h-6 ml-auto group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Ubicación",
                  value: "Ver en Google Maps",
                  href: "https://share.google/wxq2ubpVj7NffK1i2",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Horario",
                  value: "Lun–Vie 8:00–18:00\nSáb–Dom: Cerrado",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                  label: "Instagram",
                  value: "@princesadelcolor",
                  href: "https://www.instagram.com/princesadelcolor/",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Garantía",
                  value: "En todos los trabajos",
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#1a1a1a] border border-gray-800 p-5">
                  <div className="flex items-center gap-3 text-teal-500 mb-2">
                    {item.icon}
                    <span
                      className="text-xs font-bold uppercase tracking-widest text-gray-500"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-teal-400 transition-colors whitespace-pre-line"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold whitespace-pre-line" style={{ fontFamily: "var(--font-body)" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — map embed placeholder */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#1a1a1a] border border-gray-800 p-6">
              <h3
                className="text-white font-black uppercase text-xl mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Diagnóstico Sin Costo
              </h3>
              <p className="text-gray-400 mb-6" style={{ fontFamily: "var(--font-body)" }}>
                Trae tu auto y en minutos te decimos qué necesita y cuánto cuesta.
                Sin compromiso, sin letra chica.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Revisión completa de la carrocería",
                  "Cotización detallada por escrito",
                  "Plazos de entrega estimados",
                  "Asesoría con seguro incluida",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600 flex-shrink-0" />
                    <span className="text-gray-300 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://share.google/wxq2ubpVj7NffK1i2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mt-8 bg-teal-600 hover:bg-teal-700 text-white font-bold uppercase tracking-widest px-6 py-4 transition-colors duration-200 justify-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Ver Ubicación en Maps
              </a>
            </div>

            {/* Testimonials placeholder */}
            <div className="bg-[#1a1a1a] border border-gray-800 p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-gray-400 text-sm ml-2" style={{ fontFamily: "var(--font-body)" }}>
                  Clientes satisfechos
                </span>
              </div>
              <blockquote
                className="text-gray-300 italic leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                "Quedé muy satisfecho con el trabajo. Mi auto quedó como nuevo
                después de un choque. Lo recomiendo 100%."
              </blockquote>
              <p
                className="text-teal-500 text-sm font-bold mt-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                — Cliente verificado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
