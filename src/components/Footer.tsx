export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightYear = currentYear > 2026 ? `2026 - ${currentYear}` : `2026`;

  return (
    <footer id="visit" className="bg-[#17191f] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-[#1e211f] p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
            <div>
              <a href="#top" data-magnetic="" className="inline-flex items-center gap-3 rounded-full outline-none transition duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white/30">
                <img src="/icon.png" alt="District Coffee Logo" className="h-9 w-9 rounded-xl object-cover bg-white" />
                <span className="text-sm font-semibold tracking-[-0.06em]">DISTRICT COFFEE</span>
              </a>
              <h3 data-mask-reveal="" className="mt-8 max-w-md text-4xl font-light leading-none tracking-tight text-white/88 sm:text-5xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="Datang untuk kopi. Menetap untuk ketenangan.">Datang untuk kopi. Menetap untuk ketenangan.</h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                Alun alun Satya Negara, Denokan, Jetis, Kec. Sukoharjo, Kabupaten Sukoharjo, Jawa Tengah 57511
              </p>
              <p className="mt-2 text-sm text-[#c7966e] font-medium">
                Buka 24 jam
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Jelajahi</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/55">
                <li><a data-interactive="" href="#menu" className="transition duration-300 hover:text-white">Menu</a></li>
                <li><a data-interactive="" href="#testimonials" className="transition duration-300 hover:text-white">Ulasan</a></li>
                <li><a data-interactive="" href="#about" className="transition duration-300 hover:text-white">Tentang Kami</a></li>
                <li><a data-interactive="" href="#gallery" className="transition duration-300 hover:text-white">Galeri</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Jam Operasional</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/55">
                <li>Senin—Minggu · Buka 24 Jam</li>
                <li>Dapur · Buka 24 Jam</li>
                <li>Layanan Dine-in & Takeaway</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Dapatkan catatan sangrai mingguan</h4>
              <p className="mt-4 text-sm leading-6 text-white/55">Biji kopi musiman, rilis pastry baru, dan acara santai langsung di email Anda.</p>
              <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email" className="sr-only">Alamat email</label>
                <input id="email" type="email" placeholder="Alamat email" className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#c7966e]/60 focus:bg-white/15 focus:ring-2 focus:ring-[#c7966e]/15" />
                <button data-magnetic="" type="submit" className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#17191f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8d5c4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35">Gabung</button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
            <p>© {copyrightYear} - District Coffee. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
