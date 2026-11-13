import { ArrowUpRight, MessageCircle } from 'lucide-react';
import type { ShowcasePreviewItem } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';
import { EditorialImage } from './EditorialImage';

interface CollectionCardProps {
  item: ShowcasePreviewItem;
  onSelect: (item: ShowcasePreviewItem) => void;
  aspectClass?: string;
}

export function CollectionCard({
  item,
  onSelect,
  aspectClass = 'aspect-[3/4]',
}: CollectionCardProps) {
  return (
    <article className="group flex flex-col bg-[#FFFFFF] border border-[#D8C2A0]/45 transition-all duration-300 hover:border-[#AD9061]">
      <button
        type="button"
        onClick={() => onSelect(item)}
        aria-label={`View details for ${item.title}`}
        className={`relative w-full ${aspectClass} overflow-hidden bg-[#EFE7DA] text-left cursor-pointer`}
      >
        <EditorialImage
          imageKey={item.imageKey}
          alt={`${item.title} — ${item.categoryLabel} lookbook preview`}
          fallbackLabel={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </button>

      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#29201D]/65 tracking-[0.06em] uppercase">
            <span>{item.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{item.subcategory}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#AD9061]">Lookbook Sample</span>
          </div>

          <h3 className="mt-2 font-editorial text-xl sm:text-2xl font-medium text-[#29201D] leading-snug">
            {item.title}
          </h3>
        </div>

        <div className="pt-3 border-t border-[#D8C2A0]/40 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onSelect(item)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#542333] hover:text-[#29201D] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4 text-[#AD9061]" aria-hidden="true" />
          </button>

          <a
            href={buildWhatsAppEnquiryUrl(item.title, item.categoryLabel)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire on WhatsApp about ${item.title}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#542333] hover:text-[#3E1824] px-3 py-1.5 border border-[#D8C2A0] hover:bg-[#F8F5EF] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#AD9061]" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
