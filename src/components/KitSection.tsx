import { WatchKit } from "@/types/watch";
import Image from "next/image";

export function KitSection({ watch }: { watch: WatchKit }) {
  return (
    <section
      id={watch.slug}
      className="border-t border-neutral-200 bg-white scroll-mt-20"
    >
      <div id="kits" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          <div className="lg:min-h-[520px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100 lg:h-full lg:aspect-auto">
              <Image
                src={watch.watchImage}
                alt={watch.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-8 lg:min-h-[520px]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
                {watch.name}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                The {watch.name} - One Watch System
              </h2>
              <p className="mt-3 text-lg text-neutral-700">{watch.descriptor}</p>
              <p className="mt-5 text-sm leading-6 text-neutral-700 md:text-base">
                {watch.packSummary}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-semibold text-neutral-900">
                    What you get:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    <li>• 1 proven base watch</li>
                    <li>• 1 everyday strap</li>
                    <li>• 1 elevated strap</li>
                    <li>• 1 active strap</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm font-semibold text-neutral-900">
                    Why this works:
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    <li>• Covers 95% of real-life situations</li>
                    <li>• No need for multiple watches</li>
                    <li>• Easy strap swaps in seconds</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-auto">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={watch.kitBuyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  Buy This Kit
                </a>
                <a
                  href={watch.watchBuyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
                >
                  View Recommended Watch
                </a>
              </div>

              <p className="mt-4 text-sm text-neutral-500">
                Most people don&apos;t need more watches - they need a better system.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {watch.straps.map((strap) => (
            <div
              key={`${watch.id}-${strap.role}`}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200">
                <Image
                  src={strap.image}
                  alt={`${watch.name} ${strap.role} strap`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                {strap.role}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{strap.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{strap.material}</p>
              <p className="mt-4 text-sm leading-6 text-neutral-700">
                {strap.description}
              </p>
              <a
                href={strap.buyUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
              >
                View Strap
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
