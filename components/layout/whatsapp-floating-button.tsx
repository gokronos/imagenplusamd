import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-5 left-5 z-[90] inline-flex size-14 items-center justify-center rounded-full border border-white/15 bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.28)] transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black focus:outline-none xl:left-72"
    >
      <MessageCircle size={26} strokeWidth={2.4} />
    </a>
  );
}
