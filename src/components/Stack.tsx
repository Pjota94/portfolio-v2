import Image, { StaticImageData } from "next/image";

interface IStack {
  logo: any;
  name: string;
}

const Stack = ({ logo, name }: IStack) => {
  return (
    <div className="flex flex-col items-center group w-[15%]">
      <div className="h-[120px] flex items-center">
        <Image
          width={70}
          height={70}
          src={logo}
          alt={`logo ${name}`}
          className="group-hover:scale-110 duration-300 ease-in-out"
        />
      </div>
      <span className="font-bitter text-[12px] font-normal">{name}</span>
    </div>
  );
};

export default Stack;
