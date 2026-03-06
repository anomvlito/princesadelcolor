export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0f0f0f" }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )
          `,
        }}
      />

      {/* Red accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-red-600" />
            <span
              className="text-red-500 text-sm font-bold uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Taller Automotriz
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-black uppercase leading-none mb-6 text-white"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              letterSpacing: "-0.02em",
            }}
          >
            PRINCESA{" "}
            <span className="text-red-600">DEL</span>
            <br />
            COLOR
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-24 bg-red-600" />
            <div className="h-px flex-1 max-w-xs bg-gray-700" />
          </div>

          {/* Subtitle */}
          <p
            className="text-xl text-gray-300 uppercase tracking-widest mb-4 font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Desabolladura &amp; Pintura Profesional
          </p>

          <p className="text-gray-400 text-base max-w-xl mb-10 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Devolvemos la vida a tu auto. Trabajos de precisión, materiales de
            primera y resultados que hablan por sí solos.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/56900000000?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest px-8 py-4 text-lg transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir Cotización
            </a>

            <a
              href="#servicios"
              className="flex items-center gap-3 border-2 border-gray-600 hover:border-red-600 text-gray-300 hover:text-white font-bold uppercase tracking-widest px-8 py-4 text-lg transition-all duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ver Servicios
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-gray-800">
            {[
              { num: "10+", label: "Años de experiencia" },
              { num: "500+", label: "Autos restaurados" },
              { num: "100%", label: "Garantía en trabajo" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-4xl font-black text-red-600"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.num}
                </p>
                <p className="text-gray-400 text-sm uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
    </section>
  );
}
