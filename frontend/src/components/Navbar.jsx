import React, { useEffect, useState } from 'react';
import { assets } from '../assetsa/assets';

const Navbar = () => {
  const [ShowMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (ShowMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [ShowMobileMenu]);

  return (
    <div className='absolute top-0 left-0 w-full z-50 '>
      <div className='container mx-auto flex items-center justify-between py-3 px-4 md:px-8 lg:px-20'>
        {/* Logo */}
        <img src={assets.logo} alt='Logo' className='w-20 md:w-20 lg:w-28' />

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-3 lg:gap-7 text-white text-xs lg:text-base whitespace-nowrap'>
          <li>
            <a href='rahn' className='hover:text-neutral-tint-1'>
              رهن و اجاره
            </a>
          </li>
          <li>
            <a href='consultants' className='hover:text-neutral-tint-1'>
              مشاورین املاک
            </a>
          </li>
          <li>
            <a href='blog' className='hover:text-neutral-tint-1'>
              بلاگ رنتی فای
            </a>
          </li>
          <li>
            <a href='about' className='hover:text-neutral-tint-1'>
              درباره ما
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className='hidden md:flex items-center gap-2 lg:gap-4'>
          <button className='bg-white px-4 py-1.5 rounded-full border border-neutral-300 text-xs lg:text-base cursor-pointer'>
            ورود / ثبت نام
          </button>

          <button className='bg-primary-tint-1 text-white px-4 py-1.5 rounded-full text-xs lg:text-base cursor-pointer'>
            + ثبت آگهی رایگان
          </button>
        </div>

        {/* Mobile Menu Button */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt='menu'
          className='w-8 cursor-pointer md:hidden'
        />
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transition-all duration-300 md:hidden 
${ShowMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex justify-end p-6'>
          <img
            onClick={() => setShowMobileMenu(false)}
            className='w-7 cursor-pointer'
            src={assets.cross_icon}
            alt='close'
          />
        </div>

        <ul className='flex flex-col text-center gap-6 text-lg font-medium mt-10'>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='rahn'
            className='py-2'
          >
            رهن و اجاره
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='consultants'
            className='py-2'
          >
            مشاورین املاک
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='blog'
            className='py-2'
          >
            بلاگ رنتی فای
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href='about'
            className='py-2'
          >
            درباره ما
          </a>

          <button className='bg-primary-tint-1 text-white w-3/4 mx-auto py-2 rounded-full'>
            + ثبت آگهی رایگانن
          </button>
          <button className='bg-neutral-200 w-3/4 mx-auto py-2 rounded-full'>
            ورود / ثبت نام
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
