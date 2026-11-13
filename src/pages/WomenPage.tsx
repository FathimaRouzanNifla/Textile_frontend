import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CategorySubnavFilter } from '../components/CategorySubnavFilter';
import { EditorialImage } from '../components/EditorialImage';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function WomenPage() {
  const category = CATEGORIES.find((c) => c.slug === 'women')!;

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Asymmetric Feminine Elegance Hero */}
      <section className="border-b border-[#D8C2A0]/55 bg-gradient-to-b from-[#FFFFFF] to-[#F8F5EF]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B98A8E] font-semibold">
              <span>Department 01</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#542333]">Women</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#29201D] leading-[1.08]">
              {category.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#29201D]/80 leading-relaxed max-w-xl">
              {category.shortDescription}
            </p>

            <div className="p-5 bg-[#FFFFFF] border border-[#B98A8E]/45 max-w-lg">
              <p className="text-xs uppercase tracking-[0.14em] text-[#542333] font-semibold">
                Curatorial Direction
              </p>
              <p className="mt-1.5 text-sm text-[#29201D]/80">
                {category.creativeDirection}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={buildWhatsAppEnquiryUrl(undefined, 'Women')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                <span>Enquire Women’s Collection</span>
              </a>
              <Link
                to="/bridal"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#D8C2A0] text-[#542333] text-sm font-medium hover:bg-[#FFFFFF] transition-colors"
              >
                <span>View Bridal Edit</span>
                <ArrowRight className="w-4 h-4 text-[#AD9061]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-end">
            <div className="col-span-8 aspect-[3/4] overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]/70">
              <EditorialImage
                imageKey="women"
                alt="Women's silk saree and occasion fashion at Mubarak Textiles"
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-4 aspect-[3/4] overflow-hidden bg-[#EFE7DA] border border-[#B98A8E]/60">
              <EditorialImage
                imageKey="fabricCraft"
                alt="Fine cotton and silk textile craft"
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
