export default function Services() {
  return (
    <div className="mx-28 mb-8">
      <div>
        <p className="heading-h3 text-center mb-10">
          با خدمات <span className="text-primary">رنتی‌فای</span> آشنا شوید
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white flex flex-col justify-end rounded-2xl transition duration-300 transform hover:scale-105">
          <div className="m-4 space-y-6">
            <img src="/src/assets/icons/services/image-1.svg" />

            <div className="flex flex-col justify-center items-center gap-y-3 mb-13 text-center">
              <p className="text-h5 font-bold">مشاور املاک هستید؟</p>
              <p className="text-body-1xs text-neutral-tint-2">
                رنتی‌فای باعث توسعه کسب و کار بیش از ۱۵۰۰ مشاور املاک متخصص شده.
                شانس‌تون رو در پیوستن به این مجموعه و توسعه کسب و کارتون امتحان
                کنید.
              </p>
            </div>
          </div>

          <button className="bg-primary text-white text-btn-md mx-4 mb-4 rounded-lg py-3 cursor-pointer">
            مشاهده خدمات
          </button>
        </div>

        <div className="bg-white flex flex-col justify-end rounded-2xl transition duration-300 transform hover:scale-105">
          <div className="m-4 space-y-6">
            <img src="/src/assets/icons/services/image-1.svg" />

            <div className="flex flex-col justify-center items-center gap-y-3 mb-13 text-center">
              <p className="text-h5 font-bold">مالک هستید؟</p>
              <p className="text-body-1xs text-neutral-tint-2">
                با چند کلیک ساده، ملک‌تون رو به صورت رایگان در رنتی‌فای آکهی و
                در سریع‌ترین زمان ممکن در یک فضای امن معامله کنید.
              </p>
            </div>
          </div>

          <button className="bg-primary text-white text-btn-md mx-4 mb-4 rounded-lg py-3 cursor-pointer">
            مشاهده خدمات
          </button>
        </div>

        <div className="bg-white flex flex-col justify-end rounded-2xl transition duration-300 transform hover:scale-105">
          <div className="m-4 space-y-6">
            <img src="/src/assets/icons/services/image-1.svg" />

            <div className="flex flex-col justify-center items-center gap-y-3 mb-13 text-center">
              <p className="text-h5 font-bold">
                خانه مورد علاقه‌تان را اجاره کنید!
              </p>
              <p className="text-body-1xs text-neutral-tint-2">
                با چند کلیک ساده، ملک‌تون رو به صورت رایگان در رنتی‌فای آکهی و
                در سریع‌ترین زمان ممکن در یک فضای امن معامله کنید.
              </p>
            </div>
          </div>

          <button className="bg-primary text-white text-btn-md mx-4 mb-4 rounded-lg py-3 cursor-pointer">
            مشاهده خدمات
          </button>
        </div>
      </div>
    </div>
  );
}
