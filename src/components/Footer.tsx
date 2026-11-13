import { useState } from 'react';
import { ExternalLink, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, SOCIAL_CHANNELS } from '../data/brand';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function Footer() {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  return (
    <footer className="bg-[#542333] text-[#F8F5EF] border-t border-[#D8C2A0]/30">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 — Brand Identity */}
          <div className="lg:col-span-3 space-y-4">
            <Link
              to="/"
              className="inline-block font-editorial text-3xl font-semibold tracking-wide text-[#F8F5EF] hover:text-[#D8C2A0] transition-colors"
            >
              {BRAND_INFO.name}
            </Link>
            <p className="font-editorial italic text-lg text-[#D8C2A0]">
              {BRAND_INFO.tagline}
            </p>
            <p className="text-sm text-[#F8F5EF]/80 leading-relaxed max-w-xs">
              A clothing and home-textile showcase in Sainthamaruthu serving
              women, men, children, brides, and homes across Sri Lanka’s diverse
              communities.
            </p>
          </div>

          {/* Column 2 — Explore Collections */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[#D8C2A0] font-semibold">
              Explore Collections
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    to={category.route}
                    className="text-[#F8F5EF]/85 hover:text-[#D8C2A0] transition-colors"
                  >
                    {category.navLabel}
                  </Link>
                </li>
              ))}
              <li className="pt-1 border-t border-[#D8C2A0]/20">
                <Link
                  to="/new-arrivals"
                  className="text-[#F8F5EF]/85 hover:text-[#D8C2A0] transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#F8F5EF]/85 hover:text-[#D8C2A0] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#F8F5EF]/85 hover:text-[#D8C2A0] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[#D8C2A0] font-semibold">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-[#F8F5EF]/85">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#D8C2A0] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BRAND_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5 tabular-nums">
                <Phone className="w-4 h-4 text-[#D8C2A0] shrink-0" aria-hidden="true" />
                <a
                  href={BRAND_INFO.telHref}
                  className="hover:text-[#D8C2A0] transition-colors"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={BRAND_INFO.telHref}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#D8C2A0]/50 text-xs font-medium tracking-wide text-[#F8F5EF] hover:bg-[#D8C2A0] hover:text-[#29201D] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Call Store</span>
              </a>
              <a
                href={buildWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D8C2A0] text-[#29201D] text-xs font-semibold tracking-wide hover:bg-[#F8F5EF] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#542333]" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-3 border-t border-[#D8C2A0]/20">
              <p className="text-xs uppercase tracking-[0.12em] text-[#D8C2A0]/80 mb-2">
                Social Channels
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                {SOCIAL_CHANNELS.map((channel) => (
                  <button
                    key={channel.id}
                    type="button"
                    onClick={() =>
                      setSocialNotice(
                        `${channel.name}: Ask our team via WhatsApp (${BRAND_INFO.phoneDisplay}) for our current official ${channel.name} handle.`,
                      )
                    }
                    className="text-[#F8F5EF]/80 hover:text-[#D8C2A0] underline underline-offset-4 cursor-pointer"
                  >
                    {channel.name}
                  </button>
                ))}
              </div>
              {socialNotice && (
                <p className="mt-2 text-xs text-[#D8C2A0] leading-relaxed">
                  {socialNotice}
                </p>
              )}
            </div>
          </div>

          {/* Column 4 — Find Our Store (Embedded Google Maps) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xs uppercase tracking-[0.14em] text-[#D8C2A0] font-semibold">
                Find Our Store
              </h3>
              <a
                href={BRAND_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8C2A0] hover:text-[#F8F5EF] transition-colors whitespace-nowrap"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-lg overflow-hidden border border-[#D8C2A0]/45 bg-[#3E1824] aspect-[16/10] w-full">
              <iframe
                title="Mubarak Textiles Sainthamaruthu Location Map"
                src={BRAND_INFO.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>

            <p className="text-xs text-[#F8F5EF]/80 leading-relaxed">
              {BRAND_INFO.plusCodeAddress}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 pb-8 sm:pb-4 sm:pr-36 border-t border-[#D8C2A0]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F8F5EF]/75">
          <p>© {new Date().getFullYear()} Mubarak Textiles. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {SOCIAL_CHANNELS.map((channel) => (
              <button
                key={channel.id}
                type="button"
                onClick={() =>
                  setSocialNotice(
                    `${channel.name}: Official profile links are shared directly by our store team via WhatsApp.`,
                  )
                }
                aria-label={`${channel.name} channel information`}
                className="hover:text-[#D8C2A0] transition-colors cursor-pointer"
              >
                {channel.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
