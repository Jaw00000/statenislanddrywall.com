const sampleGroups = [
  {
    title: 'Boarding & Hanging',
    description: 'Concept comparisons showing framing, gypsum board placement, fastening, and finish readiness.',
    prefix: 'boarding',
  },
  {
    title: 'Level 5 Skim Coat',
    description: 'Concept comparisons showing surface correction, skim-coat application, and paint-ready smoothness.',
    prefix: 'skim',
  },
  {
    title: 'Soundproofing & Fire-Rated Systems',
    description: 'Concept comparisons showing insulation, isolation layers, sealed assemblies, and finished wall surfaces.',
    prefix: 'soundproofing',
  },
  {
    title: 'Patch & Restoration',
    description: 'Concept comparisons showing damage conditions, patching, water-damage replacement, and blended repairs.',
    prefix: 'restoration',
  },
];

const samples = sampleGroups.flatMap((group) =>
  Array.from({ length: 5 }, (_, index) => ({
    title: `${group.title} — Comparison ${index + 1}`,
    image: `/generated-samples/${group.prefix}-${String(index + 1).padStart(2, '0')}-before-after.png`,
    description: group.description,
  })),
);

export default function GeneratedSamplesPage() {
  return (
    <main className="min-h-screen bg-ink-950 px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">Private review gallery</p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Generated service image samples</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
          These are AI-generated concept images for review only. They are not photographs of completed work and are not presented as a contractor&apos;s portfolio.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {samples.map((sample) => (
            <figure key={sample.image} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="aspect-[4/3] bg-black/30">
                <img src={sample.image} alt={`${sample.title} generated concept sample`} className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-5">
                <h2 className="text-lg font-medium text-gold-200">{sample.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/60">{sample.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-xs leading-5 text-white/45">
          Review-only route. These samples are intentionally not linked from the public site.
        </p>
      </div>
    </main>
  );
}
