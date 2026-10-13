import { useEffect, useState } from 'react';
import { Menu, X, Hammer, BadgeCheck, Phone, ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/lib/navigation';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Cost Calculator', href: '#calculator' },
  { label: 'Neighborhoods', href: '#neighborhoods' },
  { label: 'Free Quote', href: '#quote' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-2xl shadow-black/50' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-champagne-400/30 bg-ink-800/80 glow-gold">
                <Hammer className="h-5 w-5 text-champagne-300" strokeWidth={1.5} />
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-lg font-semibold leading-tight text-white">
                  Staten Island <span className="text-gradient-gold">Drywall</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-steel-300">
                  <BadgeCheck className="h-3 w-3 text-champagne-400" />
                  Local drywall lead-generation site
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-steel-200 transition-colors hover:text-champagne-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTAs + Mobile toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Phone button with number */}
              <a
                href="tel:+17185550100"
                className="hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-champagne-400/40 hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-champagne-300" />
                (718) 555-0100
              </a>

              {/* Mobile: phone with number */}
              <a
                href="tel:+17185550100"
                className="sm:hidden flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-champagne-200"
                aria-label="Call now"
              >
                <Phone className="h-4 w-4 text-champagne-300" />
                (718) 555-0100
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-steel-200"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden glass-strong border-t border-white/5 animate-slide-down">
            <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-steel-200 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-champagne-400/60" />
                </button>
              ))}

              <a
                href="#quote"
                onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollToSection('#quote'); }}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-5 py-3 text-sm font-bold text-ink-950 transition-all"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="tel:+17185550100" className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">
                <Phone className="h-4 w-4 text-champagne-300" />
                (718) 555-0100
              </a>
            </nav>
          </div>
        )}
      </header>

    </>
  );
}
