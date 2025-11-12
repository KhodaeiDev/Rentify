export default function SearchFilter() {
  return (
    <div>
      <div className="bg-[url(/public/images/bg-home.svg)] flex flex-col justify-center items-center bg-no-repeat bg-cover mb-36 rounded-b-2xl">
        <div className="mb-8">
          <p className="heading-h3 text-white">
            در <span className="text-primary">رنتی‌فای</span> دنبال چه ملکی
            هستید؟
          </p>
        </div>

        <div className="grid grid-cols-5 h-26 max-w-201.5 bg-white rounded-[64px] overflow-hidden">
          <div className="flex gap-x-24 col-span-4 justify-center items-center px-18">
            <div>
              <div className="flex justify-between items-center text-neutral-tint-3 gap-y-2.5 cursor-pointer">
                <p>موقعیت مکانی</p>
                <img src="/src/assets/icons/down-arrow.svg" />
              </div>
              <p>تهران-نیاوران</p>
            </div>
            <div>
              <div className="flex justify-between items-center text-neutral-tint-3 gap-y-2.5 cursor-pointer">
                <p>نوع ملک</p>
                <img src="/src/assets/icons/down-arrow.svg" />
              </div>
              <p>ویلا</p>
            </div>
            <div>
              <div className="flex justify-between items-center text-neutral-tint-3 gap-y-2.5 cursor-pointer">
                <p>نوع قرارداد</p>
                <img src="/src/assets/icons/down-arrow.svg" />
              </div>
              <p>رهن</p>
            </div>
          </div>

          <div className="bg-primary flex justify-center items-center gap-x-1 cursor-pointer">
            <img
              src="/src/assets/icons/search.svg"
              alt="Search"
              className="w-6 h-6"
            />
            <p>جستجو</p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full px-28 gap-x-6 relative top-10 mx-28">
          <div className="relative overflow-hidden w-full h-96 flex flex-col justify-end rounded-2xl">
            <div className="absolute inset-0">
              <img
                src="src/assets/icons/villa.svg"
                alt="Villa"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex justify-between bg-white m-2 px-4 py-3.5 rounded-lg">
              <div className="">
                <p className="text-black text-h6">ویلا</p>
                <p className="text-neutral-500 text-body-1xs">+92ملک</p>
              </div>
              <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center cursor-pointer">
                <img src="src/assets/icons/left-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden w-full h-96 flex flex-col justify-end rounded-2xl">
            <div className="absolute inset-0">
              <img
                src="src/assets/icons/dep.svg"
                alt="department"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex justify-between bg-white m-2 px-4 py-3.5 rounded-lg">
              <div className="">
                <p className="text-black text-h6">آپارتمان</p>
                <p className="text-neutral-500 text-body-1xs">+92ملک</p>
              </div>
              <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center cursor-pointer">
                <img src="src/assets/icons/left-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden w-full h-96 flex flex-col justify-end rounded-2xl">
            <div className="absolute inset-0">
              <img
                src="src/assets/icons/home.svg"
                alt="Villa house"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex justify-between bg-white m-2 px-4 py-3.5 rounded-lg">
              <div className="">
                <p className="text-black text-h6">خانه ویلایی</p>
                <p className="text-neutral-500 text-body-1xs">+92ملک</p>
              </div>
              <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center cursor-pointer">
                <img src="src/assets/icons/left-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
