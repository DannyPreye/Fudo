import { useStore } from '../store/store';
import Image from 'next/image';
import { urlFor } from '../lib/client';

export default function Cart() {
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);

  const handleRemove = (i) => {
    removePizza(i);
  };
  return (
    <div
      className="p-[2rem] grid grid-cols- gap-[2rem]"
      style={{ gridTemplateColumns: '2.2fr 1fr' }}
    >
      <div className="">
        <table
          className="w-[100%] border-seperate flex-1 "
          style={{ borderSpacing: '1rem' }}
        >
          <thead>
            <tr>
              <th>Pizza</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {CartData.pizzas.length > 0 &&
              CartData.pizzas.map((pizza, i) => {
                const src = urlFor(pizza.image).url();

                return (
                  <tr key={i} className="">
                    <td>
                      <Image
                        loader={() => src}
                        src={src}
                        width={85}
                        height={85}
                        objectFit="cover"
                        unoptimized
                        alt={pizza.name}
                        className="rounded-[1rem]"
                      />
                    </td>

                    <td className="w-[15%] ">{pizza.name}</td>

                    <td>
                      {pizza.size === 0
                        ? 'Small'
                        : pizza.size === 1
                        ? 'Medium'
                        : 'Large'}
                    </td>

                    <td>{pizza.price}</td>

                    <td>{pizza.quantity}</td>
                    <td>{pizza.price * pizza.quantity}</td>
                    <td
                      onClick={() => handleRemove(i)}
                      className="text-themeRed cursor-pointer"
                    >
                      X
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* summary */}
      <div></div>
    </div>
  );
}
