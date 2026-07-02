export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#e9eadf] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span data-reveal="" className="inline-flex rounded-full bg-[#1f6f49] px-3 py-1 text-xs font-semibold text-white" style={{ filter: "blur(12px)", opacity: 0 }}>Inside the café</span>
            <h2 data-mask-reveal="" className="mt-4 max-w-3xl text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="Soft light, fresh bakes, green details">Soft light, fresh bakes, green details</h2>
          </div>
          <p data-reveal="" className="max-w-md text-base leading-7 text-black/62" style={{ filter: "blur(12px)", opacity: 0 }}>
            A visual taste of the bar, the morning bake, and the quiet corners our regulars love most.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:auto-rows-[260px] mt-12">
          {/*  Large video card  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 h-[320px] sm:h-[360px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779131906933-fd7060a7-90b4-4bc9-8f01-baa89dd962ea.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ce75ddb-2ca9-4359-a463-0a64830d1f6c_1600w.png" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" muted={true} playsInline={true} preload="metadata" loop={true} aria-label="Freshly poured coffee" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105"></video>
          </figure>

          {/*  Coffee beans  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e62346fe-8572-4f4b-af7b-bf0c0f3b178c_3840w.png" alt="Coffee beans close up" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" />
          </figure>

          {/*  Café seating  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecee3f84-538e-4626-be30-d43ec73b376d_3840w.png" alt="Café seating and plants" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" />
          </figure>

          {/*  Pastries  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e458f247-6d97-4aab-aa32-8d5b7d2505e6_3840w.png" alt="Fresh pastries on display" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" />
          </figure>

          {/*  Reading video  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <video src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/generated-videos/5bd6211c-bd4c-467c-b442-4312cac4712c/1779132318452-fadf49a3-041c-411f-92f8-49d907787c09.mp4" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daf7a894-7b17-4e80-b249-69b024610bb2_3840w.png" data-aura-generated-video="true" data-aura-video-preset="loop-in-view" muted={true} playsInline={true} preload="metadata" loop={true} aria-label="Person reading beside coffee" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105"></video>
          </figure>
        </div>
      </div>
    </section>
  );
}
