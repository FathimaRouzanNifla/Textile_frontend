import { useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_INFO } from '../data/brand';
import type { ShowcasePreviewItem } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';
import { EditorialImage } from './EditorialImage';

interface CollectionDetailModalProps {
  item: ShowcasePreviewItem | null;
  onClose: () => void;
}

export function CollectionDetailModal({
  item,
  onClose,
}: CollectionDetailModalProps) {
  useEffect(() => {
    if (!item) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#29201D]/70 backdrop-blur-xs p-4 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="collection-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#F8F5EF] border border-[#D8C2A0]/60 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close collection preview"
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-[#F8F5EF]/95 text-[#29201D] border border-[#D8C2A0] hover:bg-[#542333] hover:text-[#F8F5EF] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[3/4] md:aspect-auto md:min-h-[460px] bg-[#EFE7DA]">
              <EditorialImage
                imageKey={item.imageKey}
                alt={`${item.title} — ${item.categoryLabel} collection at Mubarak Textiles`}
                priority
                fallbackLabel={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#542333]/80 font-medium">
                  <span>{item.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.subcategory}</span>
                </div>

                <h2
                  id="collection-modal-title"
                  className="mt-3 font-editorial text-3xl sm:text-4xl font-semibold text-[#29201D] leading-tight"
                >
                  {item.title}
                </h2>

                <div className="mt-4 pt-4 border-t border-[#D8C2A0]/60">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                    Editorial Lookbook Sample
                  </p>
                  <p className="mt-2 text-sm sm:text-base text-[#29201D]/85 leading-relaxed">
                    {item.editorialNote}
                  </p>
                </div>

                <div className="mt-6 bg-[#FFFFFF] border border-[#D8C2A0]/50 p-4 text-xs sm:text-sm text-[#29201D]/80 leading-relaxed">
                  Mubarak Textiles is an in-store collection showcase. Current styles,
                  sizes, fabric options, and pricing are shared personally by our
                  Sainthamaruthu team via WhatsApp or in person at Main Street.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={buildWhatsAppEnquiryUrl(item.title, item.categoryLabel)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#542333] text-[#F8F5EF] text-sm font-medium tracking-wide hover:bg-[#3E1824] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={BRAND_INFO.telHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#542333] text-[#542333] text-sm font-medium tracking-wide hover:bg-[#542333]/5 transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call {BRAND_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
