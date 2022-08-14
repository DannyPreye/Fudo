import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

export default () => {
  return (
    <header className="flex items-center justify-between p-[1rem]">
      {/* Logo */}
      <div className="flex gap-[0.5rem]">
        <Image src={Logo} alt="" width={50} height={50} />
        <h1 className="font-[800] text-[1.5rem]">Fudo</h1>
      </div>

      {/* Menu Items */}
      <div className="flex gap-[2rem] justify-center z-[99]">
        <Link href="/">
          <a className="hover:text-themeRed font-[700]"> Home</a>
        </Link>
        <Link href="/">
          <a className="hover:text-themeRed font-[700]"> Menu</a>
        </Link>
        <Link href="/">
          <a className="hover:text-themeRed font-[700]"> Contact</a>
        </Link>
      </div>

      {/* Right Side */}
      <div className="relative cursor-pointer z-[99]">
        <AiOutlineShopping size={35} color="#2E2E2E" />
        <div className="absolute grid place-items-center rounded-full top-0 right-[-0.5rem] bg-themeRed text-white w-[20px] h-[20px] text-[12px] ">
          1
        </div>
      </div>
    </header>
  );
};
