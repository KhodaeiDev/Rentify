import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useRef, useState } from "react";

const PROPERTY_TABS = [
  { value: "main-info", label: "اطلاعات تکمیلی", target: "main-info" },
  { value: "facilities", label: "تجهیزات و امکانات", target: "facilities" },
  { value: "description", label: "توضیحات", target: "description" },
  { value: "location", label: "موقعیت مکانی", target: "location" },
];

export default function PropertyTabs() {
  const [value, setValue] = useState("main-info");

  const isClickScrollingRef = useRef(false);
  const clickTimerRef = useRef(null);

  const handleChange = (val) => {
    setValue(val);

    isClickScrollingRef.current = true;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);

    const tab = PROPERTY_TABS.find((t) => t.value === val);
    if (!tab) return;

    const el = document.getElementById(tab.target);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const sections = PROPERTY_TABS.map((t) => document.getElementById(t.target)).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrollingRef.current) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0].target.id;

        const match = PROPERTY_TABS.find((t) => t.target === id);
        if (!match) return;

        setValue((prev) => (prev === match.value ? prev : match.value));
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.4, 0.6],
        rootMargin: "-120px 0px -55% 0px",
      }
    );

    sections.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  return (
    <Tabs.Root value={value} onValueChange={handleChange} dir="rtl">
      <Tabs.List className="sticky top-20 z-30 bg-white flex gap-x-9 text-btn-xlg">
        {PROPERTY_TABS.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={`relative pb-2.5 cursor-pointer transition-colors duration-200 ${
              value === tab.value
                ? "text-primary"
                : "text-neutral-tint-2 hover:text-primary"
            }`}
          >
            {tab.label}

            {value === tab.value && (
              <span className="absolute bottom-0 left-0 right-0 h-0.75 transition-all flex w-full z-10 rounded-t-lg text-btn-xlg bg-primary" />
            )}
          </Tabs.Trigger>
        ))}

        <div className="absolute w-full z-0 bottom-0">
          <div className="border border-neutral-tint-3" />
        </div>
      </Tabs.List>
    </Tabs.Root>
  );
}
