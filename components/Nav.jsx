import React from 'react';

import Image from 'next/image';
import Logo from '../assets/Logo.png';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { MdRestaurantMenu, MdMenuOpen } from 'react-icons/md';
import { BsReceipt } from 'react-icons/bs';
import { useStore } from '../store/store';
import { useEffect, useState } from 'react';

export default () => {
  const [order, setOrder] = useState('');

  useEffect(() => {
    setOrder(localStorage.getItem('order'));
  }, []);

  const state = useStore((state) => state);

  const items = useStore((state) => state.cart.pizzas.length);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="flex items-center justify-between p-[1rem] relative">
      {/* Logo */}
      <div className="flex gap-[0.5rem] items-center">
        <Image src={Logo} alt="" width={50} height={50} />
        <h1 className="font-[800] text-[1rem] lg:text-[1.5rem]">Fudo</h1>
      </div>

      {/* Menu Items */}
      <div className="lg:flex gap-[2rem] justify-center z-[99] hidden ">
        <Link href="/">
          <a className="hover:text-themeRed font-[700]"> Home</a>
        </Link>
        <Link href="/">
          <a className="hover:text-themeRed font-[700]"> Menu</a>
        </Link>
        <Link href="/">
          <a className="hover:text-themeRed font-[700]"> Contact</a>
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex gap-[1rem]">
        <Link href={'/cart'}>
          <div
            className="relative cursor-pointer z-[99]"
            title="goto cart page"
          >
            <AiOutlineShopping size={35} color="#2E2E2E" />
            <div className="absolute grid place-items-center rounded-full top-0 right-[-0.5rem] bg-themeRed text-white w-[20px] h-[20px] text-[12px] ">
              {items}
            </div>
          </div>
        </Link>

        {order && (
          <Link href={`/order/${order}`}>
            <div className="relative cursor-pointer" title="go order page ">
              <BsReceipt size={35} color="#2E2E2E" />
              {order !== '' && (
                <div className="absolute grid place-items-center rounded-full top-0 right-[-0.5rem] bg-themeRed text-white w-[20px] h-[20px] text-[12px] ">
                  {1}
                </div>
              )}
            </div>
          </Link>
        )}
      </div>
      <div
        onClick={() => setOpenMenu((prev) => !prev)}
        className="text-[1.5rem] block lg:hidden cursor-pointer duration-1000"
      >
        <MdRestaurantMenu className={openMenu ? 'block' : 'hidden'} />
        <MdMenuOpen className={openMenu ? 'hidden' : 'block'} />
      </div>
    </header>
  );
};
