import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Trusted from './components/Trusted';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Lenis Smooth Scroll
    let lenis: Lenis | null = null;
    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.2,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const updateTicker = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);

      // Handle anchor links
      const anchors = document.querySelectorAll('a[href^="#"]');
      const clickHandlers = new Map();

      anchors.forEach((anchor) => {
        const handler = (event: Event) => {
          const href = anchor.getAttribute("href");
          if (!href || href === "#") return;
          const target = document.querySelector(href);
          if (!target || !(target instanceof HTMLElement)) return;
          event.preventDefault();
          lenis?.scrollTo(target, { offset: -80 });
        };
        anchor.addEventListener("click", handler);
        clickHandlers.set(anchor, handler);
      });

      return () => {
        gsap.ticker.remove(updateTicker);
        lenis?.destroy();
        anchors.forEach((anchor) => {
          const handler = clickHandlers.get(anchor);
          if (handler) anchor.removeEventListener("click", handler);
        });
      };
    }
  }, []);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // 2. Heading Mask Reveal
      document.querySelectorAll("[data-mask-reveal]").forEach((heading) => {
        const text = heading.textContent?.trim() || "";
        heading.setAttribute("aria-label", text);
        heading.textContent = "";

        text.split(" ").forEach((word) => {
          const outer = document.createElement("span");
          outer.style.display = "inline-block";
          outer.style.overflow = "hidden";
          outer.style.verticalAlign = "top";
          outer.style.paddingBottom = "0.05em";

          const inner = document.createElement("span");
          inner.textContent = word;
          inner.style.display = "inline-block";
          inner.style.transform = "translateY(110%)";
          inner.style.willChange = "transform";

          outer.appendChild(inner);
          heading.appendChild(outer);
          heading.appendChild(document.createTextNode(" "));
        });

        if (prefersReducedMotion) {
          heading.querySelectorAll("span span").forEach((span) => {
            (span as HTMLElement).style.transform = "translateY(0)";
          });
          return;
        }

        gsap.to(heading.querySelectorAll("span span"), {
          y: "0%",
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.035,
          scrollTrigger: {
            trigger: heading,
            start: "top 86%",
            once: true
          }
        });
      });

      // 3. Scroll Reveal Animation
      if (!prefersReducedMotion) {
        gsap.utils.toArray("[data-reveal]").forEach((item: any, index: number) => {
          gsap.fromTo(item, {
            opacity: 0,
            y: 28,
            filter: "blur(12px)"
          }, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            delay: Math.min((index % 6) * 0.045, 0.25),
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true
            }
          });
        });

        // 4. Card Tilt Animation
        gsap.utils.toArray("[data-card]").forEach((card: any) => {
          const handleMouseMove = (event: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * 5;
            const rotateX = ((y / rect.height) - 0.5) * -5;

            gsap.to(card, {
              rotateX,
              rotateY,
              transformPerspective: 900,
              transformOrigin: "center",
              duration: 0.35,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              rotateX: 0,
              rotateY: 0,
              duration: 0.55,
              ease: "elastic.out(1, 0.45)"
            });
          };

          card.addEventListener("mousemove", handleMouseMove);
          card.addEventListener("mouseleave", handleMouseLeave);
        });

        // 5. Magnetic elements
        gsap.utils.toArray("[data-magnetic]").forEach((element: any) => {
          const handleMouseMove = (event: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;

            gsap.to(element, {
              x: x * 0.18,
              y: y * 0.18,
              duration: 0.35,
              ease: "power3.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(element, {
              x: 0,
              y: 0,
              duration: 0.55,
              ease: "elastic.out(1, 0.45)"
            });
          };

          element.addEventListener("mousemove", handleMouseMove);
          element.addEventListener("mouseleave", handleMouseLeave);
        });
      } else {
        // Fallback for prefersReducedMotion
        document.querySelectorAll("[data-reveal]").forEach((item: any) => {
          item.style.opacity = "1";
          item.style.transform = "none";
          item.style.filter = "none";
        });
      }

      // 6. Scale effect on click (pointer down/up)
      document.querySelectorAll("button, a, input").forEach((element: any) => {
        const handlePointerDown = () => {
          if (prefersReducedMotion) return;
          gsap.to(element, { scale: 0.985, duration: 0.12, ease: "power2.out" });
        };

        const handlePointerUpReset = () => {
          if (prefersReducedMotion) return;
          gsap.to(element, { scale: 1, duration: 0.22, ease: "back.out(2)" });
        };

        element.addEventListener("pointerdown", handlePointerDown);
        element.addEventListener("pointerup", handlePointerUpReset);
        element.addEventListener("pointerleave", handlePointerUpReset);
      });

    }, containerRef); // Scope selector to container

    return () => ctx.revert();
  }, []);

  // 7. Video intersection and presets
  useEffect(() => {
    function playVideo(video: HTMLVideoElement) {
      const promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {});
      }
    }

    function setupVideo(video: HTMLVideoElement) {
      video.muted = true;
      video.playsInline = true;

      const preset = video.dataset.auraVideoPreset || "loop-in-view";
      if (preset === "hover") {
        const enterHandler = () => playVideo(video);
        const leaveHandler = () => {
          video.pause();
          video.currentTime = 0;
        };
        video.addEventListener("mouseenter", enterHandler);
        video.addEventListener("mouseleave", leaveHandler);
        return () => {
          video.removeEventListener("mouseenter", enterHandler);
          video.removeEventListener("mouseleave", leaveHandler);
        };
      }

      if (!("IntersectionObserver" in window)) {
        playVideo(video);
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (preset === "play-once" && (video as any).__auraVideoPlayed === true) {
              return;
            }
            playVideo(video);
          } else {
            video.pause();
          }
        });
      }, { threshold: 0.35 });

      if (preset === "play-once") {
        const endedHandler = () => {
          (video as any).__auraVideoPlayed = true;
        };
        video.addEventListener("ended", endedHandler, { once: true });
      }

      observer.observe(video);

      return () => {
        observer.unobserve(video);
        observer.disconnect();
      };
    }

    const cleanups: Array<() => void> = [];
    const videos = document.querySelectorAll<HTMLVideoElement>("video[data-aura-video-preset]");
    videos.forEach((video) => {
      const cleanup = setupVideo(video);
      if (cleanup) cleanups.push(cleanup);
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <main className="mx-auto min-h-screen w-full max-w-[112rem] overflow-x-clip bg-[#faf8f1] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
        <Header />
        <Hero />
        <Menu />
        <Testimonials />
        <Trusted />
        <About />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default App;
