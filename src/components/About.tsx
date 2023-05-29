import { ArrowDown } from "lucide-react";
import SectionName from "./SectionName";
import Experience from "./Experience";

const About = () => {
  return (
    <section className="mt-32">
      <SectionName name="SOBRE" number="002" />
      <div className="w-full flex flex-col items-center gap-4">
        <p className="w-[1103px] font-roboto font-extralight text-[1.5rem] indent-10 max-[1160px]:w-[90%] max-[1160px]:text-[1rem]">
          Sou o Paulo, um <strong>Desenvolvedor Full-Stack</strong> com
          experiências em <strong>TypeScript</strong>, <strong>React.js</strong>
          ,<strong> Next.js</strong> e <strong>Node.js</strong>, possuo
          habilidades tanto no desenvolvimento de interfaces de usuário modernas
          e responsivas quanto na construção de backends.
        </p>
        <p className="w-[1103px] font-roboto font-extralight text-[1.5rem] max-[1160px]:w-[90%] max-[1160px]:text-[1rem]">
          Quando não estou programando, gosto de relaxar jogando Xbox e assistir
          series ou filmes. Também gosto muito de esportes, adoro cozinhar e
          fazer churrasco.
        </p>
        <span className="font-roboto font-extralight text-[25px] text-start w-[1107px] flex items-center max-[1160px]:w-[90%] max-[1160px]:text-[14px]">
          Confira minha experiência de trabalho abaixo{" "}
          <ArrowDown className="ml-3 max-[1160px]:w-[14px]" />
        </span>
      </div>
      <div className="flex flex-col gap-3 items-center mt-9">
        <Experience
          date={"Jul 2022 - Set 2022"}
          job={"Monitor JavaScript"}
          company={"Kenzie Academy Brasil"}
          type={"Remoto"}
        />

        <Experience
          date={"Set 2022 - Nov 2022"}
          job={"Monitor React.js"}
          company={"Kenzie Academy Brasil"}
          type={"Remoto"}
        />
      </div>
    </section>
  );
};

export default About;
