import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f1]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" aria-label="Café Nova home" data-magnetic="" className="group flex items-center gap-3 rounded-full outline-none transition duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#1f6f49]/40">
          <span className="text-sm font-semibold tracking-[-0.06em] text-[#17191f] sm:text-base">CAFÉNOVA</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" data-interactive="" className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition duration-300 hover:bg-white hover:text-[#17191f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35">Menu</a>
          <a href="#testimonials" data-interactive="" className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition duration-300 hover:bg-white hover:text-[#17191f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35">Stories</a>
          <a href="#about" data-interactive="" className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition duration-300 hover:bg-white hover:text-[#17191f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35">About</a>
          <a href="#gallery" data-interactive="" className="rounded-full px-3 py-2 text-sm font-medium text-black/60 transition duration-300 hover:bg-white hover:text-[#17191f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35">Gallery</a>
        </div>

        <a href="#visit" data-magnetic="" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#17191f] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f3f7ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f6f49]/35">
          Visit today
          <Icon icon="solar:arrow-right-linear" strokeWidth={1.5} className="text-lg transition duration-300 group-hover:translate-x-1" />
        </a>
      </nav>
    </header>
  );
}
