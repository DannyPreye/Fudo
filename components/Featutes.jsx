import Image from "next/image";

export default ({ src }) => {
  return (
    <div>
      <div>
        <Image src={src} alt="" />
      </div>
    </div>
  );
};
