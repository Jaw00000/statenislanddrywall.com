import { useMemo, useState } from 'react';
import {
  Building2,
  Sparkles,
  Waves,
  Wrench,
  Check,
  Phone,
  User,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Loader2,
  CircleCheckBig,
} from 'lucide-react';
import {
  SERVICE_TIERS,
  FINISH_GRADES,
  type ServiceTier,
  type FinishGrade,
  type ServiceTierId,
  calculateEstimate,
  formatCurrency,
  formatCurrencyDetailed,
} from '@/data/services';

const ICONS: Record<string, typeof Building2> = {
  building: Building2,
  sparkles: Sparkles,
  waves: Waves,
  wrench: Wrench,
};

const ZIP_PREFIXES = ['10301', '10302', '10303', '10304', '10305', '10306', '10307', '10308', '10309', '10310', '10311', '10312', '10314'];

type Step = 1 | 2 | 3 | 4;

interface LeadFormData {
  name: string;
  phone: string;
  zip: string;
}

export default function CostCalculator() {
  const [step, setStep] = useState<Step>(1);
  const [selectedTier, setSelectedTier] = useState<ServiceTierId>('new-construction');
  const [sqft, setSqft] = useState(1200);
  const [finishGrade, setFinishGrade] = useState<FinishGrade>('level4');
  const [leadForm, setLeadForm] = useState<LeadFormData>({ name: '', phone: '', zip: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tier = useMemo(() => SERVICE_TIERS.find((t) => t.id === selectedTier)!, [selectedTier]);
  const grade = useMemo(() => FINISH_GRADES.find((g) => g.id === finishGrade)!, [finishGrade]);
  const breakdown = useMemo(() => calculateEstimate(tier, sqft, grade), [tier, sqft, grade]);

  const sliderPercent = ((sqft - 200) / (5000 - 200)) * 100;

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const zipValid = ZIP_PREFIXES.some((p) => leadForm.zip.startsWith(p.slice(0, 3)));
  const formValid = leadForm.name.trim().length > 1 && leadForm.phone.trim().length >= 10 && leadForm.zip.trim().length >= 5;

  const reset = () => {
    setSubmitted(false);
    setStep(1);
    setLeadForm({ name: '', phone: '', zip: '' });
  };

  return (
    <section id="calculator" className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute top-0 left-1/4 right-1/4 h-px gold-line opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-champagne-400/20 bg-champagne-400/5 px-4 py-1.5 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-champagne-300">Live Estimator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            Drywall Project <span className="text-gradient-gold font-medium">Cost Calculator</span>
          </h2>
          <p className="mt-4 text-steel-400 max-w-2xl mx-auto">
            Get an instant estimate based on current Staten Island market rates.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-strong rounded-2xl overflow-hidden">
          {/* Stepper */}
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-4 sm:px-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1 last:flex-none">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                  step >= s ? 'bg-champagne-400 text-ink-950' : 'bg-white/5 text-steel-400 border border-white/10'
                }`}>
                  {step > s ? <Check className="h-4 w-4" /> : s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-px mx-2 transition-all ${step > s ? 'bg-champagne-400/40' : 'bg-white/10'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_360px]">
            {/* Left: Steps */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Step 1: Service Tier */}
              {step === 1 && (
                <div className="animate-fade-in">
                  <h3 className="font-display text-xl font-medium text-white mb-1">Select Your Service Tier</h3>
                  <p className="text-sm text-steel-400 mb-6">Choose the drywall service that matches your project scope.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {SERVICE_TIERS.map((t) => {
                      const Icon = ICONS[t.icon] ?? Building2;
                      const selected = t.id === selectedTier;
                      return (
                        <button
                          key={t.id}
                          onClick={() => setSelectedTier(t.id)}
                          className={`group text-left rounded-xl border p-5 transition-all ${
                            selected
                              ? 'border-champagne-400/50 bg-champagne-400/10 glow-gold'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all ${
                              selected ? 'bg-champagne-400/20 text-champagne-300' : 'bg-white/5 text-steel-300'
                            }`}>
                              <Icon className="h-5 w-5" strokeWidth={1.5} />
                            </div>
                            <div className="min-w-0">
                              <div className={`text-sm font-semibold ${selected ? 'text-champagne-200' : 'text-white'}`}>
                                {t.shortName}
                              </div>
                              <div className="text-xs text-steel-400 mt-1 line-clamp-2">{t.description}</div>
                              <div className="text-xs text-champagne-400 mt-2 font-medium">
                                {t.dispatchMinimum
                                  ? `$${t.dispatchMinimum} dispatch + sq ft`
                                  : `$${t.baseLow.toFixed(2)}–$${t.baseHigh.toFixed(2)}/${t.priceUnit}`}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Square Footage */}
              {step === 2 && (
                <div className="animate-fade-in">
                  <h3 className="font-display text-xl font-medium text-white mb-1">Approximate Square Footage</h3>
                  <p className="text-sm text-steel-400 mb-8">Drag the slider to estimate your project area.</p>

                  <div className="rounded-xl border border-white/10 bg-ink-900/50 p-8">
                    <div className="text-center mb-6">
                      <div className="font-display text-5xl font-medium text-gradient-gold">
                        {sqft.toLocaleString()}
                      </div>
                      <div className="text-sm text-steel-400 mt-1">square feet</div>
                    </div>
                    <input
                      type="range"
                      min={200}
                      max={5000}
                      step={50}
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      className="lux-slider w-full"
                      style={{ ['--slider-percent' as string]: `${sliderPercent}%` }}
                    />
                    <div className="flex justify-between mt-3 text-xs text-steel-500">
                      <span>200 sq ft</span>
                      <span>5,000 sq ft</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { label: 'Small Room', val: 300 },
                      { label: 'Full Floor', val: 1500 },
                      { label: 'Whole Home', val: 3500 },
                    ].map((preset) => (
                      <button
                        key={preset.label}
                        onClick={() => setSqft(preset.val)}
                        className={`rounded-lg border px-3 py-2.5 text-xs font-medium transition-all ${
                          sqft === preset.val
                            ? 'border-champagne-400/40 bg-champagne-400/10 text-champagne-200'
                            : 'border-white/10 bg-white/5 text-steel-300 hover:border-white/20'
                        }`}
                      >
                        {preset.label}
                        <div className="text-[10px] text-steel-500 mt-0.5">{preset.val} sq ft</div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-steel-300 hover:bg-white/5"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Finish Grade */}
              {step === 3 && (
                <div className="animate-fade-in">
                  <h3 className="font-display text-xl font-medium text-white mb-1">Finish Quality Grade</h3>
                  <p className="text-sm text-steel-400 mb-6">Select the GASC finish level for your walls and ceilings.</p>
                  <div className="space-y-3">
                    {FINISH_GRADES.map((g) => {
                      const selected = g.id === finishGrade;
                      return (
                        <button
                          key={g.id}
                          onClick={() => setFinishGrade(g.id)}
                          className={`w-full text-left rounded-xl border p-4 transition-all ${
                            selected
                              ? 'border-champagne-400/50 bg-champagne-400/10 glow-gold'
                              : 'border-white/10 bg-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className={`text-sm font-semibold ${selected ? 'text-champagne-200' : 'text-white'}`}>
                                {g.name}
                              </div>
                              <div className="text-xs text-steel-400 mt-1">{g.description}</div>
                            </div>
                            <div className={`shrink-0 ml-4 text-xs font-bold ${selected ? 'text-champagne-300' : 'text-steel-500'}`}>
                              {g.multiplier < 1 ? `${Math.round((1 - g.multiplier) * 100)}% off` : g.multiplier > 1 ? `+${Math.round((g.multiplier - 1) * 100)}%` : 'Base'}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-steel-300 hover:bg-white/5"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong"
                    >
                      See Estimate
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Summary + Lead Capture */}
              {step === 4 && !submitted && (
                <div className="animate-fade-in">
                  <h3 className="font-display text-xl font-medium text-white mb-1">Your Estimate Breakdown</h3>
                  <p className="text-sm text-steel-400 mb-6">Review your estimate and submit for priority dispatch.</p>

                  <div className="rounded-xl border border-champagne-400/20 bg-ink-900/50 p-6 mb-6">
                    <div className="space-y-3 text-sm">
                      <Row label="Service Tier" value={tier.shortName} />
                      <Row label="Square Footage" value={`${sqft.toLocaleString()} sq ft`} />
                      <Row label="Finish Grade" value={grade.name} />
                      <div className="h-px bg-white/10 my-2" />
                      <Row label="Base Cost" value={formatCurrencyDetailed(breakdown.baseCost)} />
                      {breakdown.finishAdjustment !== 0 && (
                        <Row
                          label="Finish Adjustment"
                          value={`${breakdown.finishAdjustment > 0 ? '+' : ''}${formatCurrencyDetailed(breakdown.finishAdjustment)}`}
                        />
                      )}
                      <Row label="Subtotal" value={formatCurrencyDetailed(breakdown.subtotal)} />
                      {breakdown.dispatchFee > 0 && (
                        <Row label="Dispatch Fee" value={formatCurrencyDetailed(breakdown.dispatchFee)} />
                      )}
                      <div className="h-px bg-white/10 my-2" />
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-display text-lg font-medium text-white">Estimated Total</span>
                        <span className="font-display text-2xl font-bold text-gradient-gold">{formatCurrency(breakdown.total)}</span>
                      </div>
                      <div className="text-right text-xs text-steel-500">
                        ≈ {formatCurrencyDetailed(breakdown.pricePerSqFt)} / sq ft
                      </div>
                    </div>
                  </div>

                  {/* Lead Form */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <h4 className="text-sm font-semibold text-white mb-4">Get Priority Dispatch</h4>
                    <form onSubmit={handleLeadSubmit} className="space-y-4">
                      <FormField icon={User} label="Full Name">
                        <input
                          type="text"
                          required
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full bg-transparent text-sm text-white placeholder:text-steel-500 focus:outline-none"
                        />
                      </FormField>
                      <FormField icon={Phone} label="Phone Number">
                        <input
                          type="tel"
                          required
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          placeholder="(718) 555-0100"
                          className="w-full bg-transparent text-sm text-white placeholder:text-steel-500 focus:outline-none"
                        />
                      </FormField>
                      <FormField icon={MapPin} label="Staten Island ZIP / Neighborhood">
                        <input
                          type="text"
                          required
                          value={leadForm.zip}
                          onChange={(e) => setLeadForm({ ...leadForm, zip: e.target.value })}
                          placeholder="10306 — Dongan Hills"
                          className="w-full bg-transparent text-sm text-white placeholder:text-steel-500 focus:outline-none"
                        />
                      </FormField>
                      {leadForm.zip.length >= 3 && !zipValid && (
                        <p className="text-xs text-red-400">Please enter a valid Staten Island ZIP code (103xx).</p>
                      )}
                      <button
                        type="submit"
                        disabled={!formValid || submitting}
                        className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-6 py-3.5 text-sm font-bold text-ink-950 transition-all hover:glow-gold-strong disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit for Priority Dispatch
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  <div className="mt-6 flex justify-start">
                    <button
                      onClick={() => setStep(3)}
                      className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-steel-300 hover:bg-white/5"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  </div>
                </div>
              )}

              {/* Success State */}
              {step === 4 && submitted && (
                <div className="animate-fade-in flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne-400/15 mb-5 glow-gold">
                    <CircleCheckBig className="h-8 w-8 text-champagne-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-white mb-2">Request Received</h3>
                  <p className="text-sm text-steel-400 max-w-md">
                    Thank you, {leadForm.name.split(' ')[0]}. Your estimate of <span className="text-champagne-300 font-semibold">{formatCurrency(breakdown.total)}</span> for {tier.shortName} has been logged. Our team will call you within 24 hours to schedule your on-site consultation.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-8 flex items-center gap-2 rounded-full border border-champagne-400/30 bg-champagne-400/10 px-6 py-3 text-sm font-medium text-champagne-200 hover:bg-champagne-400/20"
                  >
                    Start New Estimate
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Live Summary Sidebar */}
            <div className="border-t lg:border-t-0 lg:border-l border-white/5 bg-ink-950/50 p-6 sm:p-8 flex flex-col">
              <div className="text-xs uppercase tracking-wider text-steel-500 mb-4">Live Estimate</div>
              <div className="space-y-4 flex-1">
                <div>
                  <div className="text-xs text-steel-400">Service</div>
                  <div className="text-sm font-medium text-white">{tier.shortName}</div>
                </div>
                <div>
                  <div className="text-xs text-steel-400">Area</div>
                  <div className="text-sm font-medium text-white">{sqft.toLocaleString()} sq ft</div>
                </div>
                <div>
                  <div className="text-xs text-steel-400">Finish</div>
                  <div className="text-sm font-medium text-white">{grade.name.split('—')[0].trim()}</div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="text-xs text-steel-400">Rate per sq ft</div>
                  <div className="text-sm font-medium text-champagne-300">{formatCurrencyDetailed(breakdown.pricePerSqFt)}</div>
                </div>
                {breakdown.dispatchFee > 0 && (
                  <div>
                    <div className="text-xs text-steel-400">Dispatch Fee</div>
                    <div className="text-sm font-medium text-champagne-300">{formatCurrency(breakdown.dispatchFee)}</div>
                  </div>
                )}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs text-steel-400 mb-1">Estimated Total</div>
                <div className="font-display text-3xl font-bold text-gradient-gold">{formatCurrency(breakdown.total)}</div>
                <div className="text-[10px] text-steel-500 mt-2">Estimate only. Final pricing confirmed on-site.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-steel-400">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}

function FormField({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof User;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-steel-300 mb-1.5">{label}</label>
      <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink-900/50 px-4 py-3 focus-within:border-champagne-400/40 transition-colors">
        <Icon className="h-4 w-4 text-steel-400 shrink-0" strokeWidth={1.5} />
        {children}
      </div>
    </div>
  );
}
