import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { CATEGORIES } from '../data/collections';
import { searchCatalog } from '../utils/catalogHelpers';

interface CollectionSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CollectionSearchModal({
  isOpen,
  onClose,
}: CollectionSearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setQuery('');
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const matches = searchCatalog(query, CATEGORIES);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#29201D]/65 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Find collections and subcategories"
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#F8F5EF] border border-[#D8C2A0] shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#D8C2A0]/60 bg-[#FFFFFF]">
              <Search className="w-5 h-5 text-[#542333] shrink-0" aria-hidden="true" />
              <label htmlFor="collection-finder-input" className="sr-only">
                Search collections or categories
              </label>
              <input
                ref={inputRef}
                id="collection-finder-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Women, Sarees, Abayas, Bridal, Bedsheets..."
                className="w-full bg-transparent text-sm sm:text-base text-[#29201D] placeholder:text-[#29201D]/45 focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close collection finder"
                className="p-2 text-[#29201D]/70 hover:text-[#542333] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#D8C2A0]/35">
              {matches.length === 0 ? (
                <div className="p-8 text-center text-sm text-[#29201D]/70">
                  No collection categories matched “{query}”. Try searching for
                  Sarees, Kurtis, Abaya, Bridal, Tamil, or Bedsheets.
                </div>
              ) : (
                matches.map((match) => (
                  <Link
                    key={`${match.type}-${match.route}-${match.label}`}
                    to={match.route}
                    onClick={onClose}
                    className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-[#FFFFFF] transition-colors group"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-[#AD9061] font-medium">
                        <span>{match.parentLabel ?? 'Category'}</span>
                      </div>
                      <p className="mt-0.5 font-editorial text-xl font-medium text-[#29201D] group-hover:text-[#542333] transition-colors">
                        {match.label}
                      </p>
                      <p className="text-xs sm:text-sm text-[#29201D]/70 line-clamp-1">
                        {match.description}
                      </p>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 text-[#542333] shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
