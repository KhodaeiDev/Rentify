import { AiOutlineThunderbolt } from "react-icons/ai";
import { GrSwim } from "react-icons/gr";
import { IoIosFitness } from "react-icons/io";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { LuTrees } from "react-icons/lu";
import { MdGrass } from "react-icons/md";
import { PiSwimmingPool } from "react-icons/pi";
import { WiDirectionLeft } from "react-icons/wi";
import PropertyLocation from "./Location/PropertyLocation";
import PropertyTabs from "./PropertyTabs";

export default function PropertyMainInfo() {
  return (
    <div className="bg-white pt-10">
      <div className="flex justify-between items-center">
        <p className="text-body-md">آپارتمان ۷۰ متری ۲ خوابه _ تهران مجیدیه</p>
        <div className="flex justify-center items-center gap-4">
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
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>

          <div className="bg-neutral-tint-6 h-9 w-9 rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-red-600"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex text-neutral-tint-3 mt-1 mb-5">
        <div className="flex items-center justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="text-body-1xs">تهران-الهیه</p>
        </div>
        <div className="border h-auto mx-5" />
        <div className="flex justify-center items-center gap-1">
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
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-body-1xs">۱۱ روز پیش</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-start items-center gap-1">
          <p className="heading-h4">رهن ۴,۰۰۰,۰۰۰,۰۰۰</p>
          <img
            src="/src/assets/icons/toman.svg"
            alt="تومان"
            className="size-6"
          />
        </div>
        <div className="flex justify-start items-center gap-1">
          <p className="heading-h4">اجاره ۵۰,۰۰۰,۰۰۰</p>
          <img
            src="/src/assets/icons/toman.svg"
            alt="تومان"
            className="size-6"
          />
        </div>
      </div>

      <div className="flex justify-between items-center border-t py-3 mb-16 border-b border-neutral-tint-3">
        <p className="text-body-xs text-neutral-tint-2">شناسه آگهی: ۵۴۳۶</p>
        <div className="flex justify-center gap-1 text-body-xs text-neutral-tint-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>
          <p>گزارش</p>
        </div>
      </div>

      <div className="bg-white overflow-hidden">
        <PropertyTabs />
        <div>
          <section
            id="main-info"
            className="scroll-mt-28 py-8 border-b border-neutral-tint-3"
          >
            <div className="flex">
              <p className="heading-h5 border-b-3 border-primary pb-4 mb-10">
                اطلاعات تکمیلی
              </p>
            </div>
            <div className="flex justify-between px-2">
              <div className="space-y-8">
                <div className="flex items-center gap-x-2">
                  <p className="text-body-xs text-neutral-tint-2">
                    مساحت زیربنا:
                  </p>
                  <p className="text-body-s text-neutral-tint-1">۱۳۰ متر</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-body-xs text-neutral-tint-2">خواب:</p>
                  <p className="text-body-s text-neutral-tint-1">۲ خوابه</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-body-xs text-neutral-tint-2">هر طبقه:</p>
                  <p className="text-body-s text-neutral-tint-1">۱</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-x-2">
                  <p className="text-body-xs text-neutral-tint-2">
                    مساحت زمین:
                  </p>
                  <p className="text-body-s text-neutral-tint-1">۴۰۰ متر</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-body-xs text-neutral-tint-2">
                    سرویس بهداشتی:
                  </p>
                  <p className="text-body-s text-neutral-tint-1">۳ عدد</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-x-2">
                  <p className="text-body-xs text-neutral-tint-2">طبقات:</p>
                  <p className="text-body-s text-neutral-tint-1">۱۴</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-body-xs text-neutral-tint-2">طبقه</p>
                  <p className="text-body-s text-neutral-tint-1">۱۲</p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="facilities"
            className="scroll-mt-28 py-8 border-b border-neutral-tint-3"
          >
            <div className="flex">
              <p className="heading-h5 border-b-3 border-primary pb-4 mb-10">
                تجهیزات و امکانات
              </p>
            </div>
            <div className="flex justify-between px-2">
              <div className="space-y-8">
                <div className="flex items-center gap-x-2">
                  <IoIosFitness className="size-6" />
                  <p className="text-body-s text-neutral-tint-1">باشگاه</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <AiOutlineThunderbolt className="size-6" />
                  <p className="text-body-s text-neutral-tint-1">برق اضطراری</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <MdGrass className="size-6" />
                  <p className="text-body-s text-neutral-tint-1">روف گاردن</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-x-2">
                  <LuTrees className="size-6" />
                  <p className="text-body-s text-neutral-tint-1">فضای سبز</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <LiaBasketballBallSolid className="size-6" />
                  <p className="text-body-s text-neutral-tint-1">زمین بازی</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-x-2">
                  <GrSwim />
                  <p className="text-body-s text-neutral-tint-1">
                    استخر سرپوشیده
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <PiSwimmingPool />
                  <p className="text-body-s text-neutral-tint-1">
                    سونا و جکوزی
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="description"
            className="scroll-mt-28 py-8 border-b border-neutral-tint-3"
          >
            <div className="flex">
              <p className="heading-h5 border-b-3 border-primary pb-4 mb-10">
                توضیحات
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-4 mb-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-body-s text-neutral-tint-1">سند شخصی</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-body-s text-neutral-tint-1">واحد شمالی</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-body-s text-neutral-tint-1">
                    هود و گاز‌‌‌ رو میزی
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-body-s text-neutral-tint-1">
                    کابینت ممبران
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2 cursor-pointer text-primary">
                <p className="text-btn-s">نمایش بیشتر</p>
                <WiDirectionLeft className="size-5" />
              </div>
            </div>
          </section>

          <PropertyLocation />

          <section></section>
        </div>
      </div>
    </div>
  );
}
