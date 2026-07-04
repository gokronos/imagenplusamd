import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const navigation = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Contacto', href: '/#contacto' },
];

export function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="border-t border-white/10 bg-black px-5 py-16 text-white md:px-10 xl:px-20"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.8fr_0.6fr]">
          <div>
            <h2 className="font-display max-w-xs text-4xl leading-none font-black tracking-normal">
              ¿Tienes un <span className="text-blue-600">proyecto</span> en mente?
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Hablemos de tu idea y construyamos algo extraordinario juntos.
            </p>
            <a
              href="https://wa.me/573201234567"
              className="mt-8 inline-flex h-12 items-center gap-4 border border-white/30 px-5 text-xs font-black tracking-[0.16em] text-white uppercase transition hover:border-blue-600 hover:text-blue-500"
            >
              Hablemos por WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <h3 className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
              Contactanos
            </h3>
            <div className="mt-8 space-y-5 text-sm text-white/65">
              <p className="flex items-center gap-4">
                <Phone size={18} /> +57 320 123 4567
              </p>
              <p className="flex items-center gap-4">
                <Mail size={18} /> info@imagenplus.com.co
              </p>
              <p className="flex items-center gap-4">
                <MapPin size={18} /> Cúcuta, Colombia
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
              Navegación
            </h3>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-white/55">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-blue-500">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black tracking-[0.24em] text-blue-600 uppercase">
              Síguenos
            </h3>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                className="inline-flex size-12 items-center justify-center border border-white/20"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="inline-flex size-12 items-center justify-center border border-white/20"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.behance.net/"
                aria-label="Behance"
                className="inline-flex size-12 items-center justify-center border border-white/20 text-lg font-black"
              >
                Bē
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Imagen Plus. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
