import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EditorialImage } from '../components/EditorialImage';
import { BRAND_INFO } from '../data/brand';
import { CATEGORIES } from '../data/collections';
import { buildWhatsAppEnquiryUrl } from '../utils/catalogHelpers';

export function AboutPage() {
  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Brand Introduction Hero */}
      <section className="border-b border-[#D8C2A0]/55 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
              About Mubarak Textiles
            </p>
            <h1 className="font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#29201D] leading-[1.08]">
              {BRAND_INFO.tagline}
            </h1>
            <p className="text-base sm:text-lg text-[#29201D]/80 leading-relaxed">
              Situated on Main Street in Sainthamaruthu, Sri Lanka, Mubarak
              Textiles is a dedicated fashion and home-textile destination built
              around thoughtful curation, welcoming hospitality, and dependable
              everyday quality.
            </p>
            <p className="text-base text-[#29201D]/80 leading-relaxed">
              Rather than pursuing fast-moving trends alone, our store brings
              together garments and household textiles that families genuinely
              live in, celebrate in, and return to across seasons.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]/65">
              <EditorialImage
                imageKey="atelier"
                alt="Mubarak Textiles boutique interior inspiration"
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Cultural Inclusivity */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] overflow-hidden bg-[#EFE7DA] border border-[#D8C2A0]/65">
            <EditorialImage
              imageKey="traditional"
              alt="Cultural attire representing Tamil, Sinhala, Muslim, and Christian celebrations"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <p className="text-xs uppercase tracking-[0.16em] text-[#542333] font-semibold">
            Fashion &amp; Lifestyle Philosophy
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#29201D]">
            Dressing Every Generation &amp; Every Community with Respect
          </h2>
          <p className="text-base text-[#29201D]/80 leading-relaxed">
            Sainthamaruthu and the wider Eastern Province are home to vibrant,
            interwoven traditions. Mubarak Textiles takes pride in serving
            Tamil, Sinhala, Muslim, and Christian customers with equal care—from
            modest abayas and silk sarees to tailored menswear, children’s
            festive wear, bridal couture, and peaceful home linens.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#D8C2A0]/55">
            <div>
              <h3 className="font-editorial text-2xl font-semibold text-[#542333]">
                Commitment to Experience
              </h3>
              <p className="mt-2 text-sm text-[#29201D]/80 leading-relaxed">
                Our team assists shoppers personally with sizing, fabric feel,
                and occasion styling—both in-store on Main Street and through
                responsive WhatsApp enquiries.
              </p>
            </div>
            <div>
              <h3 className="font-editorial text-2xl font-semibold text-[#542333]">
                Quality for Every Home
              </h3>
              <p className="mt-2 text-sm text-[#29201D]/80 leading-relaxed">
                Beyond wardrobe essentials, our home textiles department offers
                bedsheets, pillow covers, blankets, curtains, and towels selected
                for lasting everyday comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seven Departments Directory */}
      <section className="bg-[#542333] text-[#F8F5EF] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D8C2A0]/30">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#D8C2A0] font-semibold">
                Across Our Store
              </p>
              <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold">
                Seven Curated Departments
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#D8C2A0] hover:text-[#F8F5EF]"
            >
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Visit Main Street, Sainthamaruthu</span>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                to={category.route}
                className="group p-6 bg-[#3E1824] border border-[#D8C2A0]/25 hover:border-[#D8C2A0] transition-colors flex flex-col justify-between gap-4"
              >
                <div>
                  <p className="text-xs text-[#D8C2A0] tabular-nums">
                    {category.indexCode}
                  </p>
                  <h3 className="mt-1 font-editorial text-2xl font-semibold text-[#F8F5EF]">
                    {category.navLabel}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#F8F5EF]/75 leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D8C2A0] font-semibold">
                  <span>Explore</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}

            <div className="p-6 bg-[#D8C2A0] text-[#29201D] flex flex-col justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#542333]">
                  Personal Service
                </p>
                <h3 className="mt-1 font-editorial text-2xl font-semibold">
                  Speak With Our Team
                </h3>
                <p className="mt-2 text-sm text-[#29201D]/80 leading-relaxed">
                  Message us on WhatsApp or call {BRAND_INFO.phoneDisplay} for
                  store guidance.
                </p>
              </div>
              <a
                href={buildWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#542333]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
