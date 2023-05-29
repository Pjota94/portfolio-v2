import SectionName from "./SectionName";
import Stack from "./Stack";
import typescript from "../assets/Techs/typescript.png";
import react from "../assets/Techs/react.png";
import next from "../assets/Techs/next.webp";
import node from "../assets/Techs/node.svg";
import tailwind from "../assets/Techs/tailwind.png";
import postgres from "../assets/Techs/postgres.svg";
import styled from "../assets/Techs/styled.png";
import git from "../assets/Techs/git.svg";
import figma from "../assets/Techs/figma.png";
import redux from "../assets/Techs/redux.svg";

const Techs = () => {
  return (
    <section className="mt-32">
      <SectionName name="HABILIDADES" number="003" />
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center items-center w-[855px] gap-[50px]">
          <Stack logo={typescript} name={"TypeScript"} />
          <Stack logo={react} name={"React"} />
          <Stack logo={next} name={"Next"} />
          <Stack logo={node} name={"Node"} />
          <Stack logo={tailwind} name={"Tailwind"} />
          <Stack logo={postgres} name={"PostgreSQL"} />
          <Stack logo={styled} name={"Styled Components"} />
          <Stack logo={git} name={"Git"} />
          <Stack logo={figma} name={"Figma"} />
          <Stack logo={redux} name={"Redux"} />
        </div>
      </div>
    </section>
  );
};

export default Techs;
