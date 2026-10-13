import { Hammer, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import { SERVICE_TIERS } from '@/data/services';
import { navigateToService, scrollToSection } from '@/lib/navigation';

export default function Footer() {
  return (
    <footer id="consultation" className="relative pt-20 pb-10 noise-overlay">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px gold-line opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* CTA banner */}
        <div className="mb-16 rounded-2xl glass-strong p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-light text-white">
            Ready to Start Your <span className="text-gradient-gold font-medium">Project?</span>
          </h2>
          <p className="mt-3 text-steel-400 max-w-xl mx-auto">
            Book a free on-site consultation. We'll assess your space, recommend the right finish grade, and provide a detailed quote.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+17185550100"
              className="flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-7 py-3.5 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong"
            >
              <Phone className="h-5 w-5" />
              (718) 555-0100
            </a>
            <button
              onClick={() => scrollToSection('#quote')}
              className="flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-champagne-400/50 transition-all"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-champagne-400/30 bg-ink-800/80">
                <Hammer className="h-5 w-5 text-champagne-300" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display text-lg font-semibold text-white">
                  Staten Island <span className="text-gradient-gold">Drywall</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-steel-400">Premier Drywall & Finishing Experts</div>
              </div>
            </div>
            <p className="text-sm text-steel-400 leading-relaxed max-w-md">
              Elite drywall installation, Level 5 plaster-grade finishes, acoustic soundproofing, and precision restoration. Serving homeowners and commercial clients across all of Staten Island.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-champagne-400 fill-champagne-400" />
              ))}
              <span className="text-xs text-steel-400 ml-2">5.0 — 280+ reviews</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-steel-400">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-champagne-400 shrink-0" strokeWidth={1.5} />
                (718) 555-0100
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-champagne-400 shrink-0" strokeWidth={1.5} />
                info@statenislanddrywall.com
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-champagne-400 shrink-0" strokeWidth={1.5} />
                Staten Island, NY 10306
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-champagne-400 shrink-0" strokeWidth={1.5} />
                Mon–Sat, 7AM–6PM
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-steel-400">
              {SERVICE_TIERS.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => navigateToService(t.slug)}
                    className="hover:text-champagne-300 transition-colors"
                  >
                    {t.shortName}
                  </button>
                </li>
              ))}
              <li><button onClick={() => scrollToSection('#calculator')} className="hover:text-champagne-300 transition-colors">Cost Calculator</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-500">
            © {new Date().getFullYear()} Staten Island Drywall. All rights reserved.
          </p>
          <p className="text-xs text-steel-500">
            Licensed & Insured — NYC Dept. of Buildings
          </p>
        </div>
      </div>
    </footer>
  );
}
