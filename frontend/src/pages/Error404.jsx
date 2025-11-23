import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets } from "../assetsa/assets";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <Navbar textColor="text-black" />

      <div className="max-w-3xl mx-auto mt-30 bg-white shadow-md rounded-xl p-10 text-center mb-20">

      
        <img
          src={assets.error404}
          alt="404 Illustration"
          className="w-full max-w-md mx-auto mb-6"
        />

        
        <h1 className="text-2xl font-bold text-neutral mb-3">
          صفحه‌ی مورد نظر یافت نشد!
        </h1>

     
        <p className="text-neutral-tint-3 mb-8">
          این صفحه در رنتی‌فای یافت نشد. لطفاً به صفحه‌ اصلی مراجعه کنید تا ملک مورد نظر خود را پیدا کنید.
        </p>

        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-6 rounded-lg"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Error404;
