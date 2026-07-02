import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <section className="overflow-hidden sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 pt-16 pr-5 pb-20 pl-5 relative gap-x-12 gap-y-12" id="top">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#1f6f49]/10 blur-3xl"></div>
        <div className="absolute right-0 top-28 h-[22rem] w-[22rem] rounded-full bg-[#d8b48b]/20 blur-3xl"></div>
        <div className="absolute inset-x-0 top-8 mx-auto h-72 max-w-5xl opacity-25" style={{ backgroundImage: "radial-gradient(circle, rgba(23,25,31,0.13) 1px, transparent 1px)", backgroundSize: "2rem 2rem" }}></div>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] max-w-7xl mr-auto ml-auto relative gap-x-12 gap-y-12 items-center">
        <div className="text-center lg:text-left">
          <div data-reveal="" className="inline-flex items-center gap-2 rounded-full bg-[#1f6f49] px-3 py-1.5 text-xs font-semibold text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Icon icon="solar:cup-hot-linear" strokeWidth={1.5} className="text-base" />
            Open daily · 7:00—18:00
          </div>

          <h1 data-mask-reveal="" className="mt-6 max-w-5xl text-5xl font-light leading-none tracking-tight text-[#17191f] sm:text-6xl lg:text-7xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="Coffee roasted for bright mornings and slower afternoons">Coffee roasted for bright mornings and slower afternoons</h1>

          <p data-reveal="" className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg lg:mx-0">
            Café Nova is a neighborhood specialty coffee shop serving floral espresso, hand-poured filter, small-batch pastries, and a room designed for calm conversation.
          </p>

          <div data-reveal="" className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#features" data-magnetic="" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#17191f] px-7 py-4 text-sm font-semibold text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-[#1f6f49] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/40 sm:w-auto">
              Explore the menu
              <Icon icon="solar:alt-arrow-right-linear" strokeWidth={1.5} className="text-lg transition duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#visit" data-magnetic="" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/20 bg-white px-7 py-4 text-sm font-semibold text-[#17191f] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-[#f4f7ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35 sm:w-auto">
              Reserve a table
            </a>
          </div>

          <div data-reveal="" className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-black/5 bg-white/65 p-3 text-left shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur">
            <div className="rounded-xl bg-[#f7f7f3] p-4">
              <p className="text-2xl font-light tracking-tight sm:text-3xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>18</p>
              <p className="mt-1 text-xs font-medium text-black/55">single-origin lots</p>
            </div>
            <div className="rounded-xl bg-[#f7f7f3] p-4">
              <p className="text-2xl font-light tracking-tight sm:text-3xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>4.9</p>
              <p className="mt-1 text-xs font-medium text-black/55">guest rating</p>
            </div>
            <div className="rounded-xl bg-[#f7f7f3] p-4">
              <p className="text-2xl font-light tracking-tight sm:text-3xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>7d</p>
              <p className="mt-1 text-xs font-medium text-black/55">fresh roasting</p>
            </div>
          </div>
        </div>

        <div data-reveal="" className="relative">
          <div className="absolute z-20 -left-4 -top-4 hidden rounded-2xl bg-white p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] sm:block lg:-left-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7efe2] text-[#1f6f49]">
                <Icon icon="solar:leaf-linear" strokeWidth={1.5} className="text-xl" />
              </span>
              <div className="">
                <p className="text-sm font-medium">Ethiopia Guji</p>
                <p className="text-xs text-black/50">jasmine · lime · honey</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#e9eadf] p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
            <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779131605992-bc94c4e1-0062-4bf8-99ef-a198c77b8e94.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68be631c-b384-41c4-8a37-8f72870ba941_3840w.png" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" muted={true} playsInline={true} preload="metadata" loop={true} aria-label="Barista pouring latte art at Café Nova" className="h-[32rem] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-[1.035]"></video>
          </div>

          <div className="absolute -bottom-6 right-4 max-w-xs rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur sm:right-8">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=240&amp;q=80" alt="Regular guest avatar" className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">Mara, daily regular</p>
                <p className="text-xs leading-5 text-black/55">“The cortado has ruined every other morning coffee for me.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
