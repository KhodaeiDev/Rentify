import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assetsa/assets";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Navbar textColor="text-black" />

      <div className="max-w-6xl mx-auto mt-40 mb-20" >

        {/* --- Title --- */}
        <div className="text-center mb-10 ">
          <h1 className="text-3xl font-bold mb-2 pt-10">تماس با ما</h1>
          <p className="text-neutral-tint-2">ما از اینکه شما را در جمع خود داریم بسیار خوشحالیم :)</p>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          
         
          <div>
            <img
              src={assets.aboutus}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            
            {/* Name Inputs */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="نام"
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="نام خانوادگی"
                className="border p-2 rounded-md"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="email"
                placeholder="ایمیل"
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="شماره تماس"
                className="border p-2 rounded-md"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="پیام خود را اینجا بنویسید..."
              className="border p-2 rounded-md h-32 w-full mt-4"
            />

            {/* Button */}
            <button className="mt-4 w-full bg-primary-tint-1 text-white p-3 rounded-md ">
              ارسال پیام
            </button>

          </div>

        </div>

        {/* --- Bottom Boxes --- */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Location */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={assets.location} alt="" className="mx-auto mb-4 w-14" />
            <h3 className="font-bold text-lg mb-2">آدرس</h3>
            <p className="text-sm text-neutral-tint-2">
              جهان – خیابان بیداری،  
              مجتمع نگین، پلاک 12
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={assets.time} alt="" className="mx-auto mb-4 w-14" />
            <h3 className="font-bold text-lg mb-2">ساعت کاری</h3>
            <p className="text-sm text-neutral-tint-2">
              از صبح تا شب، آماده خدمت رسانی به شما هستیم
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={assets.email} alt="" className="mx-auto mb-4 w-14" />
            <h3 className="font-bold text-lg mb-2">ایمیل</h3>
            <p className="text-sm text-neutral-tint-2">remtiy@gmail.com</p>
          </div>

        </div>

      </div>

      <Footer/>
    </div>
  );
};

export default ContactUs;
