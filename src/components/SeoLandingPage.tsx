import { useEffect } from 'react';
import { ArrowLeft, Check, ChevronDown, Phone, Images, Tag } from 'lucide-react';
import { getSeoPage, type SeoPage } from '@/data/seoPages';
import { navigateBack, navigateToHome } from '@/lib/navigation';

export default function SeoLandingPage({ page }: { page: SeoPage }) {
  useEffect(() => { window.scrollTo(0, 0); }, [page.slug]);
  useEffect(() => {
    document.title = `${page.title} | Staten Island Drywall`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', `${page.title}. Clean, professional drywall installation, repair, finishing, and restoration across Staten Island. Call (718) 555-0100.`);
  }, [page]);

  return <main className="min-h-screen bg-ink-950 pt-20 animate-fade-in">
    <section className="relative min-h-[430px] overflow-hidden">
      <img src={page.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/20" />
      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-5xl flex-col justify-end px-5 pb-14 lg:px-8">
        <button onClick={() => navigateBack()} className="mb-7 flex w-fit items-center gap-2 text-sm text-steel-300 hover:text-champagne-300"><ArrowLeft className="h-4 w-4" /> Back</button>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-champagne-300">{page.eyebrow}</p>
        <h1 className="max-w-3xl font-display text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">{page.title}</h1>
        <div className="mt-7 flex flex-wrap gap-3"><a href="tel:+17185550100" className="flex items-center gap-2 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-6 py-3 text-sm font-bold text-ink-950"><Phone className="h-4 w-4" /> (718) 555-0100</a><a href="/#quote" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white">Request a free quote</a></div>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <article className="space-y-5 text-base leading-8 text-steel-300">
          {page.intro.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <h2 className="pt-5 font-display text-3xl font-medium leading-tight text-white">A better drywall experience from estimate to final coat</h2>
          <p>We believe good drywall work is a combination of preparation and restraint. The best repair is the one you cannot find after the paint dries. That means matching the existing surface, respecting the home, and taking enough time to feather transitions instead of leaving a visible square on the wall. It also means communicating clearly when a project needs another trade or when a hidden condition changes the scope.</p>
          <p>Our service area covers Staten Island’s older housing stock, new construction, condominium interiors, rentals, offices, retail spaces, and community buildings. From a single damaged corner to a whole-home renovation, you get one local point of contact and a finish plan that is easy to understand.</p>
          <h2 className="pt-5 font-display text-3xl font-medium leading-tight text-white">What is included</h2>
          <ul className="space-y-3">{page.highlights.map((item) => <li key={item} className="flex items-start gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-champagne-400" />{item}</li>)}</ul>
          {page.photos?.length ? <section className="pt-8" aria-labelledby="service-photos"><div className="mb-5 flex items-center gap-2"><Images className="h-5 w-5 text-champagne-400" /><h2 id="service-photos" className="font-display text-3xl font-medium text-white">Work details</h2></div><div className="grid gap-4 sm:grid-cols-2">{page.photos.map((photo) => <figure key={photo.url} className="overflow-hidden rounded-xl border border-white/10 bg-ink-800"><img src={photo.url} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="p-3 text-xs leading-5 text-steel-400">{photo.alt}</figcaption></figure>)}</div></section> : null}
          {page.keywords?.length ? <section className="pt-8" aria-labelledby="related-topics"><div className="mb-4 flex items-center gap-2"><Tag className="h-5 w-5 text-champagne-400" /><h2 id="related-topics" className="font-display text-3xl font-medium text-white">Related drywall topics</h2></div><div className="flex flex-wrap gap-2">{page.keywords.map((keyword) => <span key={keyword} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-steel-300">{keyword}</span>)}</div></section> : null}
        </article>
        <aside className="h-fit rounded-2xl border border-champagne-400/20 bg-champagne-400/5 p-6 lg:sticky lg:top-28"><p className="text-xs font-semibold uppercase tracking-widest text-champagne-300">Serving Staten Island</p><p className="mt-3 font-display text-2xl text-white">Clean work. Clear scope. Lasting finish.</p><p className="mt-4 text-sm leading-6 text-steel-300">Serving 10301–10314, including homes and commercial properties.</p><a href="tel:+17185550100" className="mt-6 block rounded-full bg-champagne-400 px-4 py-3 text-center text-sm font-bold text-ink-950">Call for a consultation</a></aside>
      </div>
      <div className="mt-16"><h2 className="mb-6 font-display text-3xl font-medium text-white">Frequently asked questions</h2><div className="space-y-3">{page.faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-white/10 bg-ink-800/50"><summary className="flex cursor-pointer list-none items-center justify-between p-5 text-sm font-semibold text-white"><span>{faq.question}</span><ChevronDown className="h-4 w-4 shrink-0 text-champagne-400 transition-transform group-open:rotate-180" /></summary><p className="px-5 pb-5 text-sm leading-7 text-steel-400">{faq.answer}</p></details>)}</div></div>
    </section>
  </main>;
}

export { getSeoPage };
