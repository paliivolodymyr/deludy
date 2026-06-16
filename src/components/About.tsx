"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import birdWhite from "../../public/brand/img/bird-tagline-white.png";
import heartYellow from "../../public/brand/img/heart-yellow.png";

const LINES = [
  "ДеЛюди — це кав'ярня третьої хвилі родом з Файного міста.",
  "Ми обираємо свіжообсмажені зерна у людей, які знають своє діло,",
  "заварюємо з душею і завжди раді бачити вас.",
  "Бо кава — це привід. А люди — це причина.",
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-line", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
      gsap.from(".about-bird", {
        x: 120,
        opacity: 0,
        rotate: 10,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: root.current, start: "top 55%" },
      });
      gsap.to(".about-bird", {
        y: -16,
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(".about-heart", {
        rotate: 12,
        y: -10,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about"
      className="relative overflow-hidden rounded-t-[3rem] bg-green px-6 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url(/brand/img/pattern-white.svg)",
          backgroundSize: "480px",
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[3fr_2fr]">
        <div>
          <h2 className="font-display text-4xl text-cream md:text-6xl">
            Хто ми такі?
          </h2>
          <div className="mt-8 space-y-3">
            {LINES.map((line, i) => (
              <p
                key={i}
                className="about-line font-body text-lg font-medium leading-relaxed text-cream md:text-xl"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-64 md:w-80">
          <div className="about-bird">
            <Image src={birdWhite} alt="ДеЛюди — кав'ярня третьої хвилі" sizes="320px" />
          </div>
          <div
            aria-hidden
            className="about-heart absolute -bottom-8 -left-10 w-20"
          >
            <Image src={heartYellow} alt="" sizes="80px" />
          </div>
        </div>
      </div>
    </section>
  );
}
