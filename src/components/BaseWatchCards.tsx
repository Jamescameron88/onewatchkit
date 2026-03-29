import Image from "next/image";
import { WatchKit } from "@/types/watch";

export function BaseWatchCards({ watches }: { watches: WatchKit[] }) {
  return (
    <section id="bases" className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Choose your base
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-700 md:text-base">
          These three watches dress up well, wear easily, and make the best
          starting point for a one-watch system.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {watches.map((watch) => (
          <a
            key={watch.id}
            href={`#${watch.slug}`}
            className="group rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
              <Image
                src={watch.watchImage}
                alt={watch.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{watch.name}</h3>
            <p className="mt-1 text-sm text-neutral-600">{watch.descriptor}</p>
            <p className="mt-4 text-sm leading-6 text-neutral-700">
              <span className="font-medium text-neutral-900">Best for:</span>{" "}
              {watch.bestFor}
            </p>
            <div className="mt-5 inline-flex items-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white">
              View Kit
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}