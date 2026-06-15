"use client";

import { useEffect, useRef } from "react";
import { site, mapsUrl, directionsUrl } from "@/config/site";

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

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
        className: "map-tiles",
      }).addTo(map);

      const icon = L.divIcon({
        className: "",
        html: `<img src="/brand/img/marker.svg" style="width:72px;height:auto;filter:drop-shadow(0 0 5px rgba(247,228,211,.95)) drop-shadow(0 0 2px rgba(247,228,211,1)) drop-shadow(2px 3px 0 rgba(32,8,12,.3))" alt=""/>`,
        iconSize: [72, 40],
        iconAnchor: [36, 40],
        popupAnchor: [0, -44],
      });

      L.marker([site.coords.lat, site.coords.lng], { icon })
        .addTo(map)
        .bindPopup(
          `<strong style="font-size:15px">${site.name}</strong><br/>${site.address.street}, ${site.address.city}<br/><a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-top:6px;font-weight:700;color:#f36525">Прокласти маршрут →</a>`,
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
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-cream/60 px-5 py-2.5 text-base font-bold text-cream transition-colors hover:border-yellow hover:text-yellow"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M21.7 10.9 13.1 2.3a1.6 1.6 0 0 0-2.2 0l-8.6 8.6a1.6 1.6 0 0 0 0 2.2l8.6 8.6c.6.6 1.6.6 2.2 0l8.6-8.6c.6-.6.6-1.6 0-2.2ZM14 14.5V12h-3.5a.5.5 0 0 0-.5.5V15H8v-2.5A2.5 2.5 0 0 1 10.5 10H14V7.5l3.5 3.5-3.5 3.5Z" />
                </svg>
                Прокласти маршрут
              </a>
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

          </div>
        </div>
      </div>
    </section>
  );
}
