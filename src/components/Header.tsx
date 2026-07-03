import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = ['top', 'menu', 'testimonials', 'about', 'gallery', 'visit'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -55% 0px', // detects current section in center of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const getLinkClass = (sectionId: string) => {
    const base = "rounded-full px-3 py-2 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#995F2F]/35";
    if (activeSection === sectionId) {
      return `${base} bg-white text-[#995F2F] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.06),0px_1px_0px_0px_rgba(25,28,33,0.01),0px_0px_0px_1px_rgba(25,28,33,0.04)]`;
    }
    return `${base} text-black/60 hover:bg-white hover:text-[#17191f]`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#faf8f1]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" aria-label="District Coffee home" data-magnetic="" className="group flex items-center gap-3 rounded-full outline-none transition duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#995F2F]/40">
          <img src="/icon.png" alt="District Coffee Logo" className="h-9 w-9 rounded-xl object-cover" />
          <span className="text-sm font-semibold tracking-[-0.06em] text-[#17191f] sm:text-base">DISTRICT COFFEE</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#top" data-interactive="" className={getLinkClass('top')}>Beranda</a>
          <a href="#menu" data-interactive="" className={getLinkClass('menu')}>Menu</a>
          <a href="#testimonials" data-interactive="" className={getLinkClass('testimonials')}>Ulasan</a>
          <a href="#about" data-interactive="" className={getLinkClass('about')}>Tentang Kami</a>
          <a href="#gallery" data-interactive="" className={getLinkClass('gallery')}>Galeri</a>
        </div>

        <a href="#visit" data-magnetic="" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#17191f] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#faf2eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#995F2F]/35">
          Kunjungi hari ini
          <Icon icon="solar:arrow-right-linear" strokeWidth={1.5} className="text-lg transition duration-300 group-hover:translate-x-1" />
        </a>
      </nav>
    </header>
  );
}
