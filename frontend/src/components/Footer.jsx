import React from "react";
import { assets } from "../assetsa/assets";

const Footer = () => {
  return (
    <footer dir="rtl" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700 text-sm">
        
        {/* logo and description*/}
        <div className="text-center md:text-right order-first md:order-first">
          <div className="flex flex-col items-center md:items-end space-y-3">
            <img
              src={assets.logo}
              alt="Rentify logo"
              className="h-10 object-contain md:self-start"
            />
            <p className="text-xs text-gray-500 leading-6 text-center md:text-right">
              در بین بیش از ۵۰۰۰ آگهی ملکی ثبت‌شده، روزانه جستجو کنید و ملک مورد نظرتان را پیدا کنید.
            </p>
            <div className="flex gap-3 text-gray-500">
              <a href="#"><i className="fab fa-instagram text-xl hover:text-primary-tint-1"></i></a>
              <a href="#"><i className="fab fa-linkedin text-xl hover:text-primary-tint-1"></i></a>
              <a href="#"><i className="fab fa-telegram text-xl hover:text-primary-tint-1"></i></a>
            </div>
            <div className="flex gap-2 mt-3">
              <img src="/enamad.png" alt="نماد اعتماد" className="h-10" />
              <img src="/samandehi.png" alt="نماد ساماندهی" className="h-10" />
            </div>
          </div>
        </div>

        {/* محصول*/}
        <div>
          <h3 className="font-semibold text-primary-tint-1 mb-3">محصول</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-primary-tint-1">ویژگی‌ها</li>
            <li className="cursor-pointer hover:text-primary-tint-1">قیمت‌گذاری</li>
            <li className="cursor-pointer hover:text-primary-tint-1">مطالعات موردی</li>
            <li className="cursor-pointer hover:text-primary-tint-1">بررسی کردن</li>
            <li className="cursor-pointer hover:text-primary-tint-1">قیمت‌گذاری</li>
          </ul>
        </div>

        {/* شرکت */}
        <div>
          <h3 className="font-semibold text-primary-tint-1 mb-3">شرکت</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-primary-tint-1">ارتباط با ما</li>
            <li className="cursor-pointer hover:text-primary-tint-1">وبلاگ</li>
            <li className="cursor-pointer hover:text-primary-tint-1">فرهنگ</li>
            <li className="cursor-pointer hover:text-primary-tint-1">درباره</li>
          </ul>
        </div>

        {/* ستون ۴ - پشتیبانی */}
        <div>
          <h3 className="font-semibold text-primary-tint-1 mb-3">پشتیبانی</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-primary-tint-1">شروع کردن</li>
            <li className="cursor-pointer hover:text-primary-tint-1">مرکز کمک</li>
            <li className="cursor-pointer hover:text-primary-tint-1">تنظیمات سرور</li>
            <li className="cursor-pointer hover:text-primary-tint-1">گزارش اشکال</li>
            <li className="cursor-pointer hover:text-primary-tint-1">پشتیبانی چت</li>
          </ul>
        </div>

        {/* ارتباط با ما*/}
        <div>
          <h3 className="font-semibold text-primary-tint-1 mb-3">ارتباط با ما</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 cursor-pointer hover:text-primary-tint-1">
              gmail: rentify@gmail.com
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-primary-tint-1">
              تلفن: ۰۲۱-۴۵۳۵۳۶۳
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-primary-tint-1">
              آدرس: تهران، نیاوران، پلاک ۱۳
            </li>
          </ul>
        </div>

      </div>

      {/* copy alart */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © ۲۰۲۵ رنتیفای - تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
