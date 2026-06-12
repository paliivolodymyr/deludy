import Image from "next/image";
import { site } from "@/config/site";
import dezhludy from "../../public/brand/img/dezhludy.png";

export default function Footer() {
  return (
    <footer className="bg-dark px-6 pb-10 pt-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 border-t border-cream/15 pt-10">
        <div className="w-48 md:w-60">
          <Image src={dezhludy} alt="Де ж люди" />
        </div>
        <p className="font-body text-sm text-cream/50">
          © {new Date().getFullYear()} {site.name} — {site.tagline}
        </p>
      </div>
    </footer>
  );
}
