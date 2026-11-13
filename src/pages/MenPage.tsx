import { MessageCircle } from 'lucide-react';
import { CategorySubnavFilter } from '../components/CategorySubnavFilter';
import { EditorialImage } from '../components/EditorialImage';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function MenPage() {
  const category = CATEGORIES.find((c) => c.slug === 'men')!;

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Architectural Modern Menswear Hero */}
      <section className="bg-[#29201D] text-[#F8F5EF] border-b border-[#D8C2A0]/30">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 aspect-[3/4] overflow-hidden bg-[#3B2E2A] border border-[#D8C2A0]/40">
            <EditorialImage
              imageKey="men"
              alt="Tailored linen shirt and trousers in Mubarak Textiles Men's Collection"
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between py-2 lg:pl-6 space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#D8C2A0] font-semibold">
                <span>Department 02</span>
                <span aria-hidden="true">·</span>
                <span>Menswear</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#F8F5EF] leading-[1.08]">
                {category.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#F8F5EF]/80 leading-relaxed max-w-xl">
                {category.shortDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#D8C2A0]/25">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#D8C2A0]">
                  Everyday Tailoring
                </p>
                <p className="mt-1.5 text-sm text-[#F8F5EF]/75">
                  Breathable linen shirts, combed cotton tees, and tailored chinos
                  built for tropical comfort.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#D8C2A0]">
                  Formal &amp; Cultural
                </p>
                <p className="mt-1.5 text-sm text-[#F8F5EF]/75">
                  Crisp dress trousers, suiting, vertis, and festive kurtas for
                  ceremonies and milestones.
                </p>
              </div>
            </div>

            <div>
              <a
                href={buildWhatsAppEnquiryUrl(undefined, 'Men')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D8C2A0] text-[#29201D] text-sm font-semibold hover:bg-[#F8F5EF] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#542333]" aria-hidden="true" />
                <span>Enquire Menswear Selection</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CategorySubnavFilter category={category} />
    </div>
  );
}
