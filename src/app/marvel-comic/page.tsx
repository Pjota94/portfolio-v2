"use client";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/Projects/marvel.png";
import { useEffect } from "react";

export default function marvel() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.section
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-full w-full  z-10 bg-[#050505] dark:bg-[white] flex flex-col items-center"
    >
      <div className="w-[90%] flex flex-col items-end mt-4 gap-1 ">
        <Link
          href={"/"}
          className="text-2xl font-roboto hover:text-[#e7e1d7c0] duration-300 dark:hover:text-[#0505056f]  max-[1000px]:text-[17px]"
        >
          FECHAR
        </Link>
        <div className="h-[0.4px] w-[102.35px] max-[1000px]:w-[72px] bg-[hsla(0,0%,99%,.5)] dark:bg-[rgba(5,7,13,.5)]"></div>
      </div>
      <div className="w-[90%] flex justify-between items-center mt-[37px]">
        <h2 className="font-roboto font-medium text-4xl max-[1000px]:text-[23px]">
          Marvel Comics
        </h2>
        <div className="flex gap-[10px]">
          <a
            href="https://github.com/Pjota94/marvel-comics"
            target={"_blank"}
            className="px-4 h-[32px]  max-[1000px]:text-[12px] max-[1000px]:px-[5px] max-[1000px]:gap-[4px] border border-[#E7E1D7] rounded-[74px] flex items-center justify-center gap-[9px] duration-300 dark:hover:text-[rgba(5,7,13,.5)] dark:hover:border-[rgba(5,7,13,.2)] hover:text-[hsla(0,0%,99%,.5)] hover:border-[hsla(0,0%,99%,.5)]"
          >
            <Github size={19} />
            GitHub
          </a>
          <a
            href="https://marvel-comics-pjota94.vercel.app"
            target={"_blank"}
            className="px-4 h-[32px]  max-[1000px]:text-[12px] max-[1000px]:px-[5px] max-[1000px]:gap-[4px] bg-[#E7E1D7] dark:bg-[#050505] text-[#050505] dark:text-[#F2F2F2] rounded-[74px] flex items-center justify-center gap-[9px] hover:bg-[#e7e1d7c0] duration-300 dark:hover:bg-[#050505dc]"
          >
            <Globe size={19} />
            Live Server
          </a>
        </div>
      </div>
      <div className="h-[0.3px] w-[90%] bg-[hsla(0,0%,99%,.3)] dark:bg-[rgba(5,7,13,.3)] mt-[19px]"></div>
      <div className="w-[90%] flex mt-[19px] justify-between mb-[50px] max-[1000px]:flex-col">
        {/* Descrição */}
        <div className="w-[55%] max-[1000px]:w-[100%]">
          <h3 className="font-bitter text-sm font-medium">DESCRIÇÃO</h3>
          <p className="mt-3 font-roboto text-justify font-light dark:font-normal max-[1000px]:text-[14px]">
            Este projeto consiste em uma lista de todos os personagens e
            quadrinhos da Marvel. Foi feito uso da API oficial da Marvel para
            consumir os dados e o layout foi construído utilizando o Figma.
          </p>
        </div>
        {/* Techs */}
        <div>
          <h3 className="font-bitter text-sm font-medium max-[1000px]:mt-2">
            TECNOLOGIAS
          </h3>
          <p className="mt-3 font-roboto text-justify font-light dark:font-normal max-[1000px]:text-[14px]">
            React.js, TypeScript, Styled-Components e Swipes.
          </p>
        </div>
      </div>
      <div className="mb-8 flex justify-center">
        <Image
          className="rounded-lg w-[80%] border border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.3)]"
          src={img}
          alt="pokédex"
        />
      </div>
    </motion.section>
  );
}
