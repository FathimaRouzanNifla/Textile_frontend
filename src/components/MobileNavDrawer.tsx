import { useEffect, useState } from 'react';
import { ChevronDown, MessageCircle, Phone, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND_INFO } from '../data/brand';
import { CATEGORIES, type CategorySlug } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const [expandedSlug, setExpandedSlug] = useState<CategorySlug | null>('women');

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const toggleAccordion = (slug: CategorySlug) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 lg:hidden bg-[#29201D]/60 backdrop-blur-xs"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm h-full bg-[#F8F5EF] text-[#29201D] flex flex-col justify-between overflow-y-auto border-r border-[#D8C2A0]"
          >
            <div>
              {/* Drawer Header */}
              <div className="px-5 py-4 bg-[#542333] text-[#F8F5EF] flex items-center justify-between border-b border-[#D8C2A0]/30">
                <Link
                  to="/"
                  onClick={onClose}
                  className="font-editorial text-2xl font-semibold tracking-wide"
                >
                  {BRAND_INFO.name}
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 flex items-center justify-center text-[#F8F5EF] hover:text-[#D8C2A0] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Direct Core Links */}
              <div className="px-5 py-4 border-b border-[#D8C2A0]/45 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                <Link
                  to="/"
                  onClick={onClose}
                  className="py-1 text-[#542333] hover:text-[#29201D]"
                >
                  Home
                </Link>
                <Link
                  to="/new-arrivals"
                  onClick={onClose}
                  className="py-1 text-[#542333] hover:text-[#29201D]"
                >
                  New Arrivals
                </Link>
                <Link
                  to="/about"
                  onClick={onClose}
                  className="py-1 text-[#542333] hover:text-[#29201D]"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="py-1 text-[#542333] hover:text-[#29201D]"
                >
                  Contact
                </Link>
              </div>

              {/* Expandable Category Accordions */}
              <div className="px-5 pt-4 pb-1">
                <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                  Our Collections
                </p>
              </div>
              <nav aria-label="Our Collections categories" className="divide-y divide-[#D8C2A0]/40">
                {CATEGORIES.map((category) => {
                  const isExpanded = expandedSlug === category.slug;
                  return (
                    <div key={category.slug} className="px-5">
                      <button
                        type="button"
                        onClick={() => toggleAccordion(category.slug)}
                        aria-expanded={isExpanded}
                        className="w-full py-4 flex items-center justify-between text-left cursor-pointer"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="text-xs font-medium text-[#AD9061] tabular-nums">
                            {category.indexCode}
                          </span>
                          <span className="font-editorial text-xl font-medium text-[#29201D]">
                            {category.navLabel}
                          </span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#542333] transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isExpanded && (
                        <div className="pb-4 pl-7 space-y-2.5">
                          <Link
                            to={category.route}
                            onClick={onClose}
                            className="block text-xs uppercase tracking-[0.12em] font-semibold text-[#542333] py-1"
                          >
                            View All {category.navLabel} →
                          </Link>
                          <ul className="space-y-1.5">
                            {category.subcategories.map((sub) => (
                              <li key={sub.slug}>
                                <Link
                                  to={`${category.route}?sub=${encodeURIComponent(sub.slug)}`}
                                  onClick={onClose}
                                  className="block py-1 text-sm text-[#29201D]/85 hover:text-[#542333]"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Contact Actions */}
            <div className="p-5 bg-[#FFFFFF] border-t border-[#D8C2A0]/60 space-y-3">
              <a
                href={buildWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#542333] text-[#F8F5EF] text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                <span>WhatsApp Store</span>
              </a>
              <a
                href={BRAND_INFO.telHref}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#542333] text-[#542333] text-sm font-medium"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call {BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
