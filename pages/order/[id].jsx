import React, { useEffect } from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import Image from 'next/image';
import Spinner from '../../assets/spinner.svg';
import Cooking from '../../assets/cooking.png';
import Onway from '../../assets/onway.png';
import { BsBoxSeam } from 'react-icons/bs';
import { client } from '../../lib/client';

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);

  return {
    props: {
      order: order[0],
    },
  };
};

export default function Orders({ order }) {
  useEffect(() => {
    if (order.status > 3) {
      localStorage.clear();
    }
  }, [order]);

  return (
    <div className=" flex flex-col gap-[4rem mt-[3rem] items-center justify-center">
      <span className="font-[600] text-[2rem]">Order in Process</span>
      <div className="details flex flex-col gap-[1rem] w-[40%]">
        <div className="flex justify-between">
          <span>Order ID</span>
          <span className="font-[600]">{order._id}</span>
        </div>
        <div className="flex justify-between">
          <span>Customer Name</span>
          <span className="font-[600]">{order.name}</span>
        </div>
        <div className="flex justify-between">
          <span>Phone</span>
          <span className="font-[600]">{order.phone}</span>
        </div>
        <div className="flex justify-between">
          <span>Method</span>
          <span className="font-[600]">
            {order.method === 0 ? 'Cash on Delivery' : 'Online Payment(Paid)'}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-[600]">${order.total}</span>
        </div>
      </div>

      {/* Status Container */}
      <div className="statusContainer  flex gap-[15rem] mt-[5rem] ">
        <div className="flex flex-col gap-[2rem] w-[3rem] relative items-center">
          <FaMoneyBillAlt
            width={50}
            height={50}
            size={50}
            className="text-themeRed"
          />
          <span>Payment</span>
          {order.method === 0 ? (
            <span className="pending">On Delivery</span>
          ) : (
            <span className="w-[max-content] bg-yellow-500 p-[.5rem] text-[0.8rem] text-white rounded-[1rem]">
              Completed
            </span>
          )}
        </div>

        <div className="flex flex-col gap-[2rem] w-[3rem] relative items-center">
          <Image src={Cooking} alt="cooking" width={50} height={50} />
          <span>Cooking</span>
          {order.status === 1 && (
            <div className=" absolute left-[-1.5rem] top-[-1.5rem] w-[6rem]">
              <Image src={Spinner} alt="" />
            </div>
          )}
          {order.status > 1 && (
            <span className=" text-white p-[.5rem] bg-green rounded-[1rem]  text-[.8rem]">
              Completed
            </span>
          )}
        </div>

        <div className="flex flex-col gap-[2rem] w-[3rem] relative items-center">
          <Image src={Onway} alt="" width={50} height={50} />
          <span>Onway</span>
          {order.status === 2 && (
            <div className=" absolute left-[-1.5rem] top-[-1.5rem] w-[6rem]">
              <Image src={Spinner} alt="" />
            </div>
          )}
          {order.status > 2 && (
            <span className=" text-white p-[.5rem] bg-green rounded-[1rem]  text-[.8rem]">
              Completed
            </span>
          )}
        </div>

        <div className="flex flex-col gap-[2rem] w-[3rem] relative items-center">
          <BsBoxSeam
            width={50}
            height={50}
            size={50}
            className="text-themeRed"
          />
          <span>Delivered</span>
          {order.status === 3 && (
            <div className=" absolute left-[-1.5rem] top-[-1.5rem] w-[6rem]">
              <Image src={Spinner} alt="" />
            </div>
          )}
          {order.status > 3 && (
            <span className=" text-white p-[.5rem] bg-green rounded-[1rem]  text-[.8rem]">
              Completed
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
