import { watches } from "@/data/watches";
import { Hero } from "@/components/Hero";
import { BaseWatchCards } from "@/components/BaseWatchCards";
import { KitSection } from "@/components/KitSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <Hero />
      <BaseWatchCards watches={watches} />

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <div className="mb-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Why this works
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-700 md:text-base">
            Most people do not need a large watch collection. A good base watch
            plus the right three straps gets you everyday coverage, a sharper
            option for nicer occasions, and a practical setup for active use.
          </p>
        </div>
      </section>

      {watches.map((watch) => (
        <KitSection key={watch.id} watch={watch} />
      ))}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Already have one?
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-neutral-700 md:text-base">
            If you already own a Timex Expedition Scout, Casio Duro, or Timex
            Weekender, you do not need to start over. Just use the matching kit
            and build a more versatile one-watch system around what you already
            have.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
