import { ArrowUpRight } from "lucide-react";
import SectionName from "./SectionName";

const Projects = () => {
  return (
    <section className="mt-32">
      <SectionName name="PROJETOS" number="001" />
      <div className="flex justify-center">
        <section className="flex w-[90%] justify-between items-center">
          {/* Div 1 projetos*/}
          <div className="flex flex-col gap-5">
            {/* componentizar essa parte */}
            <div className="flex justify-between text-[hsla(0,0%,99%,.6)] dark:text-[rgba(5,7,13,.6)] items-center w-[450px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[12px] group cursor-pointer">
              <span className="font-roboto text-xs font-extralight group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                01
              </span>
              <h3 className="font-roboto text-3xl font-extralight ml-[-225px] group-hover:ml-[-207px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                Pokédex
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </div>
            {/* componentizar essa parte */}
            <div className="flex justify-between text-[hsla(0,0%,99%,.6)] dark:text-[rgba(5,7,13,.6)] items-center w-[450px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[12px] group cursor-pointer">
              <span className="font-roboto text-xs font-extralight group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                01
              </span>
              <h3 className="font-roboto text-3xl font-extralight ml-[-225px] group-hover:ml-[-207px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                Pokédex
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </div>
            <div className="flex justify-between text-[hsla(0,0%,99%,.6)] dark:text-[rgba(5,7,13,.6)] items-center w-[450px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[12px] group cursor-pointer">
              <span className="font-roboto text-xs font-extralight group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                01
              </span>
              <h3 className="font-roboto text-3xl font-extralight ml-[-225px] group-hover:ml-[-207px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                Pokédex
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </div>
            <div className="flex justify-between text-[hsla(0,0%,99%,.6)] dark:text-[rgba(5,7,13,.6)] items-center w-[450px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[12px] group cursor-pointer">
              <span className="font-roboto text-xs font-extralight group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                01
              </span>
              <h3 className="font-roboto text-3xl font-extralight ml-[-225px] group-hover:ml-[-207px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                Pokédex
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </div>
          </div>
          {/* Div 1 projetos*/}
          <div className="w-[567px] h-[386px] rounded-[10px] border border-[hsla(0,0%,99%,.3)] dark:border-[rgba(5,7,13,.3)] "></div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
