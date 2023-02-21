import React from 'react';

import Image from 'next/image';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/HeroImage.png';
import Pizza1 from '../assets/p1.jpg';
import Button from './Button';
import { BsTelephone } from 'react-icons/bs';

export default () => {
  return (
    <section className="relative flex">
      {/* Left Side  */}
      <div className="flex flex-col gap-[2rem] w-full lg:w-fit items-center lg:items-start">
        <div className="flex items-center justify-center w-fit bg-pink  mt-[3rem]  p-[1rem] rounded-[2rem] text-[0.8rem] text-themeRed font-bold ">
          <span className="">More Than Faster</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>
        <div className="flex flex-row gap-2 lg:gap-0 lg:flex-col text-[2rem] lg:text-[4rem] font-bold">
          <p className="lg:w-[500px] text-center lg:text-left">
            Be The Fastest In Delivering Your{' '}
            <span className="text-themeRed">Pizza</span>
          </p>
        </div>
        <span className="w-[70%] text-themeRed font-[600]">
          Our Mission is to filling your tummy with delicious food and with free
          delivery
        </span>
        <Button
          content={'Get Started'}
          className=" px-4 py-2 lg:px-[2.5rem] lg:py-[1rem]"
        />
      </div>

      {/* Rigth Side */}
      <div className="relative lg:block hidden">
        <div className="w-[38rem] hidden lg:block absolute top-[-5rem] left-[-5rem]">
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>

        {/* Contact Us */}
        <div className="flex items-center font-[600] justify-center absolute w-[max-content] hover:cursor-pointer hover:scale-[1.1] p-[1rem] rounded-[5rem] top-[6rem] left-[-6rem] gap-[1rem] bg-white shadow-md text-themeRed ">
          <span>Contact Us</span>
          <div className="bg-green rounded-full w-[2rem] h-[2rem] lg:w-[2.5rem] grid place-items-center lg:h-[2.5rem]">
            <BsTelephone color="white" />
          </div>
        </div>

        {/* Italian Pizza */}
        <div className="flex hover:scale-[1.1] cursor-pointer gap-[1rem]  bg-white shadow-md p-[.5rem] rounded-[0.5rem] absolute bottom-[4rem] w-[max-content] left-[19rem]">
          <div className="w-[6rem] h-[4rem] overflow-hidden  rounded-[.5rem]">
            <Image src={Pizza1} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <div className="flex flex-col justify-between font-bold">
            <span>Italian Pizza</span>
            <span>
              <span className="text-themeRed">$</span> 7.49
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
