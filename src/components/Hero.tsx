import { useState } from 'react';
import {
  Calculator,
  Star,
  ShieldCheck,
  Wind,
  Layers,
  User,
  Phone,
  MapPin,
  Mail,
  Building2,
  ArrowRight,
  Loader2,
  CircleCheckBig,
  Send,
} from 'lucide-react';

const STATS = [
  { value: '1,200+', label: 'Projects Completed' },
  { value: '15', label: 'Years on Staten Island' },
  { value: 'Level 5', label: 'Finishing Certified' },
  { value: '100%', label: 'HEPA Dustless' },
];

const BADGES = [
  { icon: Wind, label: 'HEPA Dustless Sanding' },
  { icon: Layers, label: 'Level 5 Finishes' },
  { icon: ShieldCheck, label: 'Licensed & Insured' },
];

const ZIP_PREFIXES = ['10301', '10302', '10303', '10304', '10305', '10306', '10307', '10308', '10309', '10310', '10311', '10312', '10314'];

const SERVICE_OPTIONS = [
  'New Construction Boarding & Hanging',
  'Level 5 Plaster-Grade Skim Coating',
  'Acoustic Soundproofing & Fire-Rated Systems',
  'Patch, Crack Restoration & Water Damage',
  'Not sure yet — need consultation',
];

export default function Hero() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    serviceType: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const zipValid = ZIP_PREFIXES.some((p) => form.zip.startsWith(p.slice(0, 3)));
  const formValid =
    form.name.trim().length > 1 &&
    form.phone.trim().length >= 10 &&
    form.zip.trim().length >= 5;

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValid) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background layers */}
      <div className="absolute inset-0 bg-ink-950" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/50 to-transparent" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px gold-line opacity-30" />
      <div className="absolute bottom-0 left-1/3 right-1/3 h-px gold-line opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-12 items-start">
          {/* Left: hero content */}
          <div className="max-w-3xl">
            {/* Badge row */}
            <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in">
              <div className="flex items-center gap-1.5 rounded-full border border-champagne-400/30 bg-champagne-400/5 px-4 py-1.5">
                <Star className="h-3.5 w-3.5 text-champagne-400 fill-champagne-400" />
                <span className="text-xs font-medium text-champagne-200">Trusted by 1,200+ Staten Island Homeowners</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] text-white animate-fade-up">
              Elite Drywall Installation &amp;
              <br />
              <span className="text-gradient-gold font-medium">Flawless Level 5 Finishes</span>
              <br />
              on Staten Island.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-steel-300 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
              HEPA dustless sanding that keeps your home clean. High-end residential renovations with museum-grade surface quality. Commercial metal framing and fire-rated assemblies built to code.
            </p>

            {/* Badge pills */}
            <div className="mt-7 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              {BADGES.map((b) => (
                <div key={b.label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
                  <b.icon className="h-4 w-4 text-champagne-400" strokeWidth={1.5} />
                  <span className="text-xs font-medium text-steel-200">{b.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.35s' }}>
              <button
                onClick={() => scrollTo('#calculator')}
                className="group flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-7 py-4 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong hover:scale-[1.02]"
              >
                <Calculator className="h-5 w-5" />
                Calculate Project Cost
              </button>
              <a
                href="tel:+17185550100"
                className="flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-champagne-400/50 hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-champagne-300" />
                (718) 555-0100
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.45s' }}>
              {STATS.map((stat) => (
                <div key={stat.label} className="border-l border-champagne-400/20 pl-4">
                  <div className="font-display text-2xl sm:text-3xl font-medium text-white">{stat.value}</div>
                  <div className="text-xs text-steel-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: compact quote form */}
          <div id="quote" className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="rounded-2xl border border-champagne-400/20 bg-white p-5 shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-champagne-400/15 mb-4 glow-gold">
                    <CircleCheckBig className="h-7 w-7 text-champagne-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-ink-950 mb-2">Request Received</h3>
                  <p className="text-xs text-steel-500 max-w-xs">
                    Thank you, {form.name.split(' ')[0]}. We'll call you at {form.phone} within 24 hours to schedule your free consultation.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', phone: '', email: '', zip: '', serviceType: '', message: '' });
                    }}
                    className="mt-6 flex items-center gap-2 rounded-full border border-champagne-400/40 bg-champagne-400/10 px-5 py-2.5 text-xs font-medium text-champagne-700 hover:bg-champagne-400/20 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <h2 className="font-display text-lg font-medium text-ink-950">Get a Free Quote</h2>
                    <p className="text-xs text-steel-500 mt-0.5">We'll call you within 24 hours</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <CompactField icon={User}>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full Name *"
                        className="w-full bg-transparent text-sm text-ink-950 placeholder:text-steel-400 focus:outline-none"
                      />
                    </CompactField>

                    <CompactField icon={Phone}>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Phone *"
                        className="w-full bg-transparent text-sm text-ink-950 placeholder:text-steel-400 focus:outline-none"
                      />
                    </CompactField>

                    <CompactField icon={Mail}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Email"
                        className="w-full bg-transparent text-sm text-ink-950 placeholder:text-steel-400 focus:outline-none"
                      />
                    </CompactField>

                    <CompactField icon={MapPin}>
                      <input
                        type="text"
                        required
                        value={form.zip}
                        onChange={(e) => setForm({ ...form, zip: e.target.value })}
                        placeholder="ZIP / Neighborhood *"
                        className="w-full bg-transparent text-sm text-ink-950 placeholder:text-steel-400 focus:outline-none"
                      />
                    </CompactField>
                    {form.zip.length >= 3 && !zipValid && (
                      <p className="text-xs text-red-400 -mt-1">Please enter a valid Staten Island ZIP (103xx).</p>
                    )}

                    <div className="flex items-center gap-3 rounded-lg border border-steel-200 bg-steel-50 px-4 py-2.5 focus-within:border-champagne-400/40 transition-colors">
                      <Building2 className="h-4 w-4 text-steel-400 shrink-0" strokeWidth={1.5} />
                      <select
                        value={form.serviceType}
                        onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                        className="w-full bg-transparent text-sm text-ink-950 focus:outline-none [&>option]:bg-white"
                      >
                        <option value="">Select a service...</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Project Details (optional)"
                      rows={2}
                      className="w-full rounded-lg border border-steel-200 bg-steel-50 px-4 py-2.5 text-sm text-ink-950 placeholder:text-steel-400 focus:outline-none focus:border-champagne-400/40 transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      disabled={!formValid || submitting}
                      className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-5 py-3 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Submit Request
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] text-steel-400">
                      By submitting, you agree to be contacted by Staten Island Drywall.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  );
}

function CompactField({
  icon: Icon,
  children,
}: {
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-steel-200 bg-steel-50 px-4 py-2.5 focus-within:border-champagne-400/40 transition-colors">
      <Icon className="h-4 w-4 text-steel-400 shrink-0" strokeWidth={1.5} />
      {children}
    </div>
  );
}
