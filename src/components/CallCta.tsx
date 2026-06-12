"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { phoneHref } from "@/config/site";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CallCta({ children, className = "" }: Props) {
  const inner = useRef<HTMLSpanElement>(null);

  const wiggle = () => {
    if (prefersReducedMotion() || !inner.current) return;
    gsap.fromTo(
      inner.current,
      { rotate: 0 },
      {
        keyframes: [
          { rotate: -3, duration: 0.08 },
          { rotate: 3, duration: 0.16 },
          { rotate: -2, duration: 0.14 },
          { rotate: 0, duration: 0.1 },
        ],
      },
    );
  };

  return (
    <a
      href={phoneHref}
      onMouseEnter={wiggle}
      className={`inline-block rounded-full border-[3px] border-dark bg-orange px-8 py-4 font-body text-lg font-bold text-cream-light shadow-[6px_6px_0_var(--color-dark)] transition-transform duration-150 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_var(--color-dark)] ${className}`}
    >
      <span ref={inner} className="inline-flex items-center gap-3">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0"
          fill="currentColor"
          aria-hidden
        >
          <path d="M6.6 2.8c.8-.3 1.7 0 2.2.7l1.8 2.6c.5.7.5 1.6-.1 2.3l-1 1.2c-.2.3-.3.7-.1 1 .9 1.9 2.4 3.4 4.3 4.3.3.2.7.1 1-.1l1.2-1c.7-.6 1.6-.6 2.3-.1l2.6 1.8c.7.5 1 1.4.7 2.2l-.6 1.6c-.3.9-1.2 1.5-2.1 1.4C10.5 19.9 4.1 13.5 3.3 5.1c-.1-.9.5-1.8 1.4-2.1l1.9-.2Z" />
        </svg>
        {children}
      </span>
    </a>
  );
}
