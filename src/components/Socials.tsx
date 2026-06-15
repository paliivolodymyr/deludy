"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/config/site";
import birdWhite from "../../public/brand/img/bird-tagline-white.png";

export default function Socials() {
  const root = useRef<HTMLElement>(null);
  const igBtn = useRef<HTMLAnchorElement>(null);
  const tgBtn = useRef<HTMLAnchorElement>(null);

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

      const magnetic = (el: HTMLAnchorElement) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          if (Math.hypot(dx, dy) < 120) {
            xTo(dx * 0.18);
            yTo(dy * 0.18);
          } else {
            xTo(0);
            yTo(0);
          }
        };
        window.addEventListener("mousemove", onMove);
        return onMove;
      };

      const listeners: ((e: MouseEvent) => void)[] = [];
      if (igBtn.current) listeners.push(magnetic(igBtn.current));
      if (tgBtn.current) listeners.push(magnetic(tgBtn.current));

      return () => {
        listeners.forEach((fn) => window.removeEventListener("mousemove", fn));
      };
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-orange px-6 py-20 md:py-28">
      <div className="socials-inner mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="w-44 md:w-56">
          <Image src={birdWhite} alt="" sizes="224px" />
        </div>
        <h2 className="mt-6 font-display text-3xl text-cream-light md:text-5xl">
          Будьмо на зв&apos;язку
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            ref={igBtn}
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-[3px] border-dark bg-cream-light px-8 py-4 font-body text-lg font-bold text-dark shadow-[6px_6px_0_var(--color-dark)] transition-colors hover:bg-yellow"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.39.2-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71C3.4 8.5 3.4 8.85 3.4 12s0 3.5.07 4.74c.04.9.2 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.39-.2 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.2-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32C15.5 4 15.15 4 12 4Zm0 3.07a4.93 4.93 0 1 1 0 9.86 4.93 4.93 0 0 1 0-9.86Zm0 1.8a3.13 3.13 0 1 0 0 6.26 3.13 3.13 0 0 0 0-6.26Zm5.13-.96a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
            </svg>
            Instagram
          </a>
          <a
            ref={tgBtn}
            href={site.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написати в Telegram"
            className="inline-flex items-center gap-3 rounded-full border-[3px] border-dark bg-dark px-8 py-4 font-body text-lg font-bold text-cream-light shadow-[6px_6px_0_rgba(32,8,12,0.35)] transition-colors hover:bg-green"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden>
              <path d="M21.94 4.3 18.6 19.86c-.25 1.1-.9 1.38-1.83.86l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.14L18.98 5.4c.4-.36-.09-.56-.63-.2L5.78 13.16.4 11.48c-1.17-.37-1.2-1.17.25-1.74L20.42 2.1c.97-.36 1.82.22 1.52 2.2Z" />
            </svg>
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
}
