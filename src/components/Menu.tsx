"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/config/site";
import cupOctopus from "../../public/brand/img/cup-octopus.png";
import heartGreen from "../../public/brand/img/heart-green.png";
import heartOrange from "../../public/brand/img/heart-orange.png";

export default function Menu() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".menu-card", {
        y: 60,
        opacity: 0,
        scale: 0.9,
        rotate: () => gsap.utils.random(-4, 4),
        stagger: 0.08,
        duration: 0.55,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ".menu-grid", start: "top 75%" },
      });
      gsap.from(".menu-octopus", {
        y: 80,
        opacity: 0,
        rotate: -12,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
      gsap.to(".menu-octopus", {
        rotate: 4,
        y: -10,
        duration: 2.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="menu" className="relative bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl text-dark md:text-6xl">Меню</h2>
            <p className="mt-3 font-body text-base font-medium text-dark/60">
              відкриті щодня · {site.hours[0].time}
            </p>
          </div>
          <div aria-hidden className="menu-octopus w-28 shrink-0 md:w-44">
            <Image src={cupOctopus} alt="" sizes="176px" />
          </div>
        </div>

        <div className="menu-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.menu.map((cat) => (
            <div key={cat.title} className="menu-card group">
              <div className="h-full rounded-3xl border-[3px] border-dark bg-cream-light p-6 shadow-[5px_5px_0_var(--color-dark)] transition-transform duration-200 group-hover:-rotate-1 group-hover:scale-[1.02]">
              <div className="flex items-center justify-between gap-2">
                <h3
                  className={`font-display text-2xl ${
                    cat.accent === "green" ? "text-green" : "text-orange"
                  }`}
                >
                  {cat.title}
                </h3>
                <div className="w-7 shrink-0">
                  <Image
                    src={cat.accent === "green" ? heartGreen : heartOrange}
                    alt=""
                    sizes="28px"
                  />
                </div>
              </div>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3 font-body"
                  >
                    <span className="font-medium text-dark">{item.name}</span>
                    <span className="shrink-0 font-bold text-dark/80">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          ))}

          <div className="menu-card group">
            <div className="h-full rounded-3xl border-[3px] border-dark bg-green p-6 shadow-[5px_5px_0_var(--color-dark)] transition-transform duration-200 group-hover:-rotate-1 group-hover:scale-[1.02]">
            <h3 className="font-display text-2xl text-cream-light">
              {site.addons.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {site.addons.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-3 font-body"
                >
                  <span className="font-medium text-cream-light">
                    {item.name}
                  </span>
                  <span className="shrink-0 font-bold text-yellow">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center font-body text-base font-medium text-dark/70">
          Ціни у гривнях. Подзвоніть — і ваша кава вже готується ☕
        </p>

        {/* Лід-меню */}
        <div className="mt-20">
          <h3 className="font-display text-3xl text-dark md:text-5xl">лід-меню</h3>
          <p className="mt-2 font-body text-base font-medium text-dark/60">сезонно · охолоджує</p>
          <div className="menu-grid mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.lidMenu.map((cat) => (
              <div key={cat.title} className="menu-card group">
                <div className="h-full rounded-3xl border-[3px] border-dark bg-cream-light p-6 shadow-[5px_5px_0_var(--color-dark)] transition-transform duration-200 group-hover:-rotate-1 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className={`font-display text-2xl ${cat.accent === "green" ? "text-green" : "text-orange"}`}>
                      {cat.title}
                    </h4>
                    <div className="w-7 shrink-0">
                      <Image src={cat.accent === "green" ? heartGreen : heartOrange} alt="" sizes="28px" />
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item.name} className="font-body">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="font-medium text-dark">{item.name}</span>
                          <span className="shrink-0 font-bold text-dark/80">{item.price}</span>
                        </div>
                        {"note" in item && item.note && (
                          <p className="mt-0.5 text-sm italic text-dark/50">{item.note}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
