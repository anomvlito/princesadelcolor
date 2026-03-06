const pasos = [
  {
    num: "01",
    title: "Diagnóstico Gratuito",
    desc: "Traes tu auto, lo revisamos sin costo. Te explicamos exactamente qué necesita y cómo lo vamos a reparar.",
  },
  {
    num: "02",
    title: "Cotización Transparente",
    desc: "Te entregamos un presupuesto detallado por escrito, sin sorpresas ni costos ocultos.",
  },
  {
    num: "03",
    title: "Reparación Experta",
    desc: "Nuestro equipo trabaja con materiales de primera. Te mantenemos informado durante todo el proceso.",
  },
  {
    num: "04",
    title: "Entrega con Garantía",
    desc: "Revisamos contigo cada detalle antes de entregar. Trabajo garantizado por escrito.",
  },
];

export default function Proceso() {
  return (
    <section className="py-24 bg-[#0f0f0f] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-teal-600" />
            <span
              className="text-teal-500 text-sm font-bold uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Cómo trabajamos
            </span>
            <div className="h-px w-12 bg-teal-600" />
          </div>
          <h2
            className="text-white font-black uppercase leading-none"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            EL <span className="text-teal-600">PROCESO</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-gray-800">
          {pasos.map((p, i) => (
            <div key={i} className="bg-[#1a1a1a] p-8 relative">
              {/* Number */}
              <div
                className="text-7xl font-black text-teal-600 opacity-20 leading-none mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {p.num}
              </div>

              {/* Connector line */}
              {i < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-px w-px h-8 bg-teal-600 transform -translate-y-1/2 z-10" />
              )}

              <h3
                className="text-white text-xl font-black uppercase mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
