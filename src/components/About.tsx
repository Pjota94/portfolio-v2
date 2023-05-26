import { ArrowDown } from "lucide-react";
import SectionName from "./SectionName";

const About = () => {
  return (
    <section className="mt-32">
      <SectionName name="SOBRE" number="002" />
      <div className="w-full flex flex-col items-center gap-4">
        <p className="w-[1103px] font-roboto font-thin text-[1.5rem] indent-10">
          Sou o Paulo, um <strong>Desenvolvedor Full-Stack</strong> com
          experiências em <strong>TypeScript</strong>, <strong>React.js</strong>
          ,<strong> Next.js</strong> e <strong>Node.js</strong>, possuo
          habilidades tanto no desenvolvimento de interfaces de usuário modernas
          e responsivas quanto na construção de backends.
        </p>
        <p className="w-[1103px] font-roboto font-thin text-[1.5rem]">
          Quando não estou programando, gosto de relaxar jogando Xbox e assistir
          series ou filmes. Também gosto muito de esportes, adoro cozinhar e
          fazer churrasco.
        </p>
        <span className="font-roboto font-thin text-[25px] text-start w-[1107px] flex items-center">
          Confira minha experiência de trabalho abaixo{" "}
          <ArrowDown className="ml-3" />
        </span>
      </div>
      <div className="flex flex-col gap-3 items-center mt-9">
        {/* Componentizar */}
        <div className="flex justify-between border-b border-[hsla(0,0%,99%,.3)] dark:border-[rgba(5,7,13,.3)] w-[1103px] font-roboto">
          <span className="text-[14px] mb-[14px] font-thin w-[150px]">
            Jul 2022 - Set 2022
          </span>
          <span className="text-[22px] font-extralight mb-[4px] w-[181px]">
            Monitor JavaScript
          </span>
          <span className="text-[22px] font-extralight mb-[4px]">
            Kenzie Academy Brasil
          </span>
          <span className="text-[22px] font-extralight mb-[4px]">Remoto</span>
        </div>
        {/* Componentizar */}
        <div className="flex justify-between border-b border-[hsla(0,0%,99%,.3)] dark:border-[rgba(5,7,13,.3)] w-[1103px] font-roboto">
          <span className="text-[14px] mb-[14px] font-thin w-[150px]">
            Set 2022 - Nov 2022
          </span>
          <span className="text-[22px] font-extralight mb-[4px] w-[181px]">
            Monitor React.js
          </span>
          <span className="text-[22px] font-extralight mb-[4px]">
            Kenzie Academy Brasil
          </span>
          <span className="text-[22px] font-extralight mb-[4px]">Remoto</span>
        </div>
      </div>
    </section>
  );
};

export default About;
