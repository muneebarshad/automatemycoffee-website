"use client";

function Separator() {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full mx-8 md:mx-12 shrink-0 opacity-60"
      style={{ backgroundColor: "var(--terracotta)" }}
      aria-hidden="true"
    />
  );
}

function TickerRow({
  items,
  reverse = false,
  muted = false,
}: {
  items: string[];
  reverse?: boolean;
  muted?: boolean;
}) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={`inline-flex items-center ${
          reverse ? "ticker-track-reverse" : "ticker-track"
        } ${muted ? "opacity-25" : "opacity-100"}`}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-(family-name:--font-national-park) font-bold text-lg md:text-2xl select-none">
              {item}
            </span>
            <Separator />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className="w-full py-6 md:py-8 overflow-hidden flex flex-col gap-3"
      style={{ backgroundColor: "var(--near-black)", color: "var(--cream)" }}
    >
      <TickerRow items={["AUTOMATE MY COFFEE", "KILL THE BORING STUFF", "JUST WORKS"]} />
      <TickerRow items={["LAUNCHING 2026", "AI AUTOMATION", "ACTUALLY SMART"]} reverse muted />
    </section>
  );
}
