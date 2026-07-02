export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#e9eadf] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span data-reveal="" className="inline-flex rounded-full bg-[#1f6f49] px-3 py-1 text-xs font-semibold text-white" style={{ filter: "blur(12px)", opacity: 0 }}>Di dalam kafe</span>
            <h2 data-mask-reveal="" className="mt-4 max-w-3xl text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="Cahaya lembut, roti segar, sentuhan tanaman hijau">Cahaya lembut, roti segar, sentuhan tanaman hijau</h2>
          </div>
          <p data-reveal="" className="max-w-md text-base leading-7 text-black/62" style={{ filter: "blur(12px)", opacity: 0 }}>
            Potret visual dari bar, panggangan pagi hari, dan sudut-sudut tenang yang paling dicintai oleh pelanggan setia kami.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 lg:auto-rows-[260px] mt-12">
          {/*  Large video card  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 h-[320px] sm:h-[360px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <img src="/assets/asset_wjxghj.jpg" alt="Kopi yang baru dituang" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" />
          </figure>

          {/*  Coffee beans  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <img src="/assets/asset_5kq0cz.jpg" alt="Biji kopi dari dekat" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" />
          </figure>

          {/*  Café seating  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <img src="/assets/asset_d19mjw.jpg" alt="Tempat duduk kafe dan tanaman" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" />
          </figure>

          {/*  Pastries  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <img src="/assets/asset_dcanko.jpg" alt="Pastry segar yang dipajang" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" />
          </figure>

          {/*  Reading video  */}
          <figure data-card="" data-reveal="" className="group col-span-1 sm:col-span-1 lg:col-span-2 h-[260px] lg:h-full overflow-hidden rounded-3xl bg-white p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" style={{ filter: "blur(12px)", opacity: 0 }}>
            <img src="/assets/asset_40jdk.jpg" alt="Seseorang membaca di samping kopi" className="h-full w-full rounded-[1.25rem] object-cover transition duration-700 group-hover:scale-105" />
          </figure>
        </div>
      </div>
    </section>
  );
}
