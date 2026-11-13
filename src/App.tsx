import { useEffect } from 'react';
import Lenis from 'lenis';
import { MotionConfig, motion } from 'motion/react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CATEGORIES } from './data/collections';
import { AbayaPage } from './pages/AbayaPage';
import { AboutPage } from './pages/AboutPage';
import { BridalPage } from './pages/BridalPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { HomeTextilesPage } from './pages/HomeTextilesPage';
import { KidsPage } from './pages/KidsPage';
import { MenPage } from './pages/MenPage';
import { NewArrivalsPage } from './pages/NewArrivalsPage';
import { TraditionalWearPage } from './pages/TraditionalWearPage';
import { WomenPage } from './pages/WomenPage';
import { getPageMeta } from './utils/catalogHelpers';

function AppShell() {
  const location = useLocation();

  // Sync SEO title & meta description per route and scroll smoothly to top
  useEffect(() => {
    const meta = getPageMeta(location.pathname, CATEGORIES);
    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', meta.description);
    }

    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', meta.title);
    }

    const ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) {
      ogDescTag.setAttribute('content', meta.description);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  // Subtle Lenis smooth scrolling respecting reduced-motion preferences
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#29201D]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#542333] focus:text-[#F8F5EF]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0.92 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/abaya" element={<AbayaPage />} />
            <Route path="/bridal" element={<BridalPage />} />
            <Route path="/traditional-wear" element={<TraditionalWearPage />} />
            <Route path="/home-textiles" element={<HomeTextilesPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </MotionConfig>
  );
}
