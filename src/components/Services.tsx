import { useState } from 'react';
import {
  Building2,
  Sparkles,
  Waves,
  Wrench,
  ArrowRight,
  Check,
  FileText,
  Filter,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICE_TIERS, PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES, type PortfolioItem } from '@/data/services';
import { serviceSeoPages } from '@/data/seoPages';
import { navigateToService, scrollToSection } from '@/lib/navigation';

const ICONS: Record<string, typeof Building2> = {
  building: Building2,
  sparkles: Sparkles,
  waves: Waves,
  wrench: Wrench,
};

const FEATURES: Record<string, string[]> = {
  'new-construction': [
    'Screw-fastened to metal or wood framing',
    'Laser-leveled board alignment',
    'Moisture-resistant board for baths & kitchens',
    'Pre-hung door & window cutouts',
  ],
  'level5-skim': [
    'Full skim coat over Level 4 base',
    'Raking-light inspection on every wall',
    'Zero visible imperfections under any light',
    'Gallery & museum display ready',
  ],
  'acoustic-soundproofing': [
    'Resilient channel isolation systems',
    'Sound-damped drywall layers',
    'STC 50+ rated assemblies',
    'UL-listed fire-rated wall assemblies',
  ],
  'patch-restoration': [
    'Matched-texture seamless blending',
    'Structural crack repair & reinforcement',
    'Water-damaged section replacement',
    'HEPA dustless containment',
  ],
};

type CategoryId = (typeof PORTFOLIO_CATEGORIES)[number]['id'];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const scrollToCalculator = () => {
    scrollToSection('#calculator');
  };

  const openServiceDetail = (slug: string) => {
    navigateToService(slug);
  };

  const filtered: PortfolioItem[] =
    activeCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const displayed = filtered.slice(0, visibleCount);

  return (
    <section id="services" className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-champagne-400/20 bg-champagne-400/5 px-4 py-1.5 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-champagne-300">Services & Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Architectural Finishing <span className="text-gradient-gold font-medium">Done Right</span>
          </h2>
          <p className="mt-4 text-steel-400 max-w-2xl mx-auto">
            Four specialized service lines covering every drywall need — from new construction boarding to museum-grade Level 5 finishes. Click any service for full technical specifications and project gallery.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {SERVICE_TIERS.map((tier) => {
            const Icon = ICONS[tier.icon] ?? Building2;
            const features = FEATURES[tier.id] ?? [];
            return (
              <div
                key={tier.id}
                id={`service-${tier.id}`}
                className="group relative rounded-2xl border border-white/10 bg-ink-800/50 p-7 transition-all hover:border-champagne-400/30 hover:bg-ink-800/80 overflow-hidden scroll-mt-24"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-champagne-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-champagne-400/20 bg-champagne-400/10 text-champagne-300 group-hover:glow-gold transition-all">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-steel-400">{tier.dispatchMinimum ? 'Starting at' : 'From'}</div>
                      <div className="font-display text-lg font-medium text-champagne-300">
                        {tier.dispatchMinimum ? `$${tier.dispatchMinimum}` : `$${tier.baseLow.toFixed(2)}`}
                        <span className="text-xs text-steel-500 font-sans">
                          {tier.dispatchMinimum ? '' : `/${tier.priceUnit}`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-medium text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-steel-400 leading-relaxed mb-5">{tier.description}</p>

                  <ul className="space-y-2.5 mb-6">
                    {features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-steel-300">
                        <Check className="h-4 w-4 text-champagne-400 shrink-0 mt-0.5" strokeWidth={2} />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => openServiceDetail(tier.slug)}
                      className="flex items-center gap-2 text-sm font-semibold text-champagne-300 group-hover:text-champagne-200 transition-colors"
                    >
                      <FileText className="h-4 w-4" />
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-steel-600">|</span>
                    <button
                      onClick={scrollToCalculator}
                      className="text-sm font-medium text-steel-400 hover:text-champagne-300 transition-colors"
                    >
                      Estimate
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-20 rounded-2xl border border-champagne-400/20 bg-champagne-400/5 p-7 lg:p-9">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne-300">More ways we help</p>
              <h3 className="mt-2 font-display text-2xl font-medium text-white">Local drywall services for every project</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-steel-400">Explore detailed guidance for repairs, ceilings, basements, soundproofing, popcorn removal, water damage, and commercial interiors across Staten Island.</p>
            </div>
            <span className="shrink-0 text-sm text-steel-500">{serviceSeoPages.length} local service guides</span>
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {serviceSeoPages.map((page) => (
              <button key={page.slug} onClick={() => openServiceDetail(page.slug)} className="group flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3 text-left transition-colors hover:border-champagne-400/40 hover:bg-ink-950/70">
                <span className="text-sm font-medium text-steel-200 group-hover:text-white">{page.title.replace(' in Staten Island', '').replace(' in Staten Island', '')}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-champagne-400 transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div id="portfolio">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-champagne-400/20 bg-champagne-400/5 px-4 py-1.5 mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-champagne-300">Project Gallery</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white">
              Our <span className="text-gradient-gold font-medium">Work</span>
            </h3>
            <p className="mt-3 text-steel-400 max-w-2xl mx-auto text-sm">
              Drywall installations, Level 5 finishes, soundproofing systems, and restoration projects across Staten Island.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            <Filter className="h-4 w-4 text-steel-500 mr-1" />
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setVisibleCount(6); }}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-champagne-400 text-ink-950'
                    : 'border border-white/10 bg-white/5 text-steel-300 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayed.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 animate-fade-in"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full border border-champagne-400/30 bg-ink-950/80 backdrop-blur-md px-3 py-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-champagne-300">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink-950/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-champagne-400/40">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative p-5">
                  <h4 className="font-display text-lg font-medium text-white mb-1.5">{item.title}</h4>
                  <p className="text-sm text-steel-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          {visibleCount < filtered.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount(visibleCount + 6)}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-steel-300 hover:border-champagne-400/40 hover:text-champagne-300 transition-colors mx-auto"
              >
                Load More Projects
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
