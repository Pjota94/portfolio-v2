"use client";

import { ArrowUpRight } from "lucide-react";
import SectionName from "./SectionName";
import Image from "next/image";
import pokedex from "../assets/Projects/pokedex.png";
import mks from "../assets/Projects/mks.png";
import marvel from "../assets/Projects/marvel.png";
import just from "../assets/Projects/justTalk.png";
import { useState } from "react";

const Projects = () => {
  const [imagem, setImagem] = useState(pokedex);

  return (
    <section className="mt-32">
      <SectionName name="PROJETOS" number="001" />
      <div className="flex justify-center">
        <section className="flex w-[90%] justify-between items-center">
          {/* Div 1 projetos*/}
          <div className="flex flex-col">
            {/* componentizar essa parte */}
            <div className="flex justify-between text-[hsla(0,0%,99%,.6)] dark:text-[rgba(5,7,13,.6)] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[16px] group cursor-pointer">
              <span className="font-roboto text-xs font-light min-[499px]:min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                01
              </span>
              <h3 className="font-roboto text-[25px] font-light w-[220px] ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                Pokédex
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </div>
            {/* componentizar essa parte */}
            <div
              onMouseOver={() => setImagem(mks)}
              className="flex justify-between text-[hsla(0,0%,99%,.6)] dark:text-[rgba(5,7,13,.6)] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[16px] group cursor-pointer"
              onMouseOut={() => {
                setImagem(pokedex);
              }}
            >
              <span className="font-roboto text-xs font-light min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                02
              </span>
              <h3 className="font-roboto text-[25px] w-[220px] font-light ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                E-Commerce
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </div>
            <div
              onMouseOver={() => setImagem(marvel)}
              className="flex justify-between text-[hsla(0,0%,99%,.6)] dark:text-[rgba(5,7,13,.6)] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[16px] group cursor-pointer"
              onMouseOut={() => {
                setImagem(pokedex);
              }}
            >
              <span className="font-roboto text-xs font-light min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                03
              </span>
              <h3 className="font-roboto text-[25px] w-[220px] font-light ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                Marvel Comics
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </div>
            <div
              onMouseOver={() => setImagem(just)}
              className="flex justify-between text-[hsla(0,0%,99%,.6)] dark:text-[rgba(5,7,13,.6)] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[16px] group cursor-pointer"
              onMouseOut={() => {
                setImagem(pokedex);
              }}
            >
              <span className="font-roboto text-xs font-light min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                04
              </span>
              <h3 className="font-roboto text-[25px] w-[220px] font-light ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                JustTalk
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </div>
          </div>
          {/* Div 1 projetos*/}
          <div className="w-[567px] h-[386px] max-[1157px]:w-[435px] max-[1157px]:h-[321px] max-[1012px]:w-[357px] max-[1012px]:h-[254px] max-[924px]:hidden bg-[#0f0f0f] rounded-3xl border border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] flex justify-center items-center p-4">
            <Image
              className="w-full h-full rounded-lg opacity-70"
              src={imagem}
              alt="pokedex"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
