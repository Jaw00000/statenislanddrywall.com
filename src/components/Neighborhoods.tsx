import { MapPin, Navigation, Phone, ArrowRight } from 'lucide-react';
import { NEIGHBORHOOD_REGIONS } from '@/data/services';
import { scrollToSection } from '@/lib/navigation';

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-ink-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-champagne-400/20 bg-champagne-400/5 px-4 py-1.5 mb-4">
            <MapPin className="h-3.5 w-3.5 text-champagne-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-champagne-300">Hyper-Local Coverage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Serving Every <span className="text-gradient-gold font-medium">Staten Island</span> Neighborhood
          </h2>
          <p className="mt-4 text-steel-400 max-w-2xl mx-auto">
            From the historic North Shore to the estates of Todt Hill and the growing South Shore — we dispatch crews across all of Staten Island.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {NEIGHBORHOOD_REGIONS.map((region) => (
            <div
              key={region.region}
              className="group rounded-2xl border border-white/10 bg-ink-800/50 p-7 transition-all hover:border-champagne-400/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-champagne-400/20 bg-champagne-400/10 text-champagne-300">
                  <Navigation className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium text-white">{region.region}</h3>
              </div>

              <p className="text-sm text-steel-400 leading-relaxed mb-5">{region.description}</p>

              <div className="space-y-1.5">
                {region.neighborhoods.map((n) => (
                  <div
                    key={n.name}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2.5 transition-all hover:border-champagne-400/20 hover:bg-champagne-400/5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-champagne-400/60" />
                      <span className="text-sm font-medium text-steel-200">{n.name}</span>
                    </div>
                    <span className="text-xs text-steel-500 font-mono">{n.zipCodes.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl border border-champagne-400/20 bg-champagne-400/5 px-8 py-6 text-center sm:text-left">
          <p className="text-sm text-steel-300">
            <span className="font-semibold text-white">Don't see your neighborhood?</span> If you're on Staten Island, we serve you.
          </p>
          <a
            href="tel:+17185550100"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4 text-champagne-300" />
            (718) 555-0100
          </a>
          <button
            onClick={() => scrollToSection('#quote')}
            className="flex items-center gap-2 rounded-full border border-champagne-400/40 bg-champagne-400/10 px-5 py-2.5 text-sm font-semibold text-champagne-200 whitespace-nowrap hover:bg-champagne-400/20 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
