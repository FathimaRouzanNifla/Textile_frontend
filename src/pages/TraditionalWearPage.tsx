import { MessageCircle } from 'lucide-react';
import { CategorySubnavFilter } from '../components/CategorySubnavFilter';
import { EditorialImage } from '../components/EditorialImage';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

const CULTURAL_TRADITIONS = [
  {
    community: 'Tamil Heritage',
    title: 'Silk Sarees, Pavadai & Gold-Bordered Vertis',
    description:
      'Timeless festive attire for Thaipongal, temple ceremonies, weddings, and family milestones across every generation.',
  },
  {
    community: 'Sinhala Heritage',
    title: 'Osariya Elegance & Avurudu Weaves',
    description:
      'Graceful traditional drapes, national shirts, and vibrant seasonal ensembles curated for Sinhala New Year and ceremonies.',
  },
  {
    community: 'Muslim Heritage',
    title: 'Embroidered Kurtas, Jubbahs & Festive Abayas',
    description:
      'Refined modest garments, detailed shawls, and coordinated family attire tailored for Eid gatherings and weddings.',
  },
  {
    community: 'Christian Occasions',
    title: 'Lace Celebration Dresses & Tailored Suiting',
    description:
      'Poised ivory and pastel dresses, church occasion attire, and formalwear crafted for Christmas, baptisms, and weddings.',
  },
];

export function TraditionalWearPage() {
  const category = CATEGORIES.find((c) => c.slug === 'traditional-wear')!;

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Cultural Elegance Hero */}
      <section className="border-b border-[#D8C2A0]/55 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
              <span>Department 06</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#542333]">Traditional Wear</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl font-semibold text-[#29201D] leading-[1.08]">
              {category.heroHeadline}
            </h1>

            <p className="text-base text-[#29201D]/80 leading-relaxed">
              {category.shortDescription}
            </p>

            <a
              href={buildWhatsAppEnquiryUrl(undefined, 'Traditional Wear')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
              <span>Enquire Traditional Collections</span>
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]/65">
              <EditorialImage
                imageKey="traditional"
                alt="Handloom silk sarees, crisp cotton vertis, embroidered kurtas, and celebration attire at Mubarak Textiles"
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusive Cultural Showcase */}
      <section className="bg-[#F3EDE2] border-b border-[#D8C2A0]/55">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-[0.16em] text-[#542333] font-semibold">
              Cultural Inclusivity
            </p>
            <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold text-[#29201D]">
              Attire Honoring Every Tradition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURAL_TRADITIONS.map((tradition) => (
              <article
                key={tradition.community}
                className="bg-[#FFFFFF] border border-[#D8C2A0]/55 p-6 flex flex-col justify-between gap-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                    {tradition.community}
                  </p>
                  <h3 className="mt-2 font-editorial text-2xl font-semibold text-[#542333]">
                    {tradition.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#29201D]/80 leading-relaxed">
                    {tradition.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CategorySubnavFilter category={category} cardAspectClass="aspect-[4/3]" />
    </div>
  );
}
