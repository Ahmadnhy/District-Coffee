import { Icon } from '@iconify/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#fbfbf8] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="">
            <span data-reveal="" className="inline-flex rounded-full bg-[#995F2F] px-3 py-1 text-xs font-semibold text-white">Catatan pengunjung</span>
            <h2 data-mask-reveal="" className="mt-4 max-w-3xl text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="Tipe tempat yang membuat orang-orang membangun rutinitas">Tipe tempat yang membuat orang-orang membangun rutinitas</h2>
          </div>
          <a href="#visit" data-magnetic="" data-reveal="" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#17191f] px-6 py-4 text-sm font-semibold text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-[#995F2F]">
            Rencanakan kunjungan
            <Icon icon="solar:map-point-linear" strokeWidth={1.5} className="text-lg" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <article data-card="" data-reveal="" className="rounded-3xl bg-white p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2">
            <div className="flex gap-1 text-[#995F2F]" aria-label="Five stars">
              <Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" />
            </div>
            <p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>“District Coffee memiliki perpaduan langka antara kopi berkualitas tinggi dan kesederhanaan. Menu kopi filternya luar biasa indah.”</p>
            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
              <img src="/assets/customer2.jpg" alt="Guest Lina Ortiz" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">Lina Ortiz</p>
                <p className="text-xs text-black/50">Pengrajin Keramik</p>
              </div>
            </div>
          </article>

          <article data-card="" data-reveal="" className="rounded-3xl bg-[#ebd9cc] p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
            <div className="flex gap-1 text-[#995F2F]" aria-label="Five stars">
              <Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" />
            </div>
            <p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>“Saya sering membawa klien ke sini karena suasananya terasa dirancang dengan baik. Cukup tenang untuk berpikir, cukup hangat untuk betah berlama-lama.”</p>
            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
              <img src="/assets/customer3.jpg" alt="Guest Theo Park" className="h-12 w-12 rounded-full object-cover" />
              <div className="">
                <p className="text-sm font-semibold">Theo Park</p>
                <p className="text-xs text-black/50">Pendiri Studio</p>
              </div>
            </div>
          </article>

          <article data-card="" data-reveal="" className="rounded-3xl bg-white p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
            <div className="flex gap-1 text-[#995F2F]" aria-label="Five stars">
              <Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" /><Icon icon="solar:star-bold" className="text-base" />
            </div>
            <p className="mt-8 text-2xl font-light leading-8 tracking-tight text-black/80" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>“Roti cardamom di sini adalah alasan yang cukup bagi saya untuk menyeberangi kota. Tambahkan secangkir cappuccino dan semuanya menjadi sempurna.”</p>
            <div className="mt-8 flex items-center gap-3 border-t border-black/10 pt-5">
              <img src="/assets/customer4.jpg" alt="Guest Amara Bell" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">Amara Bell</p>
                <p className="text-xs text-black/50">Penulis Kuliner</p>
              </div>
            </div>
          </article>
        </div>

        <div data-reveal="" className="mt-8 grid gap-5 rounded-[2rem] bg-[#17191f] p-5 text-white lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <img src="/assets/menu.png" alt="Interior kedai kopi yang nyaman" className="h-80 w-full rounded-3xl object-cover lg:h-full" />
          <div className="flex flex-col justify-center rounded-3xl bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c7966e]">Bukti nyata</p>
            <p className="mt-5 text-4xl font-light leading-tight tracking-tight sm:text-5xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
              82% pengunjung akhir pekan kembali dalam waktu dua minggu.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
              Kami mengukur loyalitas dengan cara yang sederhana: wajah-wajah yang akrab kembali datang, pesanan yang selalu diingat, dan rasa kopi yang cukup lezat untuk menghiasi hari-hari Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
