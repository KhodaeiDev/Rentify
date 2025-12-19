import { useEffect, useState } from "react";
import FilterPopup from "./FilterPopup";

export default function PropertyFilter() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div className="relative h-18 w-full px-28 bg-white top-12 mb-10">
      <div className="flex justify-start items-center py-4">
        <div
          onClick={() => setOpen(true)}
          className="flex justify-center items-center ml-6 border border-neutral-tint-3 rounded-3xl py-2 px-3 gap-x-1 text-primary cursor-pointer"
        >
          <img src="/src/assets/icons/FileFilter.svg" />
          <p>فیلترها</p>
        </div>

        <div className="h-10 w-px rounded-full bg-neutral-tint-3"></div>

        <div className="flex justify-center items-center mr-4 py-2 px-3 rounded-3xl bg-primary-tint-6 text-primary gap-x-1 cursor-pointer">
          <p>آپارتمان</p>
          <img
            src="/src/assets/icons/down-arrow-blue.svg"
            className="px-1.5 py-2.5"
          />
        </div>
      </div>

      {open && <FilterPopup onClose={() => setOpen(false)} />}
    </div>
  );
}
