export default function SearchFilter() {
  return (
    <div>
      <div className="w-full bg-[url(/public/images/bg-home.svg)] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center mb-36 rounded-b-2xl pt-28 md:pt-28 sm:bg-cover">
        <div className="mb-8">
          <p className="heading-h4 sm:text-h2 sm:leading-heading sm:font-bold md:text-h1 text-white cursor-default">
            در <span className="text-primary">رنتی‌فای</span> دنبال چه ملکی
            هستید؟
          </p>
        </div>

        <div className="hidden md:grid grid-cols-5 h-26 bg-white rounded-[64px] overflow-hidden">
          <div className="flex sm:flex-row gap-x-24 col-span-4 justify-center items-center lg:px-18 px-12">
            <div>
              <div className="flex justify-between items-center text-neutral-tint-3 gap-y-2.5 cursor-pointer text-body-1xs">
                <p>موقعیت مکانی</p>
                <img src="/src/assets/icons/down-arrow.svg" />
              </div>
              <p className="cursor-default text-btn-lg">تهران-نیاوران</p>
            </div>
            <div>
              <div className="flex justify-between items-center text-neutral-tint-3 gap-y-2.5 cursor-pointer text-body-1xs">
                <p>نوع ملک</p>
                <img src="/src/assets/icons/down-arrow.svg" />
              </div>
              <p className="cursor-default text-btn-lg">ویلا</p>
            </div>
            <div>
              <div className="flex justify-between items-center text-neutral-tint-3 gap-y-2.5 cursor-pointer text-body-1xs">
                <p>نوع قرارداد</p>
                <img src="/src/assets/icons/down-arrow.svg" />
              </div>
              <p className="cursor-default text-btn-lg">رهن</p>
            </div>
          </div>

          <div className="bg-primary flex justify-center items-center gap-x-1 cursor-pointer text-btn-s  text-white">
            <img
              src="/src/assets/icons/search.svg"
              alt="Search"
              className="w-6 h-6"
            />
            <p>جستجو</p>
          </div>
        </div>

        <div className="block md:hidden w-[92%] bg-primary-tint-6 rounded-2xl overflow-hidden space-y-3 px-4">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-primary text-white rounded-xl py-2 w-full flex justify-center items-center my-3">
              <p> موقعیت مکانی</p>
              <img
                src="/src/assets/icons/down-arrow-white.svg"
                className="text-white"
              />
            </div>
            <div className="w-full grid grid-cols-2 gap-x-4">
              <div className="flex justify-center items-center bg-primary text-white rounded-xl py-2">
                <p>نوع ویلا</p>
                <img src="/src/assets/icons/down-arrow-white.svg" />
              </div>
              <div className="flex bg-primary justify-center items-center rounded-xl py-2 text-white">
                <p>نوع قرارداد</p>
                <img src="/src/assets/icons/down-arrow-white.svg" />
              </div>
            </div>
          </div>
          <button className="flex bg-primary text-white justify-center items-center rounded-xl py-2 w-full mb-3">
            <p>جستجو</p>
            <img
              src="/src/assets/icons/search.svg"
              alt="Search"
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className="hidden lg:flex justify-center items-center w-full md:px-28 px-14 gap-x-6 relative top-10 mx-28">
          <div className="relative overflow-hidden w-full h-96 flex flex-col justify-end rounded-2xl">
            <div className="absolute inset-0">
              <img
                src="src/assets/icons/villa.svg"
                alt="Villa"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex justify-between bg-white m-2 px-4 py-3.5 rounded-lg">
              <div className="cursor-default">
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
              <div className="cursor-default">
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
              <div className="cursor-default">
                <p className="text-black text-h6">خانه ویلایی</p>
                <p className="text-neutral-500 text-body-1xs">+92ملک</p>
              </div>
              <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center cursor-pointer">
                <img src="src/assets/icons/left-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row space-x-4 overflow-x-auto w-full snap-x mt-4 top-10 relative  lg:hidden scroll-area">
          <div className="relative overflow-hidden w-full h-96 flex flex-col justify-end rounded-2xl snap-center min-w-[350px] mr-8">
            <div className="absolute inset-0">
              <img
                src="src/assets/icons/villa.svg"
                alt="Villa"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex justify-between bg-white m-2 px-4 py-3.5 rounded-lg">
              <div className="cursor-default">
                <p className="text-black text-h6">ویلا</p>
                <p className="text-neutral-500 text-body-1xs">+92ملک</p>
              </div>
              <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center cursor-pointer">
                <img src="src/assets/icons/left-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden w-full h-96 flex flex-col justify-end rounded-2xl snap-center min-w-[350px]">
            <div className="absolute inset-0">
              <img
                src="src/assets/icons/dep.svg"
                alt="department"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex justify-between bg-white m-2 px-4 py-3.5 rounded-lg">
              <div className="cursor-default">
                <p className="text-black text-h6">آپارتمان</p>
                <p className="text-neutral-500 text-body-1xs">+92ملک</p>
              </div>
              <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center cursor-pointer">
                <img src="src/assets/icons/left-arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden w-full h-96 flex flex-col justify-end rounded-2xl snap-center min-w-[350px] ml-8">
            <div className="absolute inset-0">
              <img
                src="src/assets/icons/home.svg"
                alt="Villa house"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative flex justify-between bg-white m-2 px-4 py-3.5 rounded-lg">
              <div className="cursor-default">
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
