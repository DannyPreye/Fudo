import React from 'react';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import Featutes from './Featutes';

export default () => {
  return (
    <section className="mt-[1rem]">
      <div className="flex flex-col font-bold justify-center items-center">
        <span className="text-themeRed text-[1rem]">WHAT WE SERVE</span>
        <span className="text-[2rem]">Your Favourite Food</span>
        <span className="text-[2rem]">Delivery Partner</span>
      </div>

      {/* Features */}
      <div className="flex mt-[3rem] gap-[3rem] items-center justify-center">
        <Featutes src={s1}>
          <span className="font-bold">Easy to Order</span>
          <span className="text-gray break-words w-[20rem] text-center">
            You only need a few steps in food <br /> ordering
          </span>
        </Featutes>

        <Featutes src={s2}>
          <span className="font-bold">Easy to Order</span>
          <span className="text-gray break-words w-[20rem] text-center">
            Delivery that is always on time even faster
          </span>
        </Featutes>
        <Featutes src={s3}>
          <span className="font-bold">Easy to Order</span>
          <span className="text-gray break-words w-[20rem] text-center">
            Not only fast for us, quality is also number one
          </span>
        </Featutes>
      </div>
    </section>
  );
};
