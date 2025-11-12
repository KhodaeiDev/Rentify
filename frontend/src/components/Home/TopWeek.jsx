export default function TopWeek() {
  return (
    <div className="mx-28 mb-16">
      <div className="flex justify-between items-center">
        <p className="text-black text-h3">پر بازدید ترین‌های هفته‌ی گذشته</p>
        <div className="flex gap-x-0.5 ml-4">
          <p className="text-btn-s text-primary">مشاهده همه</p>
          <img src="/src/assets/icons/left-arrow-2.svg" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-6 gap-y-4">
        <div className="flex flex-col bg-white overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src="/src/assets/icons/top-week/villa-house-1.png"
              alt="villa"
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
              <img
                src="/src/assets/icons/heart-1.svg"
                alt="like"
                className="w-3 h-3"
              />
            </div>
          </div>

          <div className="m-4">
            <div className="flex mb-3">
              <div className="w-20 h-7 bg-amber-600 rounded-2xl flex justify-center items-center">
                <p className="text-body-xxs px-2 py-1 text-white">
                  خانه ویلایی
                </p>
              </div>
              <div className="flex justify-center items-center mr-2">
                <img
                  src="/src/assets/icons/location-point.svg"
                  className="w-3 h-3 pl-1"
                />
                <p className="text-caption-md text-neutral-tint-3">
                  تهران-الهیه
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-body-xxs text-neutral-tint-1 mb-3">
                ۴۵۰ متری ۳ خوابه استخردار
              </p>
            </div>

            <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg">
              <div className="flex my-1 mr-1">
                <p className="py-1 pl-1">رهن</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۴/۰۰۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>

              <div className="flex my-1 ml-1">
                <p className="py-1 pl-1">اجاره</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۵۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src="/src/assets/icons/top-week/villa-house-1.png"
              alt="villa"
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
              <img
                src="/src/assets/icons/heart-2.svg"
                alt="like"
                className="w-3 h-3"
              />
            </div>
          </div>

          <div className="m-4">
            <div className="flex mb-3">
              <div className="w-20 h-7 bg-success rounded-2xl flex justify-center items-center">
                <p className="text-body-xxs px-2 py-1 text-white">آپارتمان</p>
              </div>
              <div className="flex justify-center items-center mr-2">
                <img
                  src="/src/assets/icons/location-point.svg"
                  className="w-3 h-3 pl-1"
                />
                <p className="text-caption-md text-neutral-tint-3">
                  تهران-الهیه
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-body-xxs text-neutral-tint-1 mb-3">
                ۴۵۰ متری ۳ خوابه استخردار
              </p>
            </div>

            <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg">
              <div className="flex my-1 mr-1">
                <p className="py-1 pl-1">رهن</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۴/۰۰۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>

              <div className="flex my-1 ml-1">
                <p className="py-1 pl-1">اجاره</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۵۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src="/src/assets/icons/top-week/villa-house-1.png"
              alt="villa"
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
              <img
                src="/src/assets/icons/heart-1.svg"
                alt="like"
                className="w-3 h-3"
              />
            </div>
          </div>

          <div className="m-4">
            <div className="flex mb-3">
              <div className="w-20 h-7 bg-primary-shade-2 rounded-2xl flex justify-center items-center">
                <p className="text-body-xxs px-2 py-1 text-white">ویلا</p>
              </div>
              <div className="flex justify-center items-center mr-2">
                <img
                  src="/src/assets/icons/location-point.svg"
                  className="w-3 h-3 pl-1"
                />
                <p className="text-caption-md text-neutral-tint-3">
                  تهران-الهیه
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-body-xxs text-neutral-tint-1 mb-3">
                ۴۵۰ متری ۳ خوابه استخردار
              </p>
            </div>

            <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg">
              <div className="flex my-1 mr-1">
                <p className="py-1 pl-1">رهن</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۴/۰۰۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>

              <div className="flex my-1 ml-1">
                <p className="py-1 pl-1">اجاره</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۵۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src="/src/assets/icons/top-week/villa-house-1.png"
              alt="villa"
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
              <img
                src="/src/assets/icons/heart-1.svg"
                alt="like"
                className="w-3 h-3"
              />
            </div>
          </div>

          <div className="m-4">
            <div className="flex mb-3">
              <div className="w-20 h-7 bg-amber-600 rounded-2xl flex justify-center items-center">
                <p className="text-body-xxs px-2 py-1 text-white">
                  خانه ویلایی
                </p>
              </div>
              <div className="flex justify-center items-center mr-2">
                <img
                  src="/src/assets/icons/location-point.svg"
                  className="w-3 h-3 pl-1"
                />
                <p className="text-caption-md text-neutral-tint-3">
                  تهران-الهیه
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-body-xxs text-neutral-tint-1 mb-3">
                ۴۵۰ متری ۳ خوابه استخردار
              </p>
            </div>

            <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg">
              <div className="flex my-1 mr-1">
                <p className="py-1 pl-1">رهن</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۴/۰۰۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>

              <div className="flex my-1 ml-1">
                <p className="py-1 pl-1">اجاره</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۵۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src="/src/assets/icons/top-week/villa-house-1.png"
              alt="villa"
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
              <img
                src="/src/assets/icons/heart-1.svg"
                alt="like"
                className="w-3 h-3"
              />
            </div>
          </div>

          <div className="m-4">
            <div className="flex mb-3">
              <div className="w-20 h-7 bg-amber-600 rounded-2xl flex justify-center items-center">
                <p className="text-body-xxs px-2 py-1 text-white">
                  خانه ویلایی
                </p>
              </div>
              <div className="flex justify-center items-center mr-2">
                <img
                  src="/src/assets/icons/location-point.svg"
                  className="w-3 h-3 pl-1"
                />
                <p className="text-caption-md text-neutral-tint-3">
                  تهران-الهیه
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-body-xxs text-neutral-tint-1 mb-3">
                ۴۵۰ متری ۳ خوابه استخردار
              </p>
            </div>

            <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg">
              <div className="flex my-1 mr-1">
                <p className="py-1 pl-1">رهن</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۴/۰۰۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>

              <div className="flex my-1 ml-1">
                <p className="py-1 pl-1">اجاره</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۵۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src="/src/assets/icons/top-week/villa-house-1.png"
              alt="villa"
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
              <img
                src="/src/assets/icons/heart-1.svg"
                alt="like"
                className="w-3 h-3"
              />
            </div>
          </div>

          <div className="m-4">
            <div className="flex mb-3">
              <div className="w-20 h-7 bg-amber-600 rounded-2xl flex justify-center items-center">
                <p className="text-body-xxs px-2 py-1 text-white">
                  خانه ویلایی
                </p>
              </div>
              <div className="flex justify-center items-center mr-2">
                <img
                  src="/src/assets/icons/location-point.svg"
                  className="w-3 h-3 pl-1"
                />
                <p className="text-caption-md text-neutral-tint-3">
                  تهران-الهیه
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-body-xxs text-neutral-tint-1 mb-3">
                ۴۵۰ متری ۳ خوابه استخردار
              </p>
            </div>

            <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg">
              <div className="flex my-1 mr-1">
                <p className="py-1 pl-1">رهن</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۴/۰۰۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>

              <div className="flex my-1 ml-1">
                <p className="py-1 pl-1">اجاره</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۵۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src="/src/assets/icons/top-week/villa-house-1.png"
              alt="villa"
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
              <img
                src="/src/assets/icons/heart-1.svg"
                alt="like"
                className="w-3 h-3"
              />
            </div>
          </div>

          <div className="m-4">
            <div className="flex mb-3">
              <div className="w-20 h-7 bg-amber-600 rounded-2xl flex justify-center items-center">
                <p className="text-body-xxs px-2 py-1 text-white">
                  خانه ویلایی
                </p>
              </div>
              <div className="flex justify-center items-center mr-2">
                <img
                  src="/src/assets/icons/location-point.svg"
                  className="w-3 h-3 pl-1"
                />
                <p className="text-caption-md text-neutral-tint-3">
                  تهران-الهیه
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-body-xxs text-neutral-tint-1 mb-3">
                ۴۵۰ متری ۳ خوابه استخردار
              </p>
            </div>

            <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg">
              <div className="flex my-1 mr-1">
                <p className="py-1 pl-1">رهن</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۴/۰۰۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>

              <div className="flex my-1 ml-1">
                <p className="py-1 pl-1">اجاره</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۵۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src="/src/assets/icons/top-week/villa-house-1.png"
              alt="villa"
              className="w-full h-52 object-cover"
            />

            <div className="absolute top-3 right-3 w-6 h-6 bg-neutral-tint-3 rounded-full flex justify-center items-center">
              <img
                src="/src/assets/icons/heart-1.svg"
                alt="like"
                className="w-3 h-3"
              />
            </div>
          </div>

          <div className="m-4">
            <div className="flex mb-3">
              <div className="w-20 h-7 bg-amber-600 rounded-2xl flex justify-center items-center">
                <p className="text-body-xxs px-2 py-1 text-white">
                  خانه ویلایی
                </p>
              </div>
              <div className="flex justify-center items-center mr-2">
                <img
                  src="/src/assets/icons/location-point.svg"
                  className="w-3 h-3 pl-1"
                />
                <p className="text-caption-md text-neutral-tint-3">
                  تهران-الهیه
                </p>
              </div>
            </div>

            <div className="mb-3">
              <p className="text-body-xxs text-neutral-tint-1 mb-3">
                ۴۵۰ متری ۳ خوابه استخردار
              </p>
            </div>

            <div className="flex justify-between items-center text-body-3xs bg-neutral-tint-6 rounded-lg">
              <div className="flex my-1 mr-1">
                <p className="py-1 pl-1">رهن</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۴/۰۰۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>

              <div className="flex my-1 ml-1">
                <p className="py-1 pl-1">اجاره</p>
                <div className="flex justify-center items-center bg-white rounded-md p-1 gap-0.5">
                  <p>۵۰/۰۰۰/۰۰۰</p>
                  <img src="/src/assets/icons/toman.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
