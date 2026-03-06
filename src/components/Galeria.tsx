const trabajos = [
  {
    id: 1,
    titulo: "Reparación de Capó",
    categoria: "Desabolladura + Pintura",
    descripcion: "Abolladuras múltiples por granizo. Recuperación total sin reemplazar la pieza.",
    color: "#1e293b",
  },
  {
    id: 2,
    titulo: "Lateral Completo",
    categoria: "Pintura Parcial",
    descripcion: "Igualación perfecta de color en lateral derecho tras raspado en estacionamiento.",
    color: "#1e1a2e",
  },
  {
    id: 3,
    titulo: "Choque Frontal",
    categoria: "Desabolladura + Preparación",
    descripcion: "Reparación estructural de capó, parachoques y guardabarros delantero.",
    color: "#1a2e1e",
  },
  {
    id: 4,
    titulo: "Pintura Total",
    categoria: "Pintura Completa",
    descripcion: "Restauración completa de la carrocería con cambio de color del cliente.",
    color: "#2e1a1a",
  },
  {
    id: 5,
    titulo: "Puerta Trasera",
    categoria: "Desabolladura",
    descripcion: "Técnica PDR para restaurar sin pintura. Resultado invisible al ojo.",
    color: "#1e2a2e",
  },
  {
    id: 6,
    titulo: "Pulido Premium",
    categoria: "Detailing",
    descripcion: "Eliminación de rayones finos y oxidación superficial. Brillo de concesionario.",
    color: "#2e2a1a",
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-teal-600" />
              <span
                className="text-teal-500 text-sm font-bold uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Trabajos realizados
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
              NUESTRA
              <br />
              <span className="text-teal-600">GALERÍA</span>
            </h2>
            <div className="h-1 w-20 bg-teal-600 mt-4" />
          </div>

          <p className="text-gray-400 max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
            Cada trabajo es evidencia de nuestro compromiso con la calidad.
            Los resultados hablan solos.
          </p>
        </div>

        {/* Gallery placeholder grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trabajos.map((t) => (
            <div
              key={t.id}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
              style={{ background: t.color }}
            >
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-600 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span
                    className="text-gray-600 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Foto de trabajo
                  </span>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span
                  className="text-teal-500 text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.categoria}
                </span>
                <h3
                  className="text-white text-xl font-black uppercase mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.titulo}
                </h3>
                <p className="text-gray-300 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  {t.descripcion}
                </p>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="bg-teal-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.categoria}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6" style={{ fontFamily: "var(--font-body)" }}>
            Mira más trabajos en nuestro Instagram
          </p>
          <a
            href="https://www.instagram.com/princesadelcolor/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-gray-700 hover:border-teal-600 text-gray-300 hover:text-white font-bold uppercase tracking-widest px-8 py-4 transition-all duration-200"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Ver en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
