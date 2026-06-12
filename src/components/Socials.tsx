"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/config/site";
import birdWhite from "../../public/brand/img/bird-tagline-white.png";

export default function Socials() {
  const root = useRef<HTMLElement>(null);
  const btn = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".socials-inner > *", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });

      // magnetic button
      const el = btn.current;
      if (!el) return;
      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);
        if (dist < 160) {
          xTo(dx * 0.3);
          yTo(dy * 0.3);
        } else {
          xTo(0);
          yTo(0);
        }
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-orange px-6 py-20 md:py-28">
      <div className="socials-inner mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="w-44 md:w-56">
          <Image src={birdWhite} alt="" />
        </div>
        <h2 className="mt-6 font-display text-3xl text-cream-light md:text-5xl">
          Ми в інстаграмі
        </h2>
        <p className="mt-3 font-body text-xl font-bold text-dark md:text-2xl">
          {site.socials.instagramHandle}
        </p>
        <a
          ref={btn}
          href={site.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full border-[3px] border-dark bg-cream-light px-8 py-4 font-body text-lg font-bold text-dark shadow-[6px_6px_0_var(--color-dark)] transition-colors hover:bg-yellow"
        >
          Підписатись
        </a>
      </div>
    </section>
  );
}
