export function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
          OneWatchKit
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          The Only Watch You’ll Ever Need
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-700 md:text-lg">
          One watch. Three straps. Every situation. Start with a proven base watch
          or upgrade one you already own with a complete, curated strap system.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#bases"
            className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Start Here
          </a>
          <a
            href="#kits"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
          >
            I Have One
          </a>
        </div>

        <p className="mt-6 max-w-xl text-sm leading-6 text-neutral-500">
          Built around three proven watches: the Timex Expedition Scout, Casio Duro, and Timex Weekender.
        </p>
      </div>
    </section>
  );
}