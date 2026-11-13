import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, MessageCircle, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_INFO } from '../data/brand';
import { CATEGORIES, type CategorySlug } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';
import { CollectionSearchModal } from './CollectionSearchModal';
import { EditorialImage } from './EditorialImage';
import { MobileNavDrawer } from './MobileNavDrawer';

export function Header() {
  const location = useLocation();
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [previewSlug, setPreviewSlug] = useState<CategorySlug>('women');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const previewCategory =
    CATEGORIES.find((cat) => cat.slug === previewSlug) ?? CATEGORIES[0];

  const isCollectionRouteActive = CATEGORIES.some(
    (cat) => location.pathname === cat.route,
  );

  const clearCloseTimer = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsCollectionsOpen(false);
    }, 120);
  };

  const openCollectionsMenu = () => {
    clearCloseTimer();
    const currentCat = CATEGORIES.find((cat) => cat.route === location.pathname);
    if (currentCat) {
      setPreviewSlug(currentCat.slug);
    }
    setIsCollectionsOpen(true);
  };

  useEffect(() => {
    setIsCollectionsOpen(false);
    setIsMobileOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCollectionsOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const isRouteActive = (route: string) => {
    if (route === '/') return location.pathname === '/';
    return location.pathname === route;
  };

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={scheduleClose}
        onMouseEnter={clearCloseTimer}
        onBlur={(event) => {
          if (!headerRef.current?.contains(event.relatedTarget as Node)) {
            setIsCollectionsOpen(false);
          }
        }}
        className="sticky top-0 z-40 bg-[#542333] text-[#F8F5EF] border-b border-[#D8C2A0]/25"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8 h-16 lg:h-[74px] flex items-center justify-between gap-8">
          {/* Left: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden p-2 -ml-2 text-[#F8F5EF] hover:text-[#D8C2A0] transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link
              to="/"
              className="font-editorial text-xl sm:text-2xl font-semibold tracking-wide text-[#F8F5EF] hover:text-[#D8C2A0] transition-colors whitespace-nowrap shrink-0"
            >
              {BRAND_INFO.name}
            </Link>
          </div>

          {/* Centre: Clean 5-Item Desktop Navigation with Our Collections Dropdown */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[13px] xl:text-sm font-medium tracking-[0.04em]"
          >
            <Link
              to="/"
              onMouseEnter={() => setIsCollectionsOpen(false)}
              onFocus={() => setIsCollectionsOpen(false)}
              data-active={isRouteActive('/')}
              className="editorial-underline py-1 text-[#F8F5EF]/90 hover:text-[#D8C2A0] data-[active=true]:text-[#D8C2A0] transition-colors whitespace-nowrap shrink-0"
            >
              Home
            </Link>

            <button
              type="button"
              onMouseEnter={openCollectionsMenu}
              onFocus={openCollectionsMenu}
              onClick={() =>
                isCollectionsOpen
                  ? setIsCollectionsOpen(false)
                  : openCollectionsMenu()
              }
              aria-expanded={isCollectionsOpen}
              aria-controls="mega-menu-collections"
              data-active={isCollectionsOpen || isCollectionRouteActive}
              className="editorial-underline inline-flex items-center gap-1.5 py-1 text-[#F8F5EF]/90 hover:text-[#D8C2A0] data-[active=true]:text-[#D8C2A0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Our Collections</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#D8C2A0] transition-transform duration-200 ${
                  isCollectionsOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <Link
              to="/new-arrivals"
              onMouseEnter={() => setIsCollectionsOpen(false)}
              onFocus={() => setIsCollectionsOpen(false)}
              data-active={isRouteActive('/new-arrivals')}
              className="editorial-underline py-1 text-[#F8F5EF]/90 hover:text-[#D8C2A0] data-[active=true]:text-[#D8C2A0] transition-colors whitespace-nowrap shrink-0"
            >
              New Arrivals
            </Link>

            <Link
              to="/about"
              onMouseEnter={() => setIsCollectionsOpen(false)}
              onFocus={() => setIsCollectionsOpen(false)}
              data-active={isRouteActive('/about')}
              className="editorial-underline py-1 text-[#F8F5EF]/90 hover:text-[#D8C2A0] data-[active=true]:text-[#D8C2A0] transition-colors whitespace-nowrap shrink-0"
            >
              About
            </Link>

            <Link
              to="/contact"
              onMouseEnter={() => setIsCollectionsOpen(false)}
              onFocus={() => setIsCollectionsOpen(false)}
              data-active={isRouteActive('/contact')}
              className="editorial-underline py-1 text-[#F8F5EF]/90 hover:text-[#D8C2A0] data-[active=true]:text-[#D8C2A0] transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </Link>
          </nav>

          {/* Right: Quick Finder & WhatsApp Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search collections and categories"
              className="w-9 h-9 flex items-center justify-center text-[#F8F5EF]/90 hover:text-[#D8C2A0] border border-[#D8C2A0]/30 hover:border-[#D8C2A0] transition-colors cursor-pointer shrink-0"
            >
              <Search className="w-4 h-4" />
            </button>

            <a
              href={buildWhatsAppEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 xl:px-4 py-2 bg-[#D8C2A0] text-[#29201D] text-xs font-semibold tracking-wide hover:bg-[#F8F5EF] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#542333]" aria-hidden="true" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="hidden xl:inline">Contact</span>
            </a>
          </div>
        </div>

        {/* Subtle backdrop scrim when Our Collections mega menu is active */}
        <AnimatePresence>
          {isCollectionsOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              aria-hidden="true"
              onClick={() => setIsCollectionsOpen(false)}
              className="hidden lg:block fixed inset-x-0 top-[74px] bottom-0 bg-[#29201D]/30 -z-10"
            />
          )}
        </AnimatePresence>

        {/* Our Collections Editorial Mega Dropdown */}
        <AnimatePresence>
          {isCollectionsOpen && (
            <motion.div
              id="mega-menu-collections"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={clearCloseTimer}
              style={{ backgroundColor: '#F8F5EF' }}
              className="hidden lg:block absolute left-0 right-0 top-full bg-[#F8F5EF] text-[#29201D] border-b border-[#D8C2A0] shadow-2xl z-50"
            >
              <div className="max-w-[1440px] mx-auto px-6 xl:px-8 py-8 grid grid-cols-12 gap-7 items-stretch">
                {/* Column 1: All 7 Main Categories */}
                <div className="col-span-3 pr-5 border-r border-[#D8C2A0]/50 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold mb-3">
                      Our Collections
                    </p>
                    <ul className="space-y-1">
                      {CATEGORIES.map((category) => {
                        const isPreviewed = previewSlug === category.slug;
                        const isCurrentPage = isRouteActive(category.route);
                        return (
                          <li key={category.slug}>
                            <Link
                              to={category.route}
                              onMouseEnter={() => setPreviewSlug(category.slug)}
                              onFocus={() => setPreviewSlug(category.slug)}
                              onClick={() => setIsCollectionsOpen(false)}
                              className={`flex items-center justify-between gap-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                                isPreviewed
                                  ? 'bg-[#542333] text-[#F8F5EF]'
                                  : isCurrentPage
                                    ? 'bg-[#FFFFFF] text-[#542333]'
                                    : 'text-[#29201D] hover:bg-[#FFFFFF]'
                              }`}
                            >
                              <span className="flex items-baseline gap-2.5">
                                <span
                                  className={`text-xs tabular-nums ${
                                    isPreviewed ? 'text-[#D8C2A0]' : 'text-[#AD9061]'
                                  }`}
                                >
                                  {category.indexCode}
                                </span>
                                <span className="font-editorial text-lg font-medium">
                                  {category.navLabel}
                                </span>
                              </span>
                              <ArrowRight
                                className={`w-3.5 h-3.5 shrink-0 ${
                                  isPreviewed
                                    ? 'text-[#D8C2A0]'
                                    : 'text-[#AD9061] opacity-50'
                                }`}
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D8C2A0]/45">
                    <Link
                      to="/new-arrivals"
                      onClick={() => setIsCollectionsOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-semibold text-[#542333] hover:text-[#29201D]"
                    >
                      <span>View New Arrivals</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#AD9061]" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Active Category Description & Subcategories */}
                <div className="col-span-3 flex flex-col justify-between pr-4 border-r border-[#D8C2A0]/45">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                      Collection {previewCategory.indexCode}
                    </p>
                    <h2 className="mt-1 font-editorial text-3xl font-semibold text-[#542333]">
                      {previewCategory.editorialTitle}
                    </h2>
                    <p className="mt-2 text-sm text-[#29201D]/80 leading-relaxed">
                      {previewCategory.shortDescription}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#D8C2A0]/45">
                      <p className="text-xs uppercase tracking-[0.12em] text-[#29201D]/60 mb-3">
                        Browse Subcategories
                      </p>
                      <ul className="space-y-1.5">
                        {previewCategory.subcategories.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              to={`${previewCategory.route}?sub=${encodeURIComponent(sub.slug)}`}
                              onClick={() => setIsCollectionsOpen(false)}
                              className="group inline-flex items-center gap-1.5 text-sm text-[#29201D] hover:text-[#542333] transition-colors"
                            >
                              <span>{sub.label}</span>
                              <ArrowRight
                                className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#AD9061]"
                                aria-hidden="true"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column 3: High-Quality Editorial Photograph */}
                <div className="col-span-3">
                  <Link
                    to={previewCategory.route}
                    onClick={() => setIsCollectionsOpen(false)}
                    className="group block relative h-full min-h-[280px] overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]/50"
                  >
                    <EditorialImage
                      imageKey={previewCategory.imageKey}
                      alt={`${previewCategory.editorialTitle} editorial preview`}
                      priority
                      fallbackLabel={previewCategory.editorialTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Column 4: Featured Collection Card */}
                <div className="col-span-3 flex flex-col justify-between bg-[#FFFFFF] border border-[#D8C2A0]/55 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                      Featured Highlight
                    </p>
                    <h3 className="mt-2 font-editorial text-2xl font-semibold text-[#29201D]">
                      {previewCategory.featuredTitle}
                    </h3>
                    <p className="mt-3 text-sm text-[#29201D]/80 leading-relaxed">
                      {previewCategory.featuredNote}
                    </p>
                    <p className="mt-3 text-xs text-[#29201D]/65 italic">
                      {previewCategory.creativeDirection}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D8C2A0]/40 flex flex-col gap-3">
                    <Link
                      to={previewCategory.route}
                      onClick={() => setIsCollectionsOpen(false)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#542333] text-[#F8F5EF] text-xs font-semibold tracking-wider uppercase hover:bg-[#3E1824] transition-colors whitespace-nowrap"
                    >
                      <span>Explore {previewCategory.navLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D8C2A0]" aria-hidden="true" />
                    </Link>

                    <a
                      href={buildWhatsAppEnquiryUrl(undefined, previewCategory.navLabel)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-xs font-medium text-[#542333] hover:text-[#29201D] underline underline-offset-4 whitespace-nowrap"
                    >
                      Enquire via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileNavDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      <CollectionSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
