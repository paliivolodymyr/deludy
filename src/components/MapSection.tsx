"use client";

import { useEffect, useRef } from "react";
import { site, phoneHref } from "@/config/site";

export default function MapSection() {
  const mapEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !mapEl.current || mapEl.current.dataset.init) return;
      mapEl.current.dataset.init = "1";

      map = L.map(mapEl.current, {
        center: [site.coords.lat, site.coords.lng],
        zoom: 16,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
          className: "map-tiles",
        },
      ).addTo(map);

      const icon = L.divIcon({
        className: "",
        html: `<img src="/brand/img/marker.svg" style="width:72px;height:auto;filter:drop-shadow(2px 3px 0 rgba(32,8,12,.35))" alt=""/>`,
        iconSize: [72, 40],
        iconAnchor: [36, 40],
        popupAnchor: [0, -44],
      });

      L.marker([site.coords.lat, site.coords.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<strong style="font-size:15px">${site.name}</strong><br/>${site.address.street}, ${site.address.city}`,
        )
        .openPopup();
    })();

    return () => {
      cancelled = true;
      map?.remove();
      if (mapEl.current) delete mapEl.current.dataset.init;
    };
  }, []);

  return (
    <section id="map" className="bg-dark px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl text-cream md:text-6xl">
          Де нас знайти?
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-[3fr_2fr]">
          <div
            ref={mapEl}
            className="h-[420px] overflow-hidden rounded-3xl border-[3px] border-cream/80 md:h-[480px]"
            aria-label={`Мапа: ${site.address.street}, ${site.address.city}`}
          />

          <div className="flex flex-col gap-8 font-body text-cream">
            <div>
              <h3 className="font-display text-2xl text-yellow">Адреса</h3>
              <p className="mt-2 text-lg">
                {site.address.street}, {site.address.city}
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-yellow">
                Години роботи
              </h3>
              <ul className="mt-2 space-y-1 text-lg">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-6">
                    <span>{h.days}</span>
                    <span className="font-bold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl text-yellow">
                Замовити каву
              </h3>
              <a
                href={phoneHref}
                className="mt-3 inline-block rounded-full border-[3px] border-cream bg-orange px-7 py-3.5 text-lg font-bold text-cream-light shadow-[5px_5px_0_rgba(247,228,211,0.25)] transition-transform hover:scale-105 active:scale-95"
              >
                {site.phone}
              </a>
            </div>

            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-cream/70 underline-offset-4 hover:text-yellow hover:underline"
            >
              Instagram: {site.socials.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
