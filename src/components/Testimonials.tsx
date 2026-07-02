import { Icon } from '@iconify/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#fbfbf8] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="">
            <span data-reveal="" className="inline-flex rounded-full bg-[#1f6f49] px-3 py-1 text-xs font-semibold text-white">Guest notes</span>
            <h2 data-mask-reveal="" className="mt-4 max-w-3xl text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="The kind of place people build rituals around">The kind of place people build rituals around</h2>
          </div>
          <a href="#visit" data-magnetic="" data-reveal="" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17191f] px-6 py-4 text-sm font-semibold text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-[#1f6f49]">
            Plan your visit
            <Icon icon="solar:map-point-linear" strokeWidth={1.5} className="text-lg" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <article data-card="" data-reveal="" className="rounded-3xl bg-white p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2">
            <div className="flex gap-1 text-[#1f6f49]" aria-label="Five stars">
              <Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" />
            </div>
            <p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>“Café Nova has that rare mix of serious coffee and zero pretension. The filter menu is beautiful.”</p>
            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
              <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=crop&amp;w=240&amp;q=80" alt="Guest Lina Ortiz" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">Lina Ortiz</p>
                <p className="text-xs text-black/50">Ceramicist</p>
              </div>
            </div>
          </article>

          <article data-card="" data-reveal="" className="rounded-3xl bg-[#e8ebe3] p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
            <div className="flex gap-1 text-[#1f6f49]" aria-label="Five stars">
              <Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" />
            </div>
            <p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>“I bring clients here because the room feels intentional. Quiet enough to think, warm enough to stay.”</p>
            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=240&amp;q=80" alt="Guest Theo Park" className="h-12 w-12 rounded-full object-cover" />
              <div className="">
                <p className="text-sm font-semibold">Theo Park</p>
                <p className="text-xs text-black/50">Studio founder</p>
              </div>
            </div>
          </article>

          <article data-card="" data-reveal="" className="rounded-3xl bg-white p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
            <div className="flex gap-1 text-[#1f6f49]" aria-label="Five stars">
              <Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" />
            </div>
            <p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>“The cardamom bun is reason enough to cross town. Add a cappuccino and it is perfect.”</p>
            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;w=240&amp;q=80" alt="Guest Amara Bell" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">Amara Bell</p>
                <p className="text-xs text-black/50">Food writer</p>
              </div>
            </div>
          </article>
        </div>

        <div data-reveal="" className="mt-8 grid gap-5 rounded-[2rem] bg-[#17191f] p-5 text-white lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779132224753-8326d8bd-b858-4d08-b342-9c164b6379e6.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/581abf40-e37d-4fd8-b99f-d8ef81991d84_3840w.png" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" muted={true} playsInline={true} preload="metadata" loop={true} aria-label="Interior of a cozy café" className="h-80 w-full rounded-3xl object-cover lg:h-full"></video>
          <div className="flex flex-col justify-center rounded-3xl bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9d9ab]">Proof point</p>
            <p className="mt-5 text-4xl font-light leading-tight tracking-tight sm:text-5xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              82% of weekend guests return within two weeks.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
              We measure loyalty the simple way: familiar faces, remembered orders, and coffee good enough to become part of the week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
