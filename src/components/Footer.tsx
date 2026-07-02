export default function Footer() {
  return (
    <footer id="visit" className="bg-[#17191f] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-[#1e211f] p-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
            <div>
              <a href="#top" data-magnetic="" className="inline-flex items-center gap-3 rounded-full outline-none transition duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-white/30">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#17191f]">
                  <span className="text-sm font-semibold tracking-[-0.08em]">CN</span>
                </span>
                <span className="text-sm font-semibold tracking-[-0.06em]">CAFÉNOVA</span>
              </a>
              <h3 data-mask-reveal="" className="mt-8 max-w-md text-4xl font-light leading-none tracking-tight text-white/88 sm:text-5xl" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }} aria-label="Come for the coffee. Stay for the light.">Come for the coffee. Stay for the light.</h3>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                42 Greenway Lane, Portland · Open daily from 7:00 to 18:00.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Explore</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/55">
                <li><a data-interactive="" href="#features" className="transition duration-300 hover:text-white">Menu</a></li>
                <li><a data-interactive="" href="#testimonials" className="transition duration-300 hover:text-white">Guest notes</a></li>
                <li><a data-interactive="" href="#about" className="transition duration-300 hover:text-white">About</a></li>
                <li><a data-interactive="" href="#gallery" className="transition duration-300 hover:text-white">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Hours</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/55">
                <li>Mon—Fri · 7:00—18:00</li>
                <li>Saturday · 8:00—18:00</li>
                <li>Sunday · 8:00—16:00</li>
                <li>Kitchen closes at 15:00</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Get the weekly roast note</h4>
              <p className="mt-4 text-sm leading-6 text-white/55">Seasonal beans, pastry drops, and quiet events in your inbox.</p>
              <form className="mt-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input id="email" type="email" placeholder="Email address" className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#b9d9ab]/60 focus:bg-white/15 focus:ring-2 focus:ring-[#b9d9ab]/15" />
                <button data-magnetic="" type="submit" className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#17191f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#dce5d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35">Join</button>
              </form>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/42 sm:flex-row">
            <p>Copyright © 2028 Café Nova</p>
            <div className="flex flex-wrap gap-5">
              <a data-interactive="" href="#" className="transition duration-300 hover:text-white">Instagram</a>
              <a data-interactive="" href="#" className="transition duration-300 hover:text-white">Privacy</a>
              <a data-interactive="" href="#" className="transition duration-300 hover:text-white">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
