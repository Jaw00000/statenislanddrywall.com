import { ShieldCheck, FileCheck, Wind } from 'lucide-react';

const BADGES = [
  { icon: FileCheck, label: 'NYC DOB & HIC Licensed' },
  { icon: ShieldCheck, label: '$2M General Liability Insured' },
  { icon: Wind, label: 'HEPA Dustless Certified' },
];

export default function TrustBanner() {
  return (
    <section className="relative z-20 -mt-1 border-y border-white/10 bg-ink-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-5">
          {BADGES.map((badge, idx) => (
            <div key={badge.label} className="flex items-center gap-3">
              {idx > 0 && <div className="hidden sm:block h-6 w-px bg-white/10" />}
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-champagne-400/20 bg-champagne-400/10">
                  <badge.icon className="h-4.5 w-4.5 text-champagne-300" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-steel-200">{badge.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
