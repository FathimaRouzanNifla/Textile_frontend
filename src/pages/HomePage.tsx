import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EditorialImage } from '../components/EditorialImage';
import { BRAND_INFO } from '../data/brand';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const activeCategory = CATEGORIES[activeIndex];

  // GSAP subtle entrance & category-switch reveal (respecting prefers-reduced-motion)
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (heroVisualRef.current) {
        gsap.fromTo(
          heroVisualRef.current,
          { opacity: 0.45, scale: 1.03 },
          { opacity: 1, scale: 1, duration: 0.65, ease: 'power3.out' },
        );
      }
      if (heroTextRef.current) {
        gsap.fromTo(
          heroTextRef.current,
          { opacity: 0.3, y: 10 },
          { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
        );
      }
    });

    return () => ctx.revert();
  }, [activeIndex]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced || !pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 86%',
            once: true,
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="bg-[#F8F5EF] text-[#29201D]">
      {/* 1. HERO — THE MUBARAK WORLD: A LIVING FASHION CANVAS */}
      <section
        aria-label="The Mubarak World Showcase"
        className="relative border-b border-[#D8C2A0]/50 overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Editorial Typography & Active Category Spotlight */}
            <div className="lg:col-span-5 space-y-6 order-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#542333] font-semibold">
                <span>The Mubarak World</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#AD9061]">Sainthamaruthu</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-5xl xl:text-[58px] font-semibold text-[#29201D] leading-[1.06] tracking-[-0.01em]">
                Beyond Fashion. A World of Elegance.
              </h1>

              <p className="text-base sm:text-lg text-[#29201D]/80 leading-relaxed max-w-xl">
                Explore thoughtfully selected fashion and lifestyle collections for
                every generation, every celebration, and every home.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#discover-collections"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#542333] text-[#F8F5EF] text-sm font-medium tracking-wide hover:bg-[#3E1824] transition-colors whitespace-nowrap"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                </a>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#542333]/50 text-[#542333] text-sm font-medium tracking-wide hover:border-[#542333] hover:bg-[#FFFFFF] transition-colors whitespace-nowrap"
                >
                  <span>Discover Our Story</span>
                </Link>
              </div>

              {/* Dynamic Selected Category Preview */}
              <div
                ref={heroTextRef}
                className="pt-6 mt-4 border-t border-[#D8C2A0]/65 space-y-2.5"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                  <span className="tabular-nums">{activeCategory.indexCode}</span>
                  <span aria-hidden="true">·</span>
                  <span>Selected Showcase</span>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#542333]">
                  {activeCategory.editorialTitle}
                </h2>

                <p className="text-sm text-[#29201D]/80 leading-relaxed max-w-md">
                  {activeCategory.shortDescription}
                </p>

                <Link
                  to={activeCategory.route}
                  className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#542333] hover:text-[#29201D] transition-colors"
                >
                  <span>Open {activeCategory.navLabel} Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#AD9061]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Centre Asymmetric Magazine Image Composition */}
            <div className="lg:col-span-4 order-2 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Dominant Fashion Image */}
                <div
                  ref={heroVisualRef}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]/70"
                >
                  <EditorialImage
                    imageKey={activeCategory.imageKey}
                    alt={`${activeCategory.editorialTitle} — Mubarak Textiles living fashion canvas`}
                    priority
                    fallbackLabel={activeCategory.editorialTitle}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Supporting Panel 1 (Bottom-Left) */}
                <div className="hidden sm:block absolute -bottom-6 -left-6 w-36 lg:w-40 aspect-[4/3] bg-[#F8F5EF] p-1.5 border border-[#D8C2A0] shadow-md">
                  <EditorialImage
                    imageKey={activeCategory.secondaryImageKey}
                    alt="Fine textile texture and atelier detail"
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Supporting Panel 2 (Top-Right) */}
                <div className="hidden sm:block absolute -top-5 -right-5 w-32 lg:w-36 aspect-[4/3] bg-[#542333] p-1.5 border border-[#D8C2A0] shadow-md">
                  <EditorialImage
                    imageKey="atelier"
                    alt="Mubarak Textiles boutique gallery atmosphere"
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Dynamic Category Selector (01 — 07) */}
            <div className="lg:col-span-3 order-3 lg:pl-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#29201D]/60 font-semibold mb-3">
                Select Department
              </p>
              <div
                role="tablist"
                aria-label="Hero collection selector"
                className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-1.5 lg:gap-1 border-t border-[#D8C2A0]/60 pt-2"
              >
                {CATEGORIES.map((category, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={category.slug}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveIndex(index)}
                      className={`group flex items-center justify-between gap-2 px-3 py-2.5 text-left transition-colors cursor-pointer border-b border-[#D8C2A0]/35 ${
                        isActive
                          ? 'bg-[#542333] text-[#F8F5EF]'
                          : 'bg-transparent text-[#29201D] hover:bg-[#FFFFFF]'
                      }`}
                    >
                      <span className="flex items-baseline gap-2.5 min-w-0">
                        <span
                          className={`text-xs font-medium tabular-nums ${
                            isActive ? 'text-[#D8C2A0]' : 'text-[#AD9061]'
                          }`}
                        >
                          {category.indexCode}
                        </span>
                        <span className="font-editorial text-lg font-medium truncate">
                          {category.navLabel}
                        </span>
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive
                            ? 'text-[#D8C2A0] translate-x-0'
                            : 'text-[#AD9061] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DISCOVER OUR COLLECTIONS — SEVEN CURATED CARDS */}
      <section
        id="discover-collections"
        className="reveal-section max-w-[1440px] mx-auto px-5 sm:px-8 py-16 lg:py-24"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D8C2A0]/55">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
              Curated Departments
            </p>
            <h2 className="mt-2 font-editorial text-3xl sm:text-5xl font-semibold text-[#29201D]">
              Discover Our Collections
            </h2>
          </div>
          <Link
            to="/new-arrivals"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#542333] hover:text-[#29201D] transition-colors whitespace-nowrap"
          >
            <span>Browse New Arrivals</span>
            <ArrowRight className="w-4 h-4 text-[#AD9061]" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((category, idx) => (
            <Link
              key={category.slug}
              to={category.route}
              className={`group flex flex-col bg-[#FFFFFF] border border-[#D8C2A0]/50 hover:border-[#542333] transition-colors overflow-hidden ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''
              }`}
            >
              <div
                className={`relative overflow-hidden bg-[#EFE7DA] ${
                  idx === 4 ? 'aspect-[4/3] xl:aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <EditorialImage
                  imageKey={category.imageKey}
                  alt={`${category.editorialTitle} showcase`}
                  fallbackLabel={category.editorialTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#AD9061] font-semibold tracking-[0.1em] uppercase">
                    <span className="tabular-nums">{category.indexCode}</span>
                    <span aria-hidden="true">·</span>
                    <span>Collection</span>
                  </div>
                  <h3 className="mt-1.5 font-editorial text-2xl font-semibold text-[#29201D] group-hover:text-[#542333] transition-colors">
                    {category.navLabel}
                  </h3>
                  <p className="mt-2 text-sm text-[#29201D]/75 line-clamp-2 leading-relaxed">
                    {category.featuredNote}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] font-semibold text-[#542333]">
                  <span>Explore</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-[#AD9061] transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. THE MUBARAK STORY & CULTURAL ELEGANCE */}
      <section className="reveal-section bg-[#FFFFFF] border-y border-[#D8C2A0]/50">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]/60">
              <EditorialImage
                imageKey="fabricCraft"
                alt="Fine natural cotton, silk, and embroidered textiles at Mubarak Textiles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
              The Mubarak Story
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#29201D] leading-tight">
              Style for Every Story. Quality for Every Home.
            </h2>
            <p className="text-base text-[#29201D]/80 leading-relaxed">
              Located on Main Street in Sainthamaruthu, Mubarak Textiles brings
              together everyday garments, modest fashion, bridal couture, cultural
              celebration attire, and home textiles under one welcoming roof.
            </p>
            <p className="text-base text-[#29201D]/80 leading-relaxed">
              We serve families across Tamil, Sinhala, Muslim, and Christian
              communities with an unwavering focus on tactile fabric quality,
              respectful craftsmanship, and warm personal service.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
              >
                <span>Read Our Brand Story</span>
                <ArrowRight className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
              </Link>
              <Link
                to="/traditional-wear"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#D8C2A0] text-[#542333] text-sm font-medium hover:bg-[#F8F5EF] transition-colors"
              >
                <span>Explore Cultural Elegance</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL SPOTLIGHTS — MODEST LUXURY, BRIDAL EDIT & HOME LIVING */}
      <section className="reveal-section max-w-[1440px] mx-auto px-5 sm:px-8 py-16 lg:py-24 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Modest Luxury */}
          <div className="bg-[#FFFFFF] border border-[#D8C2A0]/55 flex flex-col justify-between overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-[#EFE7DA]">
              <EditorialImage
                imageKey="abaya"
                alt="Modest luxury abayas and silk hijabs at Mubarak Textiles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 sm:p-9 space-y-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
                Modest Luxury
              </p>
              <h3 className="font-editorial text-3xl font-semibold text-[#29201D]">
                The Abaya &amp; Modest Edit
              </h3>
              <p className="text-sm sm:text-base text-[#29201D]/80 leading-relaxed">
                From breathable everyday crepe abayas to graceful occasion styles
                and weightless hijabs, designed for poise and ease.
              </p>
              <Link
                to="/abaya"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#542333] hover:text-[#29201D]"
              >
                <span>Explore Abaya Collection</span>
                <ArrowRight className="w-4 h-4 text-[#AD9061]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bridal Edit */}
          <div className="bg-[#542333] text-[#F8F5EF] border border-[#D8C2A0]/35 flex flex-col justify-between overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-[#3E1824]">
              <EditorialImage
                imageKey="bridal"
                alt="Mubarak Textiles Bridal Edit — burgundy and antique gold couture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 sm:p-9 space-y-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#D8C2A0] font-semibold">
                Bridal Edit
              </p>
              <h3 className="font-editorial text-3xl font-semibold text-[#F8F5EF]">
                Wedding, Engagement &amp; Reception Couture
              </h3>
              <p className="text-sm sm:text-base text-[#F8F5EF]/85 leading-relaxed">
                Cinematic bridal wear and luminous accessories curated to honour
                your family’s most cherished celebrations.
              </p>
              <Link
                to="/bridal"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D8C2A0] hover:text-[#F8F5EF]"
              >
                <span>Enter Bridal Edit</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Home Living Full-Width Editorial Feature */}
        <div className="bg-[#FFFFFF] border border-[#D8C2A0]/55 grid grid-cols-1 lg:grid-cols-12 items-stretch overflow-hidden">
          <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#EFE7DA]">
            <EditorialImage
              imageKey="homeTextiles"
              alt="Mubarak Textiles Home Living — crisp bedsheets, curtains, and blankets"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center space-y-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
              Home Living
            </p>
            <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#29201D]">
              Textiles Designed for Calm Interiors
            </h3>
            <p className="text-sm sm:text-base text-[#29201D]/80 leading-relaxed">
              Explore breathable cotton bedsheets, tailored pillow covers, soft
              blankets, sheer and draped curtains, and absorbent bath towels for
              everyday comfort.
            </p>
            <div>
              <Link
                to="/home-textiles"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
              >
                <span>Explore Home Textiles</span>
                <ArrowRight className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. STORE LOCATION PREVIEW & DIRECT ENQUIRY */}
      <section className="reveal-section bg-[#F3EDE2] border-t border-[#D8C2A0]/55">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs uppercase tracking-[0.16em] text-[#542333] font-semibold">
              Visit Our Showroom
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#29201D]">
              Experience Our Fabrics in Sainthamaruthu
            </h2>
            <p className="text-sm sm:text-base text-[#29201D]/80 leading-relaxed max-w-2xl">
              Because texture, drape, and colour are best experienced in person,
              our team welcomes you on Main Street to explore our latest seasonal
              stock, compare weaves, and receive attentive styling guidance.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm text-[#29201D]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#542333]" aria-hidden="true" />
                <span>{BRAND_INFO.plusCodeAddress}</span>
              </span>
              <span className="inline-flex items-center gap-2 tabular-nums">
                <Phone className="w-4 h-4 text-[#542333]" aria-hidden="true" />
                <a href={BRAND_INFO.telHref} className="hover:text-[#542333] font-medium">
                  {BRAND_INFO.phoneDisplay}
                </a>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
            <a
              href={buildWhatsAppEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={BRAND_INFO.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFFFFF] border border-[#D8C2A0] text-[#542333] text-sm font-medium hover:border-[#542333] transition-colors"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4 text-[#AD9061]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
