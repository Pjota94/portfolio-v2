interface IExp {
  date: string;
  job: string;
  company: string;
  type: string;
}

const Experience = ({ company, date, job, type }: IExp) => {
  return (
    <div className="flex justify-between border-b border-[hsla(0,0%,99%,.3)] dark:border-[rgba(5,7,13,.3)] w-[1103px] font-roboto max-[1160px]:w-[90%]">
      <span className="text-[14px] mb-[14px] font-extralight w-[150px] max-[806px]:text-[11px] max-[430px]:text-[9px]">
        {date}
      </span>
      <span className="text-[19px] font-light mb-[4px] w-[181px] max-[806px]:text-[15px] max-[430px]:text-[11px]">
        {job}
      </span>
      <span className="text-[19px] font-light mb-[4px] max-[806px]:text-[15px] max-[430px]:text-[11px]">
        {company}
      </span>
      <span className="text-[19px] font-light mb-[4px] max-[806px]:text-[15px] max-[702px]:hidden">
        {type}
      </span>
    </div>
  );
};

export default Experience;
