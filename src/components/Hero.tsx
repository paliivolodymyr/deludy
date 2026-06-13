"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import CallCta from "./CallCta";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/config/site";
import markDark from "../../public/brand/img/mark-dark.png";
import heartOrange from "../../public/brand/img/heart-orange.png";

const LETTERS = ["д", "е", "Л", "ю", "д", "и"];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

      tl.from(".hero-letter", {
        y: 90,
        opacity: 0,
        rotate: () => gsap.utils.random(-20, 20),
        stagger: 0.07,
        duration: 0.7,
      })
        .from(
          ".hero-bird",
          {
            duration: 1.4,
            ease: "power2.out",
            motionPath: {
              path: [
                { x: -400, y: -150 },
                { x: -180, y: -260 },
                { x: 0, y: 0 },
              ],
              curviness: 1.5,
            },
            opacity: 0,
          },
          "-=0.4",
        )
        .from(".hero-tagline", { y: 30, opacity: 0, duration: 0.5 }, "-=0.6")
        .from(".hero-cta", { scale: 0, duration: 0.55 }, "-=0.2")
        .from(
          ".hero-doodle",
          { scale: 0, rotate: -30, stagger: 0.12, duration: 0.5 },
          "-=0.3",
        );

      // idle float loops
      gsap.to(".hero-bird", {
        y: -14,
        rotate: 2,
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.6,
      });
      gsap.to(".hero-heart", {
        y: -10,
        rotate: 8,
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 2,
      });

      // pattern strip slow drift + hero parallax out
      gsap.to(".hero-pattern", {
        backgroundPosition: "-565px 0px",
        duration: 30,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".hero-inner", {
        yPercent: -12,
        opacity: 0.4,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
    >
      {/* faint background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/brand/img/pattern-brown.svg)",
          backgroundSize: "480px",
        }}
      />

      <div className="hero-inner relative z-10 flex flex-col items-center px-6 pb-28 pt-16 text-center">
        <div className="hero-bird relative mb-2 w-[clamp(180px,30vw,320px)]">
          <Image
            src={markDark}
            alt="Логотип кав'ярні ДеЛюди"
            priority
            sizes="(max-width: 768px) 60vw, 320px"
          />
        </div>

        <h1
          className="font-display leading-none text-dark"
          style={{ fontSize: "clamp(4.5rem, 16vw, 11rem)" }}
        >
          {LETTERS.map((l, i) => (
            <span key={i} className="hero-letter inline-block">
              {l}
            </span>
          ))}
        </h1>

        <p className="hero-tagline mt-4 font-body text-xl font-medium text-dark/80 md:text-2xl">
          {site.tagline}
        </p>

        <div className="mt-10">
          <div className="hero-cta">
            <CallCta>Подзвонити й замовити</CallCta>
          </div>
        </div>

        <a
          href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
          className="mt-4 font-body text-base font-semibold text-dark/70 underline-offset-4 hover:underline"
        >
          {site.phone}
        </a>

        <div
          aria-hidden
          className="hero-doodle hero-heart pointer-events-none absolute -left-4 top-24 w-16 md:left-[12%] md:top-[20%] md:w-24"
        >
          <Image src={heartOrange} alt="" sizes="96px" />
        </div>
      </div>

      {/* scrolling pattern strip at the bottom */}
      <div
        aria-hidden
        className="hero-pattern absolute bottom-0 left-0 h-24 w-full opacity-15"
        style={{
          backgroundImage: "url(/brand/img/pattern-brown.svg)",
          backgroundSize: "auto 200%",
          backgroundRepeat: "repeat-x",
        }}
      />
    </section>
  );
}
