import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDisclosure } from '@chakra-ui/react';
import { useStore } from '../store/store';
import { urlFor } from '../lib/client';
import { createOrder } from '../lib/orderHandler';
import { motion } from 'framer-motion';

import Button from '../components/Button';

export default function Cart() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const [paymentMethod, setPaymentMethod] = useState(
    typeof window !== 'undefined' && localStorage.getItem('order')
  );
  const [order, setOrder] = useState();
  const resetCart = useStore((state) => state.resetCart);

  const handleRemove = (i) => {
    removePizza(i);
  };

  const total = () =>
    CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);

  const handleOnDelivery = () => {
    setIsOpen(true);
    setPaymentMethod(0);
    typeof window !== 'undefined' && localStorage.setItem('total', total());
  };

  const handleCheckOut = async () => {
    typeof window !== 'undefined' && localStorage.setItem('total', total());
    setPaymentMethod(1);
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(CartData.pizzas),
    });

    if (response.status === 500) return;
    const data = await response.json();
    router.push(data.url);
  };

  const handleInputPhone = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleInputName = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleInputAddress = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSumit = async (e) => {
    e.preventDefault();
    total = total();
    console.log(typeof paymentMethod);
    const id = await createOrder({ ...formData, total, paymentMethod });
    resetCart();
    setIsOpen(false);
    {
      typeof window !== 'undefined' && localStorage.setItem('order', id);
    }
    router.push(`/order/${id}`);
  };

  return (
    <div
      className={`p-[2rem] grid grid-cols- gap-[2rem] ${
        isOpen && 'overflow-hidden'
      }`}
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
      <div className="flex flex-col items-center justify-between h-[16rem] p-[1.6rem] bg-pink shadow-md rounded-[15px] ">
        <span className="font-bold text-[1.5rem]">Cart</span>
        <div className=" w-[100%] flex flex-col gap-[0.5rem]">
          <div className="flex justify-between">
            <span>Items </span>
            <span>{CartData.pizzas.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>$ {total()}</span>
          </div>
        </div>

        {!order && CartData.pizzas.length > 0 ? (
          <div className="flex gap-[1rem]">
            <Button
              className=" text-[0.8rem] p-[0.6rem] bg-tranparent text-themeRed border-[2px] "
              content="Pay on Delivery"
              onClick={handleOnDelivery}
            />
            <Button
              className={'text-[0.8rem] p-[0.6rem]'}
              content="Pay Now"
              onClick={handleCheckOut}
            />
          </div>
        ) : (
          ''
        )}
      </div>

      {/* Modal */}

      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        onClick={() => setIsOpen(false)}
        className={` ${
          isOpen ? 'block' : 'hidden'
        }  w-screen h-screen backdrop-filter z-[1000] bg-black bg-opacity-70 fixed overflow-hidden inset-0 grid place-items-center backdrop-blur-sm `}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isOpen && { scale: 1 }}
          transition={{ duration: 2 }}
          onClick={(e) => e.stopPropagation()}
          className="w-[50%]  bg-white shadow-sm rounded-[.5rem] relative grid place-items-center p-[2rem]"
        >
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-[1rem] cursor-pointer right-[.9rem] font-bold bg-themeRed py-[.2rem] px-[.4rem] w-[3rem] rounded-[.3rem] text-[1.5rem] grid place-items-center text-pink"
          >
            X
          </div>
          <form
            className="w-[90%] flex items-center flex-col"
            onSubmit={handleSumit}
          >
            <div className="flex flex-col gap-1  w-full my-4">
              <label
                htmlFor="name"
                className="text-[1rem] font-bold text-themeRed"
              >
                Name <span>*</span>
              </label>
              <input
                onChange={handleInputName}
                type="text"
                required
                id="name"
                name="name"
                className=" border-b-[2px] rounded-md focus:outline-transparent px-[.5rem] border-themeRed"
              />
            </div>
            <div className="flex flex-col gap-1  w-full my-4">
              <label
                htmlFor="name"
                className="text-[1rem] font-bold text-themeRed"
              >
                Address
              </label>
              <textarea
                onChange={handleInputAddress}
                name="address"
                id=""
                cols="8"
                rows="3"
                className=" border-b-[2px] border-t-[2px] rounded-md focus:outline-transparent p-[.5rem] border-themeRed border-l-gray border-l-[2px] border-r-gray border-r-[2px]"
              ></textarea>
            </div>

            <div className="flex flex-col gap-1  w-full mt-4">
              <label
                htmlFor="name"
                className="text-[1rem] font-bold text-themeRed"
              >
                Phone *
              </label>
              <input
                onChange={handleInputPhone}
                name="phone"
                required
                type="text"
                id="name"
                className=" border-b-[2px]  rounded-md focus:outline-transparent px-[.5rem] border-themeRed"
              />
            </div>
            <div className="flex items-center gap-1">
              <span>You'll Pay </span>{' '}
              <span className="font-bold text-[1.5rem] text-themeRed">
                ${total()}
              </span>{' '}
              on Delivery
            </div>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ backgroundColor: '--themeRed' }}
              className="px-[1.5rem] py-[.5rem] text-white rounded-full my-4 font-bold text-[1rem]  bg-green"
            >
              {' '}
              Place Order
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
