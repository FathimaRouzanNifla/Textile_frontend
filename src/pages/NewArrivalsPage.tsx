import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CollectionCard } from '../components/CollectionCard';
import { CollectionDetailModal } from '../components/CollectionDetailModal';
import {
  CATEGORIES,
  SHOWCASE_PREVIEWS,
  type ShowcasePreviewItem,
} from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function NewArrivalsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<ShowcasePreviewItem | null>(
    null,
  );

  const newArrivals = SHOWCASE_PREVIEWS.filter((item) => item.isNewArrival);
  const filtered =
    selectedCategory === 'all'
      ? newArrivals
      : newArrivals.filter((item) => item.categorySlug === selectedCategory);

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      <section className="border-b border-[#D8C2A0]/55 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
              Seasonal Showcase
            </p>
            <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#29201D]">
              New Arrivals Lookbook
            </h1>
            <p className="text-base sm:text-lg text-[#29201D]/80 leading-relaxed">
              A curated preview of recent seasonal highlights across our seven
              departments. Because inventory refreshes regularly at our
              Sainthamaruthu showroom, please contact us on WhatsApp or visit
              Main Street to confirm current in-store pieces and sizing.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Filter new arrivals by department"
              className="flex flex-wrap gap-2"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'all'}
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 text-xs font-semibold tracking-wide border transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === 'all'
                    ? 'bg-[#542333] text-[#F8F5EF] border-[#542333]'
                    : 'bg-[#F8F5EF] text-[#29201D] border-[#D8C2A0] hover:border-[#542333]'
                }`}
              >
                All Departments
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wide border transition-colors cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.slug
                      ? 'bg-[#542333] text-[#F8F5EF] border-[#542333]'
                      : 'bg-[#F8F5EF] text-[#29201D] border-[#D8C2A0] hover:border-[#542333]'
                  }`}
                >
                  {cat.navLabel}
                </button>
              ))}
            </div>

            <a
              href={buildWhatsAppEnquiryUrl(undefined, 'New Arrivals')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#542333] text-[#F8F5EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#3E1824] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
              <span>Ask About Latest Stock</span>
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-20">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs uppercase tracking-[0.14em] text-[#542333] font-semibold">
            Showing {filtered.length} Sample Lookbook Highlights
          </p>
          <p className="text-xs text-[#29201D]/65">
            Demonstration visual previews · Authentic product availability
            confirmed in-store
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((item) => (
            <CollectionCard
              key={item.id}
              item={item}
              onSelect={setSelectedItem}
            />
          ))}
        </div>
      </section>

      <CollectionDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
