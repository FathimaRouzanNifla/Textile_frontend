import { BRAND_INFO } from '../data/brand';
import type { CategoryMeta, ShowcasePreviewItem } from '../data/collections';

export interface SearchMatch {
  type: 'category' | 'subcategory';
  label: string;
  parentLabel?: string;
  route: string;
  description: string;
}

export interface EnquiryFormValues {
  name: string;
  phone: string;
  category: string;
  message: string;
}

export interface EnquiryValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof EnquiryFormValues, string>>;
}

export interface PageMeta {
  title: string;
  description: string;
}

/**
 * Generates an international WhatsApp click-to-chat URL for Mubarak Textiles (+94672229194).
 */
export function buildWhatsAppEnquiryUrl(
  itemTitle?: string,
  categoryLabel?: string,
  customMessage?: string,
): string {
  let message = BRAND_INFO.defaultWhatsAppMessage;
  if (customMessage && customMessage.trim().length > 0) {
    message = customMessage.trim();
  } else if (itemTitle && categoryLabel) {
    message = `Hello Mubarak Textiles, I would like to enquire about "${itemTitle}" in your ${categoryLabel} collection.`;
  } else if (categoryLabel) {
    message = `Hello Mubarak Textiles, I would like to enquire about your ${categoryLabel} collection.`;
  }
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Searches across categories and subcategories without mutating input data.
 */
export function searchCatalog(
  query: string,
  categories: CategoryMeta[],
): SearchMatch[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return categories.map((cat) => ({
      type: 'category',
      label: cat.editorialTitle,
      route: cat.route,
      description: cat.shortDescription,
    }));
  }

  const results: SearchMatch[] = [];
  for (const cat of categories) {
    const catMatches =
      cat.navLabel.toLowerCase().includes(normalized) ||
      cat.editorialTitle.toLowerCase().includes(normalized) ||
      cat.shortDescription.toLowerCase().includes(normalized);

    if (catMatches) {
      results.push({
        type: 'category',
        label: cat.editorialTitle,
        route: cat.route,
        description: cat.shortDescription,
      });
    }

    for (const sub of cat.subcategories) {
      if (
        sub.label.toLowerCase().includes(normalized) ||
        sub.summary.toLowerCase().includes(normalized)
      ) {
        results.push({
          type: 'subcategory',
          label: sub.label,
          parentLabel: cat.navLabel,
          route: `${cat.route}?sub=${encodeURIComponent(sub.slug)}`,
          description: sub.summary,
        });
      }
    }
  }
  return results;
}

/**
 * Filters lookbook previews for a category and optional subcategory label/slug.
 */
export function filterCategoryPreviews(
  previews: ShowcasePreviewItem[],
  categorySlug: string,
  subcategoryQuery?: string | null,
): ShowcasePreviewItem[] {
  const inCategory = previews.filter((item) => item.categorySlug === categorySlug);
  if (!subcategoryQuery || subcategoryQuery === 'all') {
    return inCategory;
  }
  const normalized = subcategoryQuery.trim().toLowerCase().replace(/-/g, ' ');
  const matched = inCategory.filter(
    (item) => item.subcategory.toLowerCase() === normalized,
  );
  // If no exact match exists for that specific subcategory preview, return all category previews cleanly
  return matched.length > 0 ? matched : inCategory;
}

/**
 * Validates the Contact page demonstration enquiry form strictly without substituting empty fields.
 */
export function validateEnquiryForm(
  values: EnquiryFormValues,
): EnquiryValidationResult {
  const errors: Partial<Record<keyof EnquiryFormValues, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const digits = values.phone.replace(/[^\d+]/g, '');
  if (digits.length < 7) {
    errors.phone = 'Please enter a valid contact phone or WhatsApp number.';
  }

  if (!values.category.trim()) {
    errors.category = 'Please select a collection area.';
  }

  if (values.message.trim().length < 8) {
    errors.message = 'Please share a brief enquiry note (at least 8 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Resolves document title and meta description for any route path.
 */
export function getPageMeta(pathname: string, categories: CategoryMeta[]): PageMeta {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  if (cleanPath === '/') {
    return {
      title: 'Mubarak Textiles — Style for Every Story. Quality for Every Home.',
      description:
        'Explore luxury fashion, modest wear, bridal, cultural attire, and home textiles at Mubarak Textiles in Sainthamaruthu, Sri Lanka.',
    };
  }
  if (cleanPath === '/new-arrivals') {
    return {
      title: 'New Arrivals | Mubarak Textiles',
      description:
        'Browse curated seasonal lookbook highlights across Women, Men, Kids, Abaya, Bridal, Traditional Wear, and Home Textiles.',
    };
  }
  if (cleanPath === '/about') {
    return {
      title: 'About Us | Mubarak Textiles',
      description:
        'Discover Mubarak Textiles in Sainthamaruthu — serving every community with thoughtful clothing and home textiles.',
    };
  }
  if (cleanPath === '/contact') {
    return {
      title: 'Contact & Visit Us | Mubarak Textiles',
      description:
        'Visit Mubarak Textiles at Main Street, Sainthamaruthu 32280, Sri Lanka or call 0672 229 194.',
    };
  }

  const matchedCategory = categories.find((c) => c.route === cleanPath);
  if (matchedCategory) {
    return {
      title: `${matchedCategory.editorialTitle} | Mubarak Textiles`,
      description: matchedCategory.shortDescription,
    };
  }

  return {
    title: 'Mubarak Textiles — Sainthamaruthu, Sri Lanka',
    description: BRAND_INFO.tagline,
  };
}
