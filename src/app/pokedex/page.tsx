"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/Projects/pokedex.png";
import { useEffect } from "react";

export default function pokedex() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.section
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-full w-full  z-10 bg-[#050505] dark:bg-[#fcfcfc] flex flex-col items-center"
    >
      <div className="w-[90%] flex flex-col items-end mt-4 gap-1 ">
        <Link
          href={"/"}
          className="text-2xl font-roboto hover:text-[#e7e1d7c0] duration-300 dark:hover:text-[#0505056f] max-[1000px]:text-[17px]"
        >
          FECHAR
        </Link>
        <div className="h-[0.4px] w-[90.31px] max-[1000px]:w-[63.68px] bg-[hsla(0,0%,99%,.5)] dark:bg-[rgba(5,7,13,.5)]"></div>
      </div>
      <div className="w-[90%] flex justify-between items-center mt-[37px]">
        <h2 className="font-roboto font-medium text-4xl max-[1000px]:text-[23px]">
          Pokédex
        </h2>
        <div className="flex gap-[10px]">
          <a
            href="https://github.com/Pjota94/pokedex"
            target={"_blank"}
            className="px-4 h-[32px] max-[1000px]:text-[12px] max-[1000px]:px-[5px] max-[1000px]:gap-[4px] border border-[#E7E1D7] rounded-[74px] flex items-center justify-center gap-[9px] duration-300 dark:hover:text-[rgba(5,7,13,.5)] dark:hover:border-[rgba(5,7,13,.2)] hover:text-[hsla(0,0%,99%,.5)] hover:border-[hsla(0,0%,99%,.5)]"
          >
            <Github size={19} />
            GitHub
          </a>
          <a
            href="https://pokedex-pjota94.vercel.app/"
            target={"_blank"}
            className="px-4 h-[32px] max-[1000px]:text-[12px] max-[1000px]:px-[5px] max-[1000px]:gap-[4px] bg-[#E7E1D7] dark:bg-[#050505] text-[#050505] dark:text-[#F2F2F2] rounded-[74px] flex items-center justify-center gap-[9px] hover:bg-[#e7e1d7c0] duration-300 dark:hover:bg-[#050505dc]"
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
          <h3 className="font-bitter font-medium text-sm">DESCRIÇÃO</h3>
          <p className="mt-3 font-roboto text-justify font-light dark:font-normal  max-[1000px]:text-[14px]">
            Este é o meu primeiro projeto desenvolvido com Next, uma Pokédex que
            apresenta uma página exibindo os 151 Pokémon de Kanto. Ao clicar em
            um Pokémon, o usuário será redirecionado para uma nova página
            contendo os detalhes completos daquele Pokémon. Além disso, o botão
            de pesquisa permite buscar por nome entre os 900 Pokémon
            disponíveis.
          </p>
        </div>
        {/* Techs */}
        <div>
          <h3 className="font-bitter font-medium text-sm max-[1000px]:mt-2">
            TECNOLOGIAS
          </h3>
          <p className="mt-3 font-roboto text-justify font-light dark:font-normal  max-[1000px]:text-[14px] ">
            Next.js 13.4, TypeScript, Tailwind e Frame-Motion.
          </p>
        </div>
      </div>
      <div className="mb-8 flex justify-center">
        <iframe
          className="w-[1100px] h-[600px] max-[1100px]:w-[800px] max-[834px]:w-[375px] rounded-lg border border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.3)]"
          src="https://pokedex-pjota94.vercel.app/"
        />
      </div>
    </motion.section>
  );
}
