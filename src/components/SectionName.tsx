interface ISectionName {
  name: string;
  number: string;
}

const SectionName = ({ name, number }: ISectionName) => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-6 mb-16">
      <div className="h-[0.3px] w-[90%] bg-[hsla(0,0%,99%,.3)] dark:bg-[rgba(5,7,13,.3)]"></div>
      <div className="w-[90%] flex justify-between">
        <h2 className="font-roboto font-light text-xl">{name}</h2>
        <span className="font-roboto font-light text-base">{number}</span>
      </div>
    </div>
  );
};

export default SectionName;
