import { Icon } from '@iconify/react';

export default function About() {
  return (
    <section id="about" className="bg-[#faf8f1] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="">
          <span data-reveal="" className="inline-flex rounded-full bg-[#995F2F] px-3 py-1 text-xs font-semibold text-white">Pendekatan kami</span>
          <h2 data-mask-reveal="" className="mt-4 text-4xl font-light leading-none tracking-tight sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="Dibuat oleh barista yang percaya keramahan adalah sebuah seni">Dibuat oleh barista yang percaya keramahan adalah sebuah seni</h2>
          <p data-reveal="" className="mt-6 text-base leading-7 text-black/62">
            Kami mengambil biji kopi secara sabar dari importir tepercaya, menyangrai dalam batch mingguan terukur, dan melatih setiap barista untuk menyajikan kopi secara ramah dan penuh kejelasan. Hasilnya adalah kafe yang terasa apik, personal, dan mudah untuk dikunjungi kembali.
          </p>

          <div data-reveal="" className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <p className="text-3xl font-light tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Hubungan langsung</p>
              <p className="mt-3 text-sm leading-6 text-black/58">Kopi musiman yang dibeli melalui kemitraan produsen yang transparan.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <p className="text-3xl font-light tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Layanan rendah limbah</p>
              <p className="mt-3 text-sm leading-6 text-black/58">Cangkir yang dapat digunakan kembali, ampas kopi yang dikomposkan, dan perencanaan kue berdasarkan permintaan.</p>
            </div>
          </div>
        </div>

        <div data-reveal="" className="grid gap-5 sm:grid-cols-2">
          <div className="flex h-full flex-col gap-5">
            <div data-card="" className="rounded-3xl bg-[#e9eadf] p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
              <img src="/assets/asset_jzev17.jpg" alt="Kepala barista sedang mencicipi espresso" className="h-64 w-full rounded-2xl object-cover" />
              <p className="mt-4 text-sm font-medium">Nico Vale</p>
              <p className="text-xs text-black/50">Kepala barista</p>
            </div>
            <div data-card="" className="flex flex-1 flex-col justify-between rounded-3xl bg-[#17191f] p-6 text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
              <Icon icon="solar:medal-ribbons-star-linear" strokeWidth={1.5} className="text-3xl text-[#c7966e]" />
              <img src="/assets/asset_mabkrx.jpg" alt="Biji kopi yang baru disangrai" className="mt-6 h-40 w-full rounded-2xl object-cover opacity-90 transition-opacity duration-300 hover:opacity-100" />
              <p className="mt-6 text-3xl font-extralight leading-none tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Disangrai dalam waktu tujuh hari sebelum disajikan.</p>
            </div>
          </div>

          <div className="space-y-5 sm:pt-14">
            <div data-card="" className="rounded-3xl bg-white p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#995F2F]">Misi</p>
              <p className="mt-5 text-3xl font-light leading-tight tracking-tight" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Membuat kopi berkualitas terasa ramah, konsisten, dan berkesan secara tenang.</p>
            </div>
            <div data-card="" className="rounded-3xl bg-[#e8d5c4] p-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2" style={{ transformOrigin: "50% 50%" }}>
              <img src="/assets/asset_wm4ih4.jpg" alt="Koki pastry sedang menyiapkan adonan" className="h-72 w-full rounded-2xl object-cover" />
              <p className="mt-4 text-sm font-semibold">Iris Chen</p>
              <p className="text-xs text-black/50">Pimpinan pastry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
