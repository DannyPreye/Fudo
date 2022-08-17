import Image from 'next/image';
import { urlFor } from '../lib/client';
import Link from 'next/link';

export default ({ pizzas }) => {
  return (
    <div className="flex flex-col gap-[3rem] mt-[6rem]">
      <div className="flex flex-col  font-bold justify-start">
        <span className="text-themeRed text-[1rem] mb-[2rem]">OUR MENU</span>
        <span className="text-[2rem]">Menu That Always</span>
        <span className="text-[2rem]">Make You Fall In Love</span>
      </div>

      <div className="flex flex-wrap gap-y-[2rem] items-center justify-around">
        {/* Pizzas */}
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div
              key={'d' + id}
              className="flex flex-col items-start justify-center gap-[.5rem] text-[1.2rem] font-bold"
            >
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className="h-[16rem] w-[22rem] relative overflow-hidden rounded-[2rem] cursor-pointer">
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    className="hover:scale-[1.1]"
                  />
                </div>
              </Link>

              <span>{pizza.name}</span>
              <span>
                <span className="text-themeRed">$</span>
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
