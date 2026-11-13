import { MessageCircle } from 'lucide-react';
import { CategorySubnavFilter } from '../components/CategorySubnavFilter';
import { EditorialImage } from '../components/EditorialImage';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

const ROOM_GUIDES = [
  {
    room: 'Bedroom Sanctuary',
    items: 'Cotton Bedsheets · Pillow Covers · All-Season Blankets',
    note: 'Breathable natural weaves chosen for cool nights and restful comfort.',
  },
  {
    room: 'Living & Daylight Spaces',
    items: 'Sheer Panels · Textured Drapes · Decorative Cushions',
    note: 'Tailored curtain fabrics that soften bright coastal sunlight.',
  },
  {
    room: 'Bath & Household Essentials',
    items: 'Combed Cotton Towels · Table Linens · Everyday Essentials',
    note: 'Durable, absorbent household textiles built for daily family use.',
  },
];

export function HomeTextilesPage() {
  const category = CATEGORIES.find((c) => c.slug === 'home-textiles')!;

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Home-Lifestyle Interior Editorial Hero (Distinct Interior Layout) */}
      <section className="border-b border-[#D8C2A0]/55 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-12 lg:py-16 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
                <span>Department 07</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#542333]">Home Living</span>
              </div>
              <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#29201D] leading-[1.06]">
                {category.heroHeadline}
              </h1>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <p className="text-base text-[#29201D]/80 leading-relaxed">
                {category.shortDescription}
              </p>
              <a
                href={buildWhatsAppEnquiryUrl(undefined, 'Home Textiles')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                <span>Enquire Home Textiles</span>
              </a>
            </div>
          </div>

          {/* Wide Architectural Interior Banner */}
          <div className="aspect-[16/9] max-h-[560px] w-full overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]/65">
            <EditorialImage
              imageKey="homeTextiles"
              alt="Sunlit luxury bedroom styled with ivory cotton bedsheets, linen blanket, and sheer curtains"
              priority
              className="w-full h-full object-cover"
            />
          </div>

          {/* Room-by-Room Living Guide */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {ROOM_GUIDES.map((guide) => (
              <div
                key={guide.room}
                className="p-6 bg-[#F8F5EF] border border-[#D8C2A0]/60 space-y-2"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                  {guide.room}
                </p>
                <p className="font-editorial text-xl font-semibold text-[#542333]">
                  {guide.items}
                </p>
                <p className="text-sm text-[#29201D]/75 leading-relaxed">
                  {guide.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategorySubnavFilter category={category} cardAspectClass="aspect-[4/3]" />
    </div>
  );
}
