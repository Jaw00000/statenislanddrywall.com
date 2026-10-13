import { useEffect } from 'react';
import {
  Building2,
  Sparkles,
  Waves,
  Wrench,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Calculator,
  Phone,
  ClipboardList,
  Layers,
  Shield,
  HelpCircle,
  Images,
} from 'lucide-react';
import { SERVICE_TIERS, type ServiceTier } from '@/data/services';
import { navigateToHome, navigateToService, scrollToSection } from '@/lib/navigation';

const ICONS: Record<string, typeof Building2> = {
  building: Building2,
  sparkles: Sparkles,
  waves: Waves,
  wrench: Wrench,
};

export default function ServiceDetailPage({ tier }: { tier: ServiceTier }) {
  const Icon = ICONS[tier.icon] ?? Building2;
  const { detail } = tier;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tier.id]);

  const scrollToCalculator = () => {
    navigateToHome();
    setTimeout(() => {
      document.querySelector('#calculator')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const scrollToQuote = () => {
    navigateToHome();
    setTimeout(() => {
      document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-ink-950 pt-20 animate-fade-in">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={detail.heroImage} alt={tier.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8 h-full flex flex-col justify-end pb-12">
          <button
            onClick={navigateToHome}
            className="flex items-center gap-2 text-sm font-medium text-steel-300 hover:text-champagne-300 transition-colors mb-6 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-champagne-400/30 bg-champagne-400/10 text-champagne-300 glow-gold">
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-champagne-300">Service Detail</div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white max-w-3xl leading-tight">
            {tier.name}
          </h1>
          <p className="mt-4 text-base text-steel-300 max-w-2xl">{detail.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={scrollToCalculator}
              className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong"
            >
              <Calculator className="h-5 w-5" />
              Estimate This Service
            </button>
            <a
              href="tel:+17185550100"
              className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-champagne-400/50 transition-all"
            >
              <Phone className="h-5 w-5 text-champagne-300" />
              (718) 555-0100
            </a>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          {/* Description */}
          <div className="glass rounded-2xl p-7 lg:p-10 mb-10">
            <h2 className="font-display text-2xl font-medium text-white mb-4">Overview</h2>
            <p className="text-steel-300 leading-relaxed text-base">{tier.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="rounded-lg border border-champagne-400/20 bg-champagne-400/5 px-5 py-3">
                <div className="text-xs text-steel-400">Pricing</div>
                <div className="font-display text-lg font-medium text-champagne-300">
                  {tier.dispatchMinimum
                    ? `$${tier.dispatchMinimum} dispatch + sq ft`
                    : `$${tier.baseLow.toFixed(2)}–$${tier.baseHigh.toFixed(2)}/${tier.priceUnit}`}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specs */}
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-6">
              <ClipboardList className="h-5 w-5 text-champagne-400" strokeWidth={1.5} />
              <h2 className="font-display text-2xl font-medium text-white">Technical Specifications</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {detail.technicalSpecs.map((spec) => (
                <div key={spec.label} className="rounded-xl border border-white/10 bg-ink-800/50 p-5">
                  <div className="text-xs text-steel-400 uppercase tracking-wider mb-1.5">{spec.label}</div>
                  <div className="text-sm font-medium text-white">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Substrate Requirements + Finish Standards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-7">
              <div className="flex items-center gap-2.5 mb-5">
                <Layers className="h-5 w-5 text-champagne-400" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-medium text-white">Substrate Requirements</h3>
              </div>
              <ul className="space-y-3">
                {detail.substrateRequirements.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm text-steel-300">
                    <Check className="h-4 w-4 text-champagne-400 shrink-0 mt-0.5" strokeWidth={2} />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-800/50 p-7">
              <div className="flex items-center gap-2.5 mb-5">
                <Shield className="h-5 w-5 text-champagne-400" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-medium text-white">Finish Grade Standards</h3>
              </div>
              <ul className="space-y-3">
                {detail.finishGradeStandards.map((std) => (
                  <li key={std} className="flex items-start gap-2.5 text-sm text-steel-300">
                    <Check className="h-4 w-4 text-champagne-400 shrink-0 mt-0.5" strokeWidth={2} />
                    {std}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-10">
            <h2 className="font-display text-2xl font-medium text-white mb-6">Our Process</h2>
            <div className="space-y-3">
              {detail.processSteps.map((ps) => (
                <div key={ps.step} className="flex gap-5 rounded-xl border border-white/10 bg-ink-800/50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-champagne-400/30 bg-champagne-400/10 font-display text-sm font-bold text-champagne-300">
                    {ps.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">{ps.title}</h4>
                    <p className="text-sm text-steel-400 leading-relaxed">{ps.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-10">
            <div className="flex items-center gap-2.5 mb-6">
              <HelpCircle className="h-5 w-5 text-champagne-400" strokeWidth={1.5} />
              <h2 className="font-display text-2xl font-medium text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {detail.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-white/10 bg-ink-800/50 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-5 list-none">
                    <span className="text-sm font-semibold text-white pr-4">{faq.question}</span>
                    <ChevronDown className="h-4 w-4 text-champagne-400 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-steel-400 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>

          {/* Gallery */}
          {detail.gallery.length > 0 && (
            <div className="mb-10">
              <div className="flex items-center gap-2.5 mb-6">
                <Images className="h-5 w-5 text-champagne-400" strokeWidth={1.5} />
                <h2 className="font-display text-2xl font-medium text-white">Project Gallery</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {detail.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-ink-800 animate-fade-in"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-xs text-steel-200 leading-snug">{img.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Services */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-medium text-white mb-5">Other Services</h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {SERVICE_TIERS.filter((t) => t.id !== tier.id).map((t) => {
                const RelIcon = ICONS[t.icon] ?? Building2;
                return (
                  <button
                    key={t.id}
                    onClick={() => navigateToService(t.slug)}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/50 p-4 text-left transition-all hover:border-champagne-400/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-champagne-400/20 bg-champagne-400/10 text-champagne-300">
                      <RelIcon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-white">{t.shortName}</div>
                      <div className="text-xs text-champagne-400 mt-0.5 flex items-center gap-1">
                        Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="rounded-2xl glass-strong p-8 lg:p-10 text-center">
            <h3 className="font-display text-2xl font-medium text-white mb-2">
              Ready to Start Your <span className="text-gradient-gold">Project?</span>
            </h3>
            <p className="text-sm text-steel-400 mb-6 max-w-md mx-auto">
              Get an instant estimate or call us to schedule an on-site consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={scrollToQuote}
                className="flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-6 py-3.5 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong"
              >
                Get a Free Quote
              </button>
              <a
                href="tel:+17185550100"
                className="flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:border-champagne-400/50 transition-all"
              >
                <Phone className="h-5 w-5 text-champagne-300" />
                (718) 555-0100
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
