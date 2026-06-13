import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import birdBrown from "../../public/brand/img/bird-tagline-brown.png";

export const metadata: Metadata = {
  title: `Сторінку не знайдено — ${site.name}`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-cream px-6 text-center">
      <div className="w-44 md:w-56">
        <Image src={birdBrown} alt="" priority sizes="224px" />
      </div>
      <h1 className="mt-6 font-display text-7xl text-orange md:text-9xl">404</h1>
      <p className="mt-4 max-w-md font-body text-lg font-medium text-dark/80 md:text-xl">
        Цієї сторінки немає. Але кава точно є.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full border-[3px] border-dark bg-orange px-8 py-4 font-body text-lg font-bold text-cream-light shadow-[6px_6px_0_var(--color-dark)] transition-transform duration-150 active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_var(--color-dark)]"
      >
        На головну
      </Link>
    </main>
  );
}
