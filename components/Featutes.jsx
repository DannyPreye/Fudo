import Image from "next/image";

export default ({ src, children }) => {
  return (
    <div className="flex flex-col items-center">
      <div className=" w-[10rem] h-[10rem]">
        <Image src={src} alt="" objectFit="cover" layout="intrinsic" />
      </div>
      <div className="flex flex-col gap-[1rem] items-center justify-center mt-2">
        {children}
      </div>
    </div>
  );
};
