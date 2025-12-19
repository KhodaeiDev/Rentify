import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

const RECREATION_PLACES = [
  { id: 1, title: "پارک ملت", distance: "۵ دقیقه" },
  { id: 2, title: "باشگاه انقلاب", distance: "۸ دقیقه" },
];

const TRANSPORT_PLACES = [
  { id: 1, title: "ایستگاه مترو قیطریه", distance: "۶ دقیقه" },
  { id: 2, title: "ایستگاه اتوبوس", distance: "۳ دقیقه" },
];

export default function PropertyLocation() {
  const [showMap, setShowMap] = useState(false);

  const lat = 35.796;
  const lng = 51.433;

  return (
    <section id="location" className="scroll-mt-32">
      <p className="heading-h6 mb-4">موقعیت مکانی</p>

      <div className="flex justify-between items-center mb-4">
        <Tabs.Root defaultValue="recreation" dir="rtl">
          <Tabs.List className="flex bg-neutral-tint-6 rounded-xl p-1">
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

            {!showMap && (
              <>
                <Tabs.Content value="recreation">
                  <ul>
                    
                  </ul>
                </Tabs.Content>
              </>
            )}
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
}
