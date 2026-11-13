import { MessageCircle } from 'lucide-react';
import { CategorySubnavFilter } from '../components/CategorySubnavFilter';
import { EditorialImage } from '../components/EditorialImage';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function AbayaPage() {
  const category = CATEGORIES.find((c) => c.slug === 'abaya')!;

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Serene Minimalist Modest Luxury Hero */}
      <section className="border-b border-[#D8C2A0]/55 bg-[#F3EDE2]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] text-[#542333] font-semibold">
              <span>Department 04</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#AD9061]">Modest Luxury</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#29201D] leading-tight">
              {category.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#29201D]/80 leading-relaxed">
              {category.shortDescription}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              <div className="p-6 bg-[#FFFFFF] border border-[#D8C2A0]/55">
                <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                  Fabric Craft
                </p>
                <p className="mt-2 font-editorial text-2xl font-medium text-[#29201D]">
                  Fluid Drape &amp; Breathability
                </p>
                <p className="mt-2 text-sm text-[#29201D]/75 leading-relaxed">
                  Selected nidha, silk-crepe, and chiffon weaves suited to Sri
                  Lanka’s warm climate while preserving effortless grace.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]">
                <EditorialImage
                  imageKey="abaya"
                  alt="Flowing espresso and champagne abaya with hijab at Mubarak Textiles"
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6 order-3">
              <div className="p-6 bg-[#542333] text-[#F8F5EF] border border-[#D8C2A0]/35 space-y-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[#D8C2A0] font-semibold">
                  Personal Assistance
                </p>
                <p className="text-sm text-[#F8F5EF]/85 leading-relaxed">
                  Looking for coordinated hijabs, tailored lengths, or occasion
                  abaya pieces? Connect with our store team directly.
                </p>
                <a
                  href={buildWhatsAppEnquiryUrl(undefined, 'Abaya')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#D8C2A0] text-[#29201D] text-xs font-semibold uppercase tracking-wider hover:bg-[#F8F5EF] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#542333]" aria-hidden="true" />
                  <span>Enquire Abayas</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategorySubnavFilter category={category} />
    </div>
  );
}
