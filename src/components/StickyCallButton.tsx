"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { site, phoneHref } from "@/config/site";

export default function StickyCallButton() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: 1 });
      return;
    }
    const st = ScrollTrigger.create({
      start: () => window.innerHeight * 0.85,
      onEnter: () =>
        gsap.to(el, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "back.out(2)" }),
      onLeaveBack: () =>
        gsap.to(el, { autoAlpha: 0, scale: 0.5, duration: 0.25 }),
    });
    return () => st.kill();
  }, []);

  return (
    <a
      ref={ref}
      href={phoneHref}
      aria-label={`Подзвонити: ${site.phone}`}
      className="invisible fixed bottom-5 right-5 z-50 flex h-16 w-16 scale-50 items-center justify-center rounded-full border-[3px] border-dark bg-orange opacity-0 shadow-[4px_4px_0_var(--color-dark)] active:translate-y-0.5"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 text-cream-light"
        fill="currentColor"
        aria-hidden
      >
        <path d="M6.6 2.8c.8-.3 1.7 0 2.2.7l1.8 2.6c.5.7.5 1.6-.1 2.3l-1 1.2c-.2.3-.3.7-.1 1 .9 1.9 2.4 3.4 4.3 4.3.3.2.7.1 1-.1l1.2-1c.7-.6 1.6-.6 2.3-.1l2.6 1.8c.7.5 1 1.4.7 2.2l-.6 1.6c-.3.9-1.2 1.5-2.1 1.4C10.5 19.9 4.1 13.5 3.3 5.1c-.1-.9.5-1.8 1.4-2.1l1.9-.2Z" />
      </svg>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-orange/60" />
    </a>
  );
}
