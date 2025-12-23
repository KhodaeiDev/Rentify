import * as Tabs from "@radix-ui/react-tabs";

const sortOptions = [
  { value: "latest", label: "بروز‌ترین" },
  { value: "cheapest", label: "ارزان‌ترین" },
  { value: "expensive", label: "گران‌ترین" },
];

export default function PropertySortHandel({ value, onValueChange }) {
  return (
    <Tabs.Root
      value={value || "latest"}
      onValueChange={onValueChange}
      dir="rtl"
      className="mb-8"
    >
      <Tabs.List className="relative flex gap-x-6 text-btn-xlg">
        {sortOptions.map((option) => {
          return (
            <Tabs.Trigger
              key={option.value}
              value={option.value}
              className={`relative pb-2.5 cursor-pointer transition-colors duration-200 ${
                value === option.value
                  ? "text-primary"
                  : "text-neutral-tint-2 hover:text-primary"
              }`}
            >
              {option.label}

              {value === option.value && (
                <span className="absolute bottom-0 left-0 right-0 h-0.75 transition-all flex w-full z-10 bg-primary rounded-t-lg text-btn-xlg" />
              )}
            </Tabs.Trigger>
          );
        })}

        <div className="absolute w-full max-w-3xs z-0 bottom-0">
          <div className="border border-neutral-tint-3" />
        </div>
      </Tabs.List>
    </Tabs.Root>
  );
}
