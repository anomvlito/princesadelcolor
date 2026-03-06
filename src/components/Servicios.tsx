const servicios = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Desabolladura",
    desc: "Eliminamos abolladuras y daños estructurales recuperando la forma original de tu carrocería con técnicas de vanguardia.",
    detail: "PDR (Paintless Dent Repair) y métodos tradicionales",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Pintura Completa",
    desc: "Acabado profesional en toda la carrocería. Igualamos colores con precisión usando tecnología de espectrofotometría.",
    detail: "Pintura base agua y solvente disponibles",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Pintura Parcial",
    desc: "Reparamos zonas específicas con igualación exacta de color para que no se note ninguna diferencia con el resto del vehículo.",
    detail: "Mínima intervención, máximo resultado",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Preparación de Superficie",
    desc: "Masillado, lijado y aplicación de fondos. La base perfecta determina el resultado final de cualquier trabajo de pintura.",
    detail: "Materiales certificados de alta durabilidad",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Pulido y Detailing",
    desc: "Pulido profesional para restaurar el brillo original de la pintura. Eliminamos rayones superficiales y oxidación.",
    detail: "Brillo espejo garantizado",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Seguro de Accidente",
    desc: "Trabajamos con todas las compañías de seguro. Te ayudamos en el proceso de declaración y reparación sin complicaciones.",
    detail: "Asesoría y tramitación incluidas",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-red-600" />
            <span
              className="text-red-500 text-sm font-bold uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lo que hacemos
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
            NUESTROS
            <br />
            <span className="text-red-600">SERVICIOS</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-800">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-8 group hover:bg-[#222] transition-colors duration-300 relative overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-red-600 transition-colors duration-300" />

              {/* Number */}
              <span
                className="absolute top-6 right-6 text-6xl font-black text-gray-800 group-hover:text-gray-700 transition-colors duration-300 leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                {/* Icon */}
                <div className="text-red-600 mb-4">{s.icon}</div>

                {/* Title */}
                <h3
                  className="text-white text-2xl font-black uppercase mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  {s.desc}
                </p>

                {/* Detail tag */}
                <span
                  className="inline-block text-xs text-red-500 border border-red-900 px-2 py-1 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6" style={{ fontFamily: "var(--font-body)" }}>
            ¿Tienes un caso específico? Conversemos y te damos la solución.
          </p>
          <a
            href="https://wa.me/56900000000?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-transparent border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
