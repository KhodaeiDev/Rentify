export default function Description() {
  return (
    <div className="mx-28 mb-8">
      <div>
        <p className="heading-h3 text-center mb-10">
          با خدمات <span className="text-primary">رنتی‌فای</span> آشنا شوید
        </p>
      </div>

      <div className="grid grid-cols-7 mb-16">
        <div className="">
          <div className="bg-neutral-tint-1 rounded-full w-28 h-28 flex justify-center items-center relative mb-4 mx-6">
            <img
              src="/src/assets/icons/search-2.svg"
              className="w-13 h-13 text-white"
            />
            <div className="absolute right-24 bg-primary-shade-2 w-9 h-9 rounded-full flex justify-center items-center border-white border-2">
              <p>۱</p>
            </div>
          </div>

          <div className="">
            <p className="text-body-s text-center mb-1">جستجو</p>
            <p className="text-caption-lg text-neutral-tint-5 text-center">
              ملک مورد علاقه‌ی خود را پیدا کنید
            </p>
          </div>
        </div>

        <div>
          <div className="border-2 border-neutral-tint-2 w-28 mt-14 mr-6 rounded-full"></div>
        </div>

        <div className="">
          <div className="bg-neutral-tint-1 rounded-full w-28 h-28 flex justify-center items-center relative mb-4 mx-6">
            <img
              src="/src/assets/icons/search-2.svg"
              className="w-13 h-13 text-white"
            />
            <div className="absolute right-24 bg-primary-shade-2 w-9 h-9 rounded-full flex justify-center items-center border-white border-2">
              <p>۲</p>
            </div>
          </div>

          <div className="">
            <p className="text-body-s text-center mb-1">برنامه بازدید</p>
            <p className="text-caption-lg text-neutral-tint-5 text-center">
              زمان خود را برای بازدید از ملکتان مشخص کنید
            </p>
          </div>
        </div>

        <div>
          <div className="border-2 border-neutral-tint-2 w-28 mt-14 mr-6 rounded-full"></div>
        </div>

        <div>
          <div className="bg-neutral-tint-1 rounded-full w-28 h-28 flex justify-center items-center relative mb-4 mx-6">
            <img
              src="/src/assets/icons/search-2.svg"
              className="w-13 h-13 text-white"
            />
            <div className="absolute right-24 bg-primary-shade-2 w-9 h-9 rounded-full flex justify-center items-center border-white border-2">
              <p>۳</p>
            </div>
          </div>

          <div className="">
            <p className="text-body-s text-center mb-1">بازدید از ملک</p>
            <p className="text-caption-lg text-neutral-tint-5 text-center">
              ملک خود را در زمان مشخص کرده بازدید کنید
            </p>
          </div>
        </div>

        <div>
          <div className="border-2 border-neutral-tint-2 w-28 mt-14 mr-6 rounded-full"></div>
        </div>

        <div className="">
          <div className="bg-neutral-tint-1 rounded-full w-28 h-28 flex justify-center items-center relative mb-4 mx-6">
            <img
              src="/src/assets/icons/search-2.svg"
              className="w-13 h-13 text-white"
            />
            <div className="absolute right-24 bg-primary-shade-2 w-9 h-9 rounded-full flex justify-center items-center border-white border-2">
              <p>۴</p>
            </div>
          </div>

          <div className="">
            <p className="text-body-s text-center mb-1">نهایی کردن معامله</p>
            <p className="text-caption-lg text-neutral-tint-5 text-center">
              به کمک مشاورین املاک ما معامله‌ی خود را نهایی کنید
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 bg-neutral-tint-1 rounded-2xl mb-18">
        <div className="flex flex-col justify-between items-center m-14">
          <div className="">
            <p className="text-white text-h3 text-center">
              برای دریافت وام رهن خانه کلیک کنید
            </p>
            <p className="text-center text-neutral-tint-3 text-body-1xs">
              دریافت وام با کم‌ترین بهره و سریع‌ترین زمان ممکن
            </p>
          </div>
          <button className="text-white bg-primary w-52 h-12 rounded-xl cursor-pointer">
            اطلاعات بیشتر...
          </button>
        </div>
        <img src="/src/assets/icons/end-body/men-poster.svg" />
      </div>
    </div>
  );
}
