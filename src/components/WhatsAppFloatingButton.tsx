import { MessageCircle } from 'lucide-react';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppEnquiryUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire with Mubarak Textiles on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 bg-[#542333] text-[#F8F5EF] border border-[#D8C2A0]/60 shadow-lg hover:bg-[#3E1824] transition-all duration-200 hover:-translate-y-0.5"
    >
      <MessageCircle className="w-4 h-4 text-[#D8C2A0] shrink-0" aria-hidden="true" />
      <span className="text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  );
}
