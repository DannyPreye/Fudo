import { client, urlFor } from '../../lib/client';
import { LeftArrow } from '../../assets/arrowLeft.png';
import { RightArrow } from '../../assets/arrowRight.png';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import Button from '../../components/Button';

import Image from 'next/image';
import Head from 'next/head';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../../store/store';

export default ({ pizza }) => {
  const src = urlFor(pizza.image).url();
  const [size, setSize] = useState(1);
  const [quantity, setQuantity] = useState(1);

  // Add to cart

  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({
      ...pizza,
      price: pizza.price[size],
      quantity: quantity,
      size: size,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="flex p-[2rem] gap-[5rem] mt-[3rem]"
    >
      <Head>
        <title>{pizza.name}</title>
      </Head>
      <div className="relative w-[40%] h-[25rem] overflow-hidden rounded-[2rem]">
        <Image
          loader={() => src}
          src={src}
          alt=""
          layout="fill"
          unoptimized
          objectFit="cover"
          className="hover:scale-[1.1]"
        />
      </div>

      {/* Right side */}
      <div className="flex-1 flex flex-col text-[2rem] font-bold  justify-between">
        <span>{pizza.name}</span>
        <span className="text-[1.2rem] font-normal text-gray">
          {pizza.details}
        </span>
        <span>
          <span className="text-themeRed">$</span> {pizza.price[size]}
        </span>
        <div className="flex font-[600] gap-[3rem] text-[1.6rem]">
          <span className="">Size</span>
          <div className="flex gap-[.6rem] font-normal text-themeRed text-[.8rem]">
            <div
              onClick={() => setSize(0)}
              className={`${
                size == 0 && 'bg-themeRed text-white cursor-pointer'
              }flex items-center justify-center py-[0.3rem] px-[1.5rem] border-[2px] border-themeRed rounded-[2rem]  hover:bg-themeRed hover:text-white cursor-pointer`}
            >
              Small
            </div>
            <div
              onClick={() => setSize(1)}
              className={`${
                size == 1 && 'bg-themeRed text-white cursor-pointer'
              }flex items-center justify-center py-[0.3rem] px-[1.5rem] border-[2px] border-themeRed rounded-[2rem]  hover:bg-themeRed hover:text-white cursor-pointer`}
            >
              Medium
            </div>
            <div
              onClick={() => setSize(2)}
              className={`${
                size == 2 && 'bg-themeRed text-white cursor-pointer'
              }flex items-center justify-center py-[0.3rem] px-[1.5rem] border-[2px] border-themeRed rounded-[2rem]  hover:bg-themeRed hover:text-white cursor-pointer`}
            >
              Large
            </div>
          </div>
        </div>

        {/* Quatity counter */}
        <div className="flex gap-[1rem]">
          <span>Quantity</span>

          <div className="flex items-center text-[1.6rem] font-[500] gap-[1rem]">
            <BsFillCaretLeftFill
              onClick={() => !(quantity <= 1) && setQuantity(quantity - 1)}
              width={20}
              height={20}
              className="text-themeRed cursor-pointer"
            />
            <span>{quantity}</span>
            <BsFillCaretRightFill
              onClick={() => setQuantity(quantity + 1)}
              width={20}
              height={20}
              className="text-themeRed cursor-pointer"
            />
          </div>
        </div>
        {/* Button */}
        <Button
          onClick={addToCart}
          className="px-[1rem] py-[.5rem] font-normal text-[1rem]"
          content="Add to Cart"
        />
      </div>
    </motion.div>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const pizza = await client.fetch(
    `*[_type == "pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
