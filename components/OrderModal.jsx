import { useState } from 'react';
import { useRouter } from 'next/router';
import { createOrder } from '../lib/orderHandler';

export default function OrderModal() {
  const [formData, setFormData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const [paymentMethod, setPaymentMethod] = useState();
  const resetCart = useStore((state) => state.resetCart);

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
  );
}
