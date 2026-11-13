import { MessageCircle, Phone } from 'lucide-react';
import { CategorySubnavFilter } from '../components/CategorySubnavFilter';
import { EditorialImage } from '../components/EditorialImage';
import { BRAND_INFO } from '../data/brand';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function BridalPage() {
  const category = CATEGORIES.find((c) => c.slug === 'bridal')!;

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Cinematic Romantic Luxury Campaign Hero */}
      <section className="bg-[#542333] text-[#F8F5EF] border-b border-[#D8C2A0]/35">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#D8C2A0] font-semibold">
              <span>Department 05</span>
              <span aria-hidden="true">·</span>
              <span>Bridal Edit</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#F8F5EF] leading-[1.06]">
              {category.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#F8F5EF]/85 leading-relaxed max-w-xl">
              {category.shortDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D8C2A0]/30 text-sm">
              <div>
                <p className="font-editorial text-xl text-[#D8C2A0]">Engagement</p>
                <p className="mt-1 text-xs text-[#F8F5EF]/75">
                  Soft champagne, muted rose, and luminous embroidered silhouettes.
                </p>
              </div>
              <div>
                <p className="font-editorial text-xl text-[#D8C2A0]">Wedding</p>
                <p className="mt-1 text-xs text-[#F8F5EF]/75">
                  Statement bridal sarees, lehengas, and rich heritage couture.
                </p>
              </div>
              <div>
                <p className="font-editorial text-xl text-[#D8C2A0]">Reception</p>
                <p className="mt-1 text-xs text-[#F8F5EF]/75">
                  Refined evening wear paired with veils and bridal accessories.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={buildWhatsAppEnquiryUrl(undefined, 'Bridal')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D8C2A0] text-[#29201D] text-sm font-semibold hover:bg-[#F8F5EF] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#542333]" aria-hidden="true" />
                <span>Book a Bridal Enquiry on WhatsApp</span>
              </a>
              <a
                href={BRAND_INFO.telHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#D8C2A0]/60 text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                <span>Call {BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-8 aspect-[3/4] overflow-hidden bg-[#3E1824] border border-[#D8C2A0]/50">
              <EditorialImage
                imageKey="bridal"
                alt="Mubarak Textiles deep burgundy and antique gold bridal couture"
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-4 aspect-[3/4] overflow-hidden bg-[#3E1824] border border-[#D8C2A0]/35">
              <EditorialImage
                imageKey="women"
                alt="Champagne silk bridal reception draping"
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
