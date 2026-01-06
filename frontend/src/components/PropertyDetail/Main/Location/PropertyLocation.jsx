import * as Tabs from "@radix-ui/react-tabs";
import { useMemo, useState } from "react";
import LocationMap from "./LocationMap";

const RECREATION_PLACES = [
  { id: 1, title: "پارک ملت", distance: "۵ دقیقه" },
  { id: 2, title: "باشگاه انقلاب", distance: "۸ دقیقه" },
];

const TRANSPORT_PLACES = [
  { id: 1, title: "ایستگاه مترو قیطریه", distance: "۶ دقیقه" },
  { id: 2, title: "ایستگاه اتوبوس", distance: "۳ دقیقه" },
];

export default function PropertyLocation({ property }) {
  const [showMap, setShowMap] = useState(false);

  const lat = property?.lat ?? 35.796;
  const lng = property?.lng ?? 51.433;

  const addressLine = useMemo(() => {
    const city = property?.city ?? "تهران";
    const area = property?.area ?? "—";
    const address = property?.address ?? "";
    return `${city} - ${area}${address ? `، ${address}` : ""}`;
  }, [property]);

  return (
    <section
      id="location"
      className="scroll-mt-32 py-8 border-b border-neutral-tint-3"
    >
      <div className="flex items-center justify-between mb-4">
        <p className="heading-h6">موقعیت مکانی</p>

        <button
          type="button"
          onClick={() => setShowMap((s) => !s)}
          className="text-btn-s text-primary"
        >
          {showMap ? "نمایش لیست" : "مشاهده نقشه"}
        </button>
      </div>

      <p className="text-body-1xs text-neutral-tint-2 mb-4">{addressLine}</p>

      <Tabs.Root defaultValue="recreation" dir="rtl">
        <Tabs.List className="inline-flex bg-neutral-tint-6 rounded-xl p-1">
          <Tabs.Trigger
            value="recreation"
            className="px-4 py-2 rounded-lg text-body-3xs text-neutral-tint-2 data-[state=active]:bg-white data-[state=active]:text-primary transition"
          >
            تفریحی
          </Tabs.Trigger>

          <Tabs.Trigger
            value="transport"
            className="px-4 py-2 rounded-lg text-body-3xs text-neutral-tint-2 data-[state=active]:bg-white data-[state=active]:text-primary transition"
          >
            حمل‌و‌نقل
          </Tabs.Trigger>
        </Tabs.List>

        <div className="mt-4 bg-neutral-tint-6 rounded-xl p-4">
          {showMap ? (
            <LocationMap lat={lat} lng={lng} />
          ) : (
            <>
              <Tabs.Content value="recreation">
                <ul className="space-y-3">
                  {RECREATION_PLACES.map((p) => (
                    <li
                      key={p.id}
                      className="flex items-center justify-between bg-white rounded-lg px-4 py-3"
                    >
                      <span className="text-body-s text-neutral-tint-1">
                        {p.title}
                      </span>
                      <span className="text-body-1xs text-neutral-tint-2">
                        {p.distance}
                      </span>
                    </li>
                  ))}
                </ul>
              </Tabs.Content>

              <Tabs.Content value="transport">
                <ul className="space-y-3">
                  {TRANSPORT_PLACES.map((p) => (
                    <li
                      key={p.id}
                      className="flex items-center justify-between bg-white rounded-lg px-4 py-3"
                    >
                      <span className="text-body-s text-neutral-tint-1">
                        {p.title}
                      </span>
                      <span className="text-body-1xs text-neutral-tint-2">
                        {p.distance}
                      </span>
                    </li>
                  ))}
                </ul>
              </Tabs.Content>
            </>
          )}
        </div>
      </Tabs.Root>
    </section>
  );
}
