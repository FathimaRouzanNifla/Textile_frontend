import test from 'node:test';
import assert from 'node:assert/strict';
import { CATEGORIES, SHOWCASE_PREVIEWS } from '../data/collections';
import {
  buildWhatsAppEnquiryUrl,
  filterCategoryPreviews,
  getPageMeta,
  searchCatalog,
  validateEnquiryForm,
} from './catalogHelpers';

test('buildWhatsAppEnquiryUrl generates proper international link for Mubarak Textiles', () => {
  const defaultUrl = buildWhatsAppEnquiryUrl();
  assert.ok(defaultUrl.startsWith('https://wa.me/94672229194?text='));
  assert.ok(decodeURIComponent(defaultUrl).includes('Mubarak Textiles'));

  const itemUrl = buildWhatsAppEnquiryUrl('Silk Saree', 'Women');
  assert.ok(decodeURIComponent(itemUrl).includes('Silk Saree'));
  assert.ok(decodeURIComponent(itemUrl).includes('Women'));
});

test('searchCatalog returns all 7 categories for empty query and matches subcategories cleanly', () => {
  const all = searchCatalog('', CATEGORIES);
  assert.equal(all.length, 7);

  const hijabs = searchCatalog('hijab', CATEGORIES);
  assert.ok(hijabs.some((m) => m.label === 'Hijabs' && m.route.includes('/abaya?sub=hijabs')));

  const beds = searchCatalog('bedsheet', CATEGORIES);
  assert.ok(beds.some((m) => m.label === 'Bedsheets' && m.route.includes('/home-textiles')));
});

test('filterCategoryPreviews filters accurately and falls back gracefully to category items', () => {
  const womenAll = filterCategoryPreviews(SHOWCASE_PREVIEWS, 'women');
  assert.equal(womenAll.length, 3);

  const womenSarees = filterCategoryPreviews(SHOWCASE_PREVIEWS, 'women', 'sarees');
  assert.equal(womenSarees.length, 1);
  assert.equal(womenSarees[0].subcategory, 'Sarees');

  const fallback = filterCategoryPreviews(SHOWCASE_PREVIEWS, 'women', 'tops');
  assert.equal(fallback.length, 3);
});

test('validateEnquiryForm rejects incomplete inputs and accepts valid enquiries', () => {
  const invalid = validateEnquiryForm({
    name: 'A',
    phone: '123',
    category: '',
    message: 'Hi',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.category);
  assert.ok(invalid.errors.message);

  const valid = validateEnquiryForm({
    name: 'Amina Farook',
    phone: '0771234567',
    category: 'Bridal',
    message: 'Enquiring about bridal consultation hours.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('getPageMeta resolves titles for home, category, and utility routes', () => {
  assert.ok(getPageMeta('/', CATEGORIES).title.includes('Mubarak Textiles'));
  assert.ok(getPageMeta('/abaya', CATEGORIES).title.includes('Abaya & Modest Wear'));
  assert.ok(getPageMeta('/contact', CATEGORIES).title.includes('Contact'));
});
