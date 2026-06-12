"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import g1 from "../../public/brand/gallery/g1.jpg";
import g2 from "../../public/brand/gallery/g2.jpg";
import g3 from "../../public/brand/gallery/g3.jpg";
import g4 from "../../public/brand/gallery/g4.jpg";
import g5 from "../../public/brand/gallery/g5.jpg";
import g6 from "../../public/brand/gallery/g6.jpg";
import g7 from "../../public/brand/gallery/g7.jpg";
import g8 from "../../public/brand/gallery/g8.jpg";
import teapot from "../../public/brand/img/teapot.png";
import cupHug from "../../public/brand/img/cup-hug.png";
import heartOrange from "../../public/brand/img/heart-orange.png";
import heartYellow from "../../public/brand/img/heart-yellow.png";

const ROW_A: (StaticImageData | "teapot" | "heart")[] = [
  g1,
  "heart",
  g2,
  g3,
  "teapot",
  g4,
];
const ROW_B: (StaticImageData | "cup" | "heart2")[] = [
  g5,
  "cup",
  g6,
  g7,
  "heart2",
  g8,
];

function RowItem({
  item,
}: {
  item: StaticImageData | "teapot" | "cup" | "heart" | "heart2";
}) {
  if (item === "teapot" || item === "cup" || item === "heart" || item === "heart2") {
    const src =
      item === "teapot"
        ? teapot
        : item === "cup"
          ? cupHug
          : item === "heart"
            ? heartOrange
            : heartYellow;
    return (
      <div className="flex w-28 shrink-0 items-center justify-center md:w-36">
        <Image src={src} alt="" className="w-20 md:w-28" />
      </div>
    );
  }
  return (
    <div className="h-52 w-72 shrink-0 overflow-hidden rounded-3xl border-[3px] border-dark shadow-[5px_5px_0_rgba(32,8,12,0.2)] md:h-64 md:w-96">
      <Image
        src={item}
        alt="Атмосфера кав'ярні ДеЛюди"
        className="h-full w-full object-cover"
        sizes="(max-width: 768px) 288px, 384px"
      />
    </div>
  );
}

export default function Gallery() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to(".gallery-row-a", {
        xPercent: -50,
        duration: 40,
        repeat: -1,
        ease: "none",
      });
      gsap.fromTo(
        ".gallery-row-b",
        { xPercent: -50 },
        { xPercent: 0, duration: 40, repeat: -1, ease: "none" },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="gallery"
      className="overflow-hidden bg-cream pb-24 md:pb-32"
    >
      <h2 className="px-6 text-center font-display text-4xl text-dark md:text-6xl">
        Атмосфера
      </h2>

      <div className="mt-12 space-y-8">
        <div className="gallery-row-a flex w-max gap-6 pr-6">
          {[...ROW_A, ...ROW_A].map((item, i) => (
            <RowItem key={i} item={item} />
          ))}
        </div>
        <div className="gallery-row-b flex w-max gap-6 pr-6">
          {[...ROW_B, ...ROW_B].map((item, i) => (
            <RowItem key={i} item={item} />
          ))}
        </div>
      </div>

      <p className="mt-10 px-6 text-center font-body text-sm text-dark/50">
        * тимчасові фото — скоро тут будуть справжні кадри з кав'ярні
      </p>
    </section>
  );
}
