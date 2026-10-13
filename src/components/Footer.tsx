import { Hammer, Phone, Mail, MapPin, Clock } from 'lucide-react';
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
              A local marketing and lead-generation website for drywall services in Staten Island. Contractor availability, pricing, licensing, and project details are confirmed directly with the service provider before work is booked.
            </p>
            <div className="mt-4 rounded-lg border border-champagne-400/20 bg-champagne-400/5 p-3 text-xs leading-relaxed text-steel-300">
              <strong className="text-champagne-300">Important:</strong> This website is not the contractor and does not perform construction work. It is a marketing platform that may connect visitors with an independent local contractor. Verify the contractor&apos;s identity, insurance, licenses, written scope, and contract before hiring.
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

        <section id="privacy" className="mb-10 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-xs leading-relaxed text-steel-400">
          <h2 className="mb-2 text-sm font-semibold text-white">Privacy Policy</h2>
          <p>When you request a quote, this marketing website collects the information you submit so we can review and route your request to an independent contractor who may serve your area. We do not sell your information. The contractor may contact you by phone, text, or email about your request.</p>
          <p className="mt-2">You can ask us to correct or delete your submission by emailing <a href="mailto:info@statenislanddrywall.com" className="text-champagne-300 underline underline-offset-2">info@statenislanddrywall.com</a>. Do not submit sensitive personal information through this form.</p>
        </section>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-500">
            © {new Date().getFullYear()} Staten Island Drywall. All rights reserved.
          </p>
          <p className="text-xs text-steel-500 text-center sm:text-right">
            Marketing site only — no contractor license or insurance is claimed here. Verify credentials before hiring.
          </p>
        </div>
      </div>
    </footer>
  );
}
