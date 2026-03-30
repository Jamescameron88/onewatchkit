export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Watch kit"
          className="h-full w-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-white md:px-6 md:py-28">
        
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-300">
          OneWatchKit
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          One Watch. Three Straps. Every Situation.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-neutral-200 md:text-lg">
          Turn one affordable watch into a complete everyday, dress, and active system.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#bases"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Start Here
          </a>

          <a
            href="#kits"
            className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            I Have One
          </a>
        </div>

      </div>
    </section>
  );
}