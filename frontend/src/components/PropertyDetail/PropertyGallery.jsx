import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const IMAGES = [
  "/src/assets/icons/Frame-2.svg",
  "/src/assets/icons/Frame-1.svg",
  "/src/assets/icons/Frame-2.svg",
  "/src/assets/icons/Frame-1.svg",
  "/src/assets/icons/Frame-2.svg",
];

export default function PropertyGallery({ images }) {
  const finalImages =
    Array.isArray(images) && images.length ? images : IMAGES;

  return (
    <div>
      <section className="w-full bg-white">
        <div className="relative mx-auto py-6">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={12}
            navigation={{
              nextEl: ".gallery-next",
              prevEl: ".gallery-prev",
            }}
            loop={finalImages.length > 3}
            dir="rtl"
            className="w-full rounded-l-xl rounded-r-xl"
          >
            {finalImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="h-56 md:h-80 overflow-hidden">
                  <img
                    src={src}
                    alt={`property-${index}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="gallery-next absolute top-1/2 -translate-y-1/2 right-5 bg-black/70 rounded-full w-10 h-10 flex items-center justify-center shadow cursor-pointer z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>

          <button
            type="button"
            className="gallery-prev absolute top-1/2 -translate-y-1/2 left-5 bg-black/70 rounded-full w-10 h-10 flex items-center justify-center shadow cursor-pointer z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
