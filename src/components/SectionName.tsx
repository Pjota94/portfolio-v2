interface ISectionName {
  name: string;
  number: string;
}

const SectionName = ({ name, number }: ISectionName) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-6 mb-16">
      <div className="h-[0.3px] w-[90%] bg-[hsla(0,0%,99%,.4)] dark:bg-[rgba(5,7,13,.4)]"></div>
      <div className="w-[90%] flex justify-between">
        <h2 className="font-roboto font-normal text-[22px]">{name}</h2>
        <span className="font-roboto font-normal text-[18px]">{number}</span>
      </div>
    </div>
  );
};

export default SectionName;
