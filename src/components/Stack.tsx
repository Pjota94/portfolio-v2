import Image, { StaticImageData } from "next/image";

interface IStack {
  logo: any;
  name: string;
}

const Stack = ({ logo, name }: IStack) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="h-[120px] flex items-center">
        <Image
          width={100}
          height={100}
          src={logo}
          alt={`logo ${name}`}
          className="group-hover:scale-110 duration-300 ease-in-out"
        />
      </div>
      <span className="font-roboto text-[19px] font-extralight">{name}</span>
    </div>
  );
};

export default Stack;
