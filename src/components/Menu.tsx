import { Icon } from '@iconify/react';

export default function Menu() {
  return (
    <section id="features" className="bg-[#e9eadf] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span data-reveal="" className="inline-flex rounded-full bg-[#1f6f49] px-3 py-1 text-xs font-semibold text-white">What we pour</span>
            <h2 data-mask-reveal="" className="mt-4 max-w-2xl text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="A smaller menu, carefully made">A smaller menu, carefully made</h2>
          </div>
          <p data-reveal="" className="max-w-2xl text-base leading-7 text-black/62 lg:justify-self-end">
            Every drink is built around clarity: balanced espresso, seasonal milk options, thoughtful brew recipes, and pastries that are baked before sunrise.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article data-card="" data-reveal="" className="group rounded-3xl bg-white/85 p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:bg-white" style={{ transformOrigin: "50% 50%" }}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7efe2] text-[#1f6f49] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
              <Icon icon="solar:cup-hot-linear" strokeWidth={1.5} className="text-2xl" />
            </span>
            <h3 className="mt-20 text-3xl font-light leading-none tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Signature espresso</h3>
            <p className="mt-4 text-sm leading-6 text-black/60">A rotating house blend pulled for sweetness, crema, and a round finish.</p>
          </article>

          <article data-card="" data-reveal="" className="group rounded-3xl bg-white/85 p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:bg-white" style={{ transformOrigin: "50% 50%" }}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff3e8] text-[#1f6f49] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
              <Icon icon="solar:filter-linear" strokeWidth={1.5} className="text-2xl" />
            </span>
            <h3 className="mt-20 text-3xl font-light leading-none tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Slow filter bar</h3>
            <p className="mt-4 text-sm leading-6 text-black/60">Single-origin pour-overs brewed to highlight florals, acidity, and texture.</p>
          </article>

          <article data-card="" data-reveal="" className="group rounded-3xl bg-white/85 p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:bg-white" style={{ transformOrigin: "50% 50%" }}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f0df] text-[#8a633d] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
              <Icon icon="solar:chef-hat-linear" strokeWidth={1.5} className="text-2xl" />
            </span>
            <h3 className="mt-20 text-3xl font-light leading-none tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Fresh pastry case</h3>
            <p className="mt-4 text-sm leading-6 text-black/60">Cardamom buns, olive oil cake, and savory galettes made in small batches.</p>
          </article>

          <article data-card="" data-reveal="" className="group rounded-3xl bg-[#17191f] p-6 text-white shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#b9d9ab] transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
              <Icon icon="solar:shop-linear" strokeWidth={1.5} className="text-2xl" />
            </span>
            <h3 className="mt-20 text-3xl font-light leading-none tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Calm work tables</h3>
            <p className="mt-4 text-sm leading-6 text-white/60">Soft lighting, reliable Wi‑Fi, and quiet corners for reading or planning.</p>
          </article>
        </div>

        <div data-reveal="" className="mt-10 grid gap-5 rounded-[2rem] bg-[#dce5d6] p-5 lg:grid-cols-[1fr_0.8fr] lg:p-8">
          <div className="overflow-hidden rounded-3xl">
            <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779131655695-670ad566-83e0-46bd-a807-d46395600461.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4d7282c-0562-4aa5-a2a7-1a2843307e9b_3840w.png" data-aura-generated-video="true" data-aura-video-preset="hover" muted={true} playsInline={true} preload="metadata" className="h-80 w-full object-cover transition duration-700 hover:scale-105 lg:h-full"></video>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1f6f49]">Today’s favorite</p>
              <h3 className="mt-4 text-4xl font-light leading-none tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Iced pistachio latte</h3>
              <p className="mt-4 text-base leading-7 text-black/62">House pistachio milk, double espresso, sea salt, and a pale green finish that tastes like spring.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#eef3e8] px-4 py-2 text-sm font-medium text-black/65">oat friendly</span>
              <span className="rounded-full bg-[#eef3e8] px-4 py-2 text-sm font-medium text-black/65">limited batch</span>
              <span className="rounded-full bg-[#eef3e8] px-4 py-2 text-sm font-medium text-black/65">served over ice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
