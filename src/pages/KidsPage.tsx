import { MessageCircle } from 'lucide-react';
import { CategorySubnavFilter } from '../components/CategorySubnavFilter';
import { EditorialImage } from '../components/EditorialImage';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function KidsPage() {
  const category = CATEGORIES.find((c) => c.slug === 'kids')!;

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Warm, Joyful & Sunlit Family Showcase Hero */}
      <section className="bg-[#FFFFFF] border-b border-[#D8C2A0]/55">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
              <span>Department 03</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#542333]">Kids &amp; Baby</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#29201D] leading-[1.08]">
              {category.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#29201D]/80 leading-relaxed max-w-xl">
              {category.shortDescription}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 max-w-md">
              <div className="p-4 bg-[#F8F5EF] border border-[#D8C2A0]/60">
                <p className="font-editorial text-lg font-semibold text-[#542333]">
                  Gentle Fabrics
                </p>
                <p className="mt-1 text-xs text-[#29201D]/75">
                  Soft cotton weaves crafted for playful movement and comfort.
                </p>
              </div>
              <div className="p-4 bg-[#F8F5EF] border border-[#D8C2A0]/60">
                <p className="font-editorial text-lg font-semibold text-[#542333]">
                  Festive Readiness
                </p>
                <p className="mt-1 text-xs text-[#29201D]/75">
                  Traditional kids’ attire and occasion wear for every family
                  celebration.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={buildWhatsAppEnquiryUrl(undefined, 'Kids')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                <span>Ask About Kids’ Sizes &amp; Styles</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[3/4] max-w-lg mx-auto overflow-hidden bg-[#EFE7DA] border-8 border-[#F8F5EF] shadow-lg">
              <EditorialImage
                imageKey="kids"
                alt="Joyful children in festive cotton outfits at Mubarak Textiles"
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CategorySubnavFilter category={category} />
    </div>
  );
}
