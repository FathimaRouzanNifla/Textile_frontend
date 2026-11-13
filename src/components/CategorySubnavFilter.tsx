import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import {
  SHOWCASE_PREVIEWS,
  type CategoryMeta,
  type ShowcasePreviewItem,
} from '../data/collections';
import {
  buildWhatsAppEnquiryUrl,
  filterCategoryPreviews,
} from '../utils/catalogHelpers';
import { CollectionCard } from './CollectionCard';
import { CollectionDetailModal } from './CollectionDetailModal';

interface CategorySubnavFilterProps {
  category: CategoryMeta;
  cardAspectClass?: string;
}

export function CategorySubnavFilter({
  category,
  cardAspectClass = 'aspect-[3/4]',
}: CategorySubnavFilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSub = searchParams.get('sub') ?? 'all';
  const [activeSub, setActiveSub] = useState<string>(initialSub);
  const [selectedItem, setSelectedItem] = useState<ShowcasePreviewItem | null>(
    null,
  );

  useEffect(() => {
    setActiveSub(searchParams.get('sub') ?? 'all');
  }, [searchParams]);

  const handleFilterClick = (slug: string) => {
    setActiveSub(slug);
    if (slug === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ sub: slug });
    }
  };

  const previews = filterCategoryPreviews(
    SHOWCASE_PREVIEWS,
    category.slug,
    activeSub,
  );

  const activeSubcategoryMeta = category.subcategories.find(
    (s) => s.slug === activeSub,
  );

  return (
    <section className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-20">
      {/* Subcategory Directory + Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#D8C2A0]/55">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
            {category.navLabel} Directory
          </p>
          <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold text-[#29201D]">
            {activeSubcategoryMeta
              ? activeSubcategoryMeta.label
              : `Explore ${category.navLabel} Styles`}
          </h2>
          <p className="mt-2 text-sm text-[#29201D]/75 max-w-2xl">
            {activeSubcategoryMeta
              ? activeSubcategoryMeta.summary
              : category.featuredNote}
          </p>
        </div>

        <a
          href={buildWhatsAppEnquiryUrl(
            activeSubcategoryMeta?.label,
            category.navLabel,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 bg-[#542333] text-[#F8F5EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#3E1824] transition-colors whitespace-nowrap self-start lg:self-auto"
        >
          <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
          <span>Enquire {category.navLabel} on WhatsApp</span>
        </a>
      </div>

      {/* Interactive Filter Tabs */}
      <div
        role="tablist"
        aria-label={`${category.navLabel} subcategory filter`}
        className="mt-6 flex flex-wrap gap-2"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeSub === 'all'}
          onClick={() => handleFilterClick('all')}
          className={`px-4 py-2 text-xs font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap border ${
            activeSub === 'all'
              ? 'bg-[#542333] text-[#F8F5EF] border-[#542333]'
              : 'bg-[#FFFFFF] text-[#29201D] border-[#D8C2A0]/65 hover:border-[#542333]'
          }`}
        >
          All {category.navLabel}
        </button>

        {category.subcategories.map((sub) => {
          const isSelected = activeSub === sub.slug;
          return (
            <button
              key={sub.slug}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => handleFilterClick(sub.slug)}
              className={`px-4 py-2 text-xs font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap border ${
                isSelected
                  ? 'bg-[#542333] text-[#F8F5EF] border-[#542333]'
                  : 'bg-[#FFFFFF] text-[#29201D] border-[#D8C2A0]/65 hover:border-[#542333]'
              }`}
            >
              {sub.label}
            </button>
          );
        })}
      </div>

      {/* Subcategory Overview Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.subcategories.map((sub) => {
          const isSelected = activeSub === sub.slug;
          return (
            <button
              key={sub.slug}
              type="button"
              onClick={() => handleFilterClick(sub.slug)}
              className={`text-left p-5 border transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#FFFFFF] border-[#542333]'
                  : 'bg-[#FFFFFF]/70 border-[#D8C2A0]/50 hover:bg-[#FFFFFF] hover:border-[#AD9061]'
              }`}
            >
              <h3 className="font-editorial text-xl font-semibold text-[#542333]">
                {sub.label}
              </h3>
              <p className="mt-1.5 text-sm text-[#29201D]/75 leading-relaxed">
                {sub.summary}
              </p>
            </button>
          );
        })}
      </div>

      {/* Curated Sample Lookbook Grid */}
      <div className="mt-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#29201D]">
            Editorial Lookbook Previews
          </h3>
          <p className="text-xs text-[#29201D]/65">
            Sample visual previews · Visit Main Street or WhatsApp us for live
            in-store stock &amp; pricing
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {previews.map((item) => (
            <CollectionCard
              key={item.id}
              item={item}
              onSelect={setSelectedItem}
              aspectClass={cardAspectClass}
            />
          ))}
        </div>
      </div>

      <CollectionDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
