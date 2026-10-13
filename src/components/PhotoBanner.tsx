import type { LuxuryBanner } from '@/data/services';

export default function PhotoBanner({ banner }: { banner: LuxuryBanner }) {
  return (
    <section className="relative h-[45vh] min-h-[320px] overflow-hidden noise-overlay">
      <img
        src={banner.image}
        alt={banner.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/50 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8 h-full flex flex-col items-center justify-center text-center">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white max-w-3xl leading-tight animate-fade-up">
          {banner.title}
        </h2>
        <div className="mt-4 h-px w-16 gold-line" />
        <p className="mt-4 text-sm sm:text-base text-steel-300 max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {banner.subtitle}
        </p>
      </div>
    </section>
  );
}
