import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { BRAND_INFO, SOCIAL_CHANNELS } from '../data/brand';
import { CATEGORIES } from '../data/collections';
import {
  buildWhatsAppEnquiryUrl,
  validateEnquiryForm,
  type EnquiryFormValues,
} from '../utils/catalogHelpers';

export function ContactPage() {
  const [values, setValues] = useState<EnquiryFormValues>({
    name: '',
    phone: '',
    category: 'General Collection Enquiry',
    message: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof EnquiryFormValues, string>>
  >({});
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validation = validateEnquiryForm(values);
    setErrors(validation.errors);
    if (validation.isValid) {
      setDemoSubmitted(true);
    } else {
      setDemoSubmitted(false);
    }
  };

  const whatsappFromForm = buildWhatsAppEnquiryUrl(
    undefined,
    undefined,
    `Hello Mubarak Textiles, my name is ${values.name || 'a customer'} (${values.phone || 'no phone'}). I would like to enquire about ${values.category}: ${values.message}`,
  );

  return (
    <div className="bg-[#F8F5EF] text-[#29201D]">
      {/* Contact Header */}
      <section className="border-b border-[#D8C2A0]/55 bg-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-20">
          <p className="text-xs uppercase tracking-[0.16em] text-[#AD9061] font-semibold">
            Visit &amp; Connect
          </p>
          <h1 className="mt-2 font-editorial text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#29201D]">
            Contact Mubarak Textiles
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#29201D]/80 max-w-2xl leading-relaxed">
            Visit our showroom on Main Street in Sainthamaruthu, call our team
            directly, or reach out via WhatsApp for collection availability and
            personal styling assistance.
          </p>
        </div>
      </section>

      {/* Main Split: Store Details & Map + Demo Enquiry Form */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Actions & Location */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FFFFFF] border border-[#D8C2A0]/60 p-7 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                Store Address
              </p>
              <h2 className="mt-1 font-editorial text-2xl font-semibold text-[#542333]">
                {BRAND_INFO.name}
              </h2>
              <p className="mt-2 flex items-start gap-2.5 text-sm text-[#29201D]/85 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#542333] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BRAND_INFO.plusCodeAddress}</span>
              </p>
            </div>

            <div className="pt-4 border-t border-[#D8C2A0]/45">
              <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                Telephone &amp; WhatsApp
              </p>
              <p className="mt-2 flex items-center gap-2.5 text-base font-medium tabular-nums text-[#29201D]">
                <Phone className="w-4 h-4 text-[#542333]" aria-hidden="true" />
                <a href={BRAND_INFO.telHref} className="hover:text-[#542333]">
                  {BRAND_INFO.phoneDisplay}
                </a>
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={BRAND_INFO.telHref}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#542333] text-[#542333] text-sm font-medium hover:bg-[#542333] hover:text-[#F8F5EF] transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call Store</span>
                </a>

                <a
                  href={buildWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={BRAND_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#D8C2A0] text-[#29201D] text-sm font-medium hover:border-[#542333] transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4 text-[#AD9061]" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8C2A0]/45">
              <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                Social Channels
              </p>
              <p className="mt-1.5 text-xs text-[#29201D]/70 leading-relaxed">
                Official Facebook, Instagram, and TikTok profile links have not
                been published here yet. Please ask our store team on WhatsApp
                for our current verified social links.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {SOCIAL_CHANNELS.map((channel) => (
                  <a
                    key={channel.id}
                    href={buildWhatsAppEnquiryUrl(
                      undefined,
                      undefined,
                      `Hello Mubarak Textiles, please share your official ${channel.name} link.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 border border-[#D8C2A0]/70 text-xs font-medium text-[#542333] hover:bg-[#F8F5EF] transition-colors"
                  >
                    Request {channel.name} Link
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-[#D8C2A0]/70 aspect-[16/10] bg-[#EFE7DA]">
            <iframe
              title="Mubarak Textiles Main Street Sainthamaruthu Map"
              src={BRAND_INFO.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Right Column: Clearly Labeled Demonstration Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#FFFFFF] border border-[#D8C2A0]/65 p-7 sm:p-10">
            <div className="pb-6 border-b border-[#D8C2A0]/45">
              <p className="text-xs uppercase tracking-[0.14em] text-[#AD9061] font-semibold">
                Demonstration Enquiry Interface
              </p>
              <h2 className="mt-1.5 font-editorial text-3xl font-semibold text-[#29201D]">
                Prepare a Collection Enquiry
              </h2>
              <p className="mt-2 text-sm text-[#29201D]/75 leading-relaxed">
                This enquiry form is a frontend demonstration without a backend
                mail server. After validating your note below, you can send it
                directly to our store team via WhatsApp or call{' '}
                <span className="tabular-nums font-medium">
                  {BRAND_INFO.phoneDisplay}
                </span>
                .
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="enquiry-name"
                    className="block text-xs uppercase tracking-[0.1em] font-semibold text-[#542333] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    value={values.name}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="e.g. Fathima Nazeer"
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D8C2A0] text-sm text-[#29201D] focus:border-[#542333] focus:outline-none"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#542333] font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="block text-xs uppercase tracking-[0.1em] font-semibold text-[#542333] mb-2"
                  >
                    Phone or WhatsApp Number
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    value={values.phone}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="e.g. 077 123 4567"
                    className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D8C2A0] text-sm text-[#29201D] focus:border-[#542333] focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-[#542333] font-medium">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="enquiry-category"
                  className="block text-xs uppercase tracking-[0.1em] font-semibold text-[#542333] mb-2"
                >
                  Collection Area
                </label>
                <select
                  id="enquiry-category"
                  value={values.category}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, category: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D8C2A0] text-sm text-[#29201D] focus:border-[#542333] focus:outline-none"
                >
                  <option value="General Collection Enquiry">
                    General Collection Enquiry
                  </option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.slug} value={cat.editorialTitle}>
                      {cat.editorialTitle}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1.5 text-xs text-[#542333] font-medium">
                    {errors.category}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="enquiry-message"
                  className="block text-xs uppercase tracking-[0.1em] font-semibold text-[#542333] mb-2"
                >
                  Enquiry Note
                </label>
                <textarea
                  id="enquiry-message"
                  rows={4}
                  value={values.message}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="Share the styles, sizes, or fabrics you would like to ask our store team about..."
                  className="w-full px-4 py-3 bg-[#F8F5EF] border border-[#D8C2A0] text-sm text-[#29201D] focus:border-[#542333] focus:outline-none"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-[#542333] font-medium">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#542333] text-[#F8F5EF] text-sm font-medium hover:bg-[#3E1824] transition-colors cursor-pointer"
                >
                  Validate Demo Enquiry
                </button>

                <a
                  href={whatsappFromForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#542333] text-[#542333] text-sm font-medium hover:bg-[#F8F5EF] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#AD9061]" aria-hidden="true" />
                  <span>Send via WhatsApp Instead</span>
                </a>
              </div>

              {demoSubmitted && (
                <div
                  role="status"
                  className="p-5 bg-[#F8F5EF] border border-[#AD9061] space-y-3"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-5 h-5 text-[#542333] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#29201D]">
                        Demo Form Validated (Not Submitted to a Server)
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-[#29201D]/80 leading-relaxed">
                        Because this showcase site has no backend database or
                        email server, your enquiry was not sent automatically.
                        Click below to send your prepared message directly to{' '}
                        {BRAND_INFO.phoneDisplay} on WhatsApp.
                      </p>
                    </div>
                  </div>

                  <a
                    href={whatsappFromForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#542333] text-[#F8F5EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#3E1824] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#D8C2A0]" aria-hidden="true" />
                    <span>Open Prepared Message in WhatsApp</span>
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
