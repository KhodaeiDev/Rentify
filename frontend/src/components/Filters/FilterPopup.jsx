import { useState } from "react";

export default function FilterPopup({ onClose }) {
  const [active, setActive] = useState(null);

  const [propertyTypes, setProppertTypes] = useState([]);
  const [city, setCity] = useState(null);
  const [deposit, setDeposit] = useState({ min: "", max: "" });
  const [rent, setRent] = useState({ min: "", max: "" });
  const [rooms, setRooms] = useState(0);
  const [features, setFeatures] = useState([]);
  const [mediaFilters, setMediaFilters] = useState({
    hasVideo: false,
    hasImage: false,
    isAgency: false,
  });

  const toggle = (key) => {
    setActive(active === key ? null : key);
  };

  const toggleArrayItems = (value, list, setList) => {
    setList(
      list.includes(value) ? list.filter((i) => i !== value) : [...list, value]
    );
  };

  const toggleMediaOption = (key) => {
    setMediaFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const mediaOptions = [
    { key: "hasVideo", label: "آگهی‌های ویدیودار" },
    { key: "hasImage", label: "فقط آگهی‌های عکس‌دار" },
    { key: "isAgency", label: "فقط آگهی‌های آژانس املاک" },
  ];

  return (
    <div>
      <div
        className="fixed inset-0 backdrop-blur-[1px] z-30 bg-black/40"
        onClick={onClose}
      />

      <div className="z-30 flex justify-center items-center w-2/3 mx-auto">
        <div
          className="bg-white z-30 rounded-lg flex flex-col py-4 w-full max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* header */}
          <div className="sticky flex justify-between items-center px-6 mb-4">
            <p className="heading-h5">فیلترها</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 cursor-pointer hover:bg-neutral-tint-4 rounded-full duration-300"
              onClick={onClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* horizontal line */}
          <div className="flex w-full border left-0 right-0 border-neutral-tint-4" />

          {/* content */}
          <div className="flex-1 overflow-y-auto py-4">
            {/* section-1 */}
            <div className="pr-6 pl-7">
              <button
                className="w-full flex justify-between items-center cursor-pointer pb-6"
                onClick={() => toggle("type")}
              >
                <p className="text-btn-s font-bold">نوع ملک</p>
                <span>
                  {active === "type" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {active === "type" && (
                <div className="pb-4 space-y-2">
                  {["آپارتمان", "ویلا", "خانه ویلایی"].map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-1.5 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={propertyTypes.includes(item)}
                        onChange={() =>
                          toggleArrayItems(
                            item,
                            propertyTypes,
                            setProppertTypes
                          )
                        }
                        className="accent-primary cursor-pointer"
                      />
                      <span className="text-body-2xs">{item}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* horizontal line */}
            <div className="flex w-full border left-0 right-0 border-neutral-tint-4 mb-5" />

            {/* section-2 */}
            <div className="pr-6 pl-7">
              <button
                className="w-full flex justify-between items-center cursor-pointer pb-6"
                onClick={() => toggle("city")}
              >
                <p className="text-btn-s font-bold">شهر</p>
                <span>
                  {active === "city" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {active === "city" && (
                <div className="pb-4 space-y-2">
                  <button className="w-full flex justify-between items-center py-3 border rounded-xl px-4 cursor-pointer">
                    <span className="text-neutral-tint-4 text-body-2xs">
                      انتخاب شهر
                    </span>
                    <span></span>
                  </button>
                </div>
              )}
            </div>

            {/* horizontal line */}
            <div className="flex w-full border left-0 right-0 border-neutral-tint-4 mb-5" />

            {/* section-3 */}
            <div className="pr-6 pl-7">
              <button
                className="w-full flex justify-between items-center cursor-pointer pb-6"
                onClick={() => toggle("deposit")}
              >
                <p className="text-btn-s font-bold">رهن</p>
                <span>
                  {active === "deposit" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {active === "deposit" && (
                <div className="flex flex-col pb-4">
                  <div className="flex mb-4 items-center">
                    <span className="pl-4 text-body-xs">از</span>
                    <div className="relative w-full">
                      <label className="absolute bg-white text-body-xs text-neutral-tint-3 -top-3 right-3 px-2">
                        حداقل قیمت
                      </label>
                      <div className="flex">
                        <input
                          type="number"
                          inputMode="numeric"
                          placeholder="0"
                          value={deposit.min}
                          onChange={(e) =>
                            setDeposit({ ...deposit, min: e.target.value })
                          }
                          className="no-spinner border rounded-r-xl border-l-white px-4 py-3 w-1/2 focus:outline-none border-neutral-tint-3"
                        />

                        <button
                          type="button"
                          onClick={() => setDeposit({ ...deposit, min: "" })}
                          className="flex items-center -mr-px text-neutral-tint-3 border-l border-y rounded-l-xl"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="pl-4 text-body-xs">تا</span>

                    <div className="relative w-full">
                      <label className="absolute bg-white text-body-xs text-neutral-tint-3 -top-3 right-3 px-2">
                        حداکثر قیمت
                      </label>
                      <div className="flex">
                        <input
                          type="number"
                          inputMode="numeric"
                          placeholder="۴,۰۰۰,۰۰۰,۰۰۰"
                          value={deposit.max}
                          onChange={(e) =>
                            setDeposit({ ...deposit, max: e.target.value })
                          }
                          className="border border-l-white rounded-r-xl px-4 py-3 w-1/2 no-spinner focus:outline-none border-neutral-tint-3"
                        />

                        <button
                          type="button"
                          onClick={() => setDeposit({ ...deposit, max: "" })}
                          className="flex items-center -mr-px text-neutral-tint-3 border-l border-y rounded-l-xl"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* horizontal line */}
            <div className="flex w-full border left-0 right-0 border-neutral-tint-4 mb-5" />

            {/* section-4 */}
            <div className="pr-6 pl-7">
              <button
                onClick={() => toggle("rent")}
                className="w-full flex justify-between items-center cursor-pointer pb-6"
              >
                <p className="text-btn-s font-bold">اجاره</p>
                <span>
                  {active === "rent" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {active === "rent" && (
                <div className="flex flex-col pb-4">
                  <div className="flex mb-4 items-center">
                    <span className="pl-4 text-body-xs">از</span>
                    <div className="relative w-full">
                      <label className="absolute bg-white text-body-xs text-neutral-tint-3 -top-3 right-3 px-2">
                        حداقل قیمت
                      </label>
                      <div className="flex">
                        <input
                          type="number"
                          inputMode="numeric"
                          placeholder="0"
                          value={deposit.min}
                          onChange={(e) =>
                            setDeposit({ ...deposit, min: e.target.value })
                          }
                          className="no-spinner border rounded-r-xl border-l-white px-4 py-3 w-1/2 focus:outline-none border-neutral-tint-3"
                        />

                        <button
                          type="button"
                          onClick={() => setDeposit({ ...deposit, min: "" })}
                          className="flex items-center -mr-px text-neutral-tint-3 border-l border-y rounded-l-xl"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="pl-4 text-body-xs">تا</span>

                    <div className="relative w-full">
                      <label className="absolute bg-white text-body-xs text-neutral-tint-3 -top-3 right-3 px-2">
                        حداکثر قیمت
                      </label>
                      <div className="flex">
                        <input
                          type="number"
                          inputMode="numeric"
                          placeholder="۴,۰۰۰,۰۰۰,۰۰۰"
                          value={deposit.max}
                          onChange={(e) =>
                            setDeposit({ ...deposit, max: e.target.value })
                          }
                          className="border border-l-white rounded-r-xl px-4 py-3 w-1/2 no-spinner focus:outline-none border-neutral-tint-3"
                        />

                        <button
                          type="button"
                          onClick={() => setDeposit({ ...deposit, max: "" })}
                          className="flex items-center -mr-px text-neutral-tint-3 border-l border-y rounded-l-xl"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="size-5 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* horizontal line */}
            <div className="flex w-full border left-0 right-0 border-neutral-tint-4 mb-5" />

            {/* section-5 */}
            <div className="pr-6 pl-7">
              <button
                onClick={() => toggle("area")}
                className="w-full flex justify-between items-center cursor-pointer pb-6"
              >
                <p className="text-btn-s font-bold">متراژ</p>
                <span>
                  {active === "area" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </div>

            {/* horizontal line */}
            <div className="flex w-full border left-0 right-0 border-neutral-tint-4 mb-5" />

            {/* section-6 */}
            <div className="pr-6 pl-7">
              <button
                onClick={() => toggle("rooms")}
                className="w-full flex justify-between items-center cursor-pointer pb-6"
              >
                <p className="text-btn-s font-bold">تعداد اتاق</p>
                <span>
                  {active === "rooms" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {active === "rooms" && (
                <div className="rounded-3xl py-3.5 border-neutral-tint-4 border w-1/2 flex justify-between items-center">
                  <button
                    onClick={() => setRooms(rooms + 1)}
                    className="bg-neutral-tint-6 rounded-full mr-2 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                  <span>{rooms} اتاق</span>
                  <button
                    onClick={() => setRooms(Math.max(0, rooms - 1))}
                    className="bg-neutral-tint-6 rounded-full ml-2 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* horizontal line */}
            <div className="flex w-full border left-0 right-0 border-neutral-tint-4 mb-5" />

            {/* section-7 */}
            <div className="pr-6 pl-7">
              <button
                onClick={() => toggle("features")}
                className="w-full flex justify-between items-center cursor-pointer pb-6"
              >
                <p className="text-btn-s font-bold">امکانات</p>
                <span>
                  {active === "features" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </div>

            {/* horizontal line */}
            <div className="flex w-full border left-0 right-0 border-neutral-tint-4 mb-5" />

            {/* section-8 */}
            <div className="pr-6 pl-7">
              <button
                onClick={() => toggle("media")}
                className="w-full flex justify-between items-center cursor-pointer pb-6"
              >
                <p className="text-btn-s font-bold">امکانات تصویری آگهی</p>
                <span>
                  {active === "media" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {active === "media" && (
                <div className="pb-4 space-y-4">
                  {mediaOptions.map(({ key, label }) => (
                    <div
                      key={key}
                      className="flex justify-between items-center"
                    >
                      <span className="text-body-xs">{label}</span>
                      <button
                        type="button"
                        onClick={() => toggleMediaOption(key)}
                        className={`w-12 h-6 rounded-full transition ${
                          mediaFilters[key] ? "bg-primary" : "bg-neutral-tint-4"
                        }`}
                      >
                        <span
                          className={`block w-5 h-5 bg-white rounded-full cursor-pointer duration-300 transition transform ${
                            mediaFilters[key]
                              ? "-translate-x-6"
                              : "-translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 flex gap-4 bg-white px-6 py-4">
            <button className="flex-1 text-primary py-3.5 cursor-pointer">حذف همه</button>
            <button className="flex-1 text-white bg-primary rounded-xl py-3.5 cursor-pointer">
              مشاهده نتایج
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}