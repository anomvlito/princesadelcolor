"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f0f0f]/95 backdrop-blur-sm shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span
            className="text-2xl font-black uppercase tracking-wider text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Princesa{" "}
            <span className="text-red-600">del Color</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-600 uppercase tracking-widest text-gray-300 hover:text-red-500 transition-colors duration-200"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="https://wa.me/56900000000?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-widest px-4 py-2 transition-colors duration-200"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Cotizar
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-gray-800 px-4 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-gray-300 hover:text-red-500"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/56900000000?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-red-600 text-white text-center font-bold uppercase tracking-widest py-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
