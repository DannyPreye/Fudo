import React from 'react';

import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import Image from 'next/image';

export default () => {
  return (
    <footer className="flex flex-col gap-[3rem] mt-[6rem] items-center justify-center bg-gradient-to-bl from-pink to-red py-[2rem]">
      <span className="text-themeRed font-bold">ALL RIGHT RESERVED</span>

      {/* Social Icons */}
      <div className="flex gap-[1rem] text-themeRed">
        <BsFacebook size={35} />
        <BsGithub size={35} />
        <BsInstagram size={35} />
      </div>

      {/* Logo  */}
      <div className="flex gap-[0.5rem]">
        <Image src={Logo} alt="" width={50} height={50} />
        <h1 className="font-[800] text-[1.5rem]">Fudo</h1>
      </div>
    </footer>
  );
};
