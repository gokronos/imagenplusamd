import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="group fixed right-4 bottom-4 z-[90] inline-flex h-12 items-center gap-3 border border-blue-600/45 bg-black/88 px-4 text-[11px] font-black tracking-[0.14em] text-white uppercase shadow-[0_18px_45px_rgba(37,99,235,0.2)] backdrop-blur transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-black focus:outline-none md:right-6 md:bottom-6 md:h-13 md:px-5"
    >
      <span className="inline-flex size-7 items-center justify-center border border-blue-500/35 bg-blue-600/12 text-blue-500 group-hover:text-white">
        <MessageCircle size={15} strokeWidth={2.4} />
      </span>
      <span>Chatea con nosotros</span>
    </a>
  );
}
