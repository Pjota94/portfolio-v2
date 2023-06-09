"use client";

import { ArrowUpRight } from "lucide-react";
import SectionName from "./SectionName";
import Image from "next/image";
import pokedex from "../assets/Note/pokedex.png";
import mks from "../assets/Note/mks.png";
import marvel from "../assets/Note/marvel.png";
import just from "../assets/Note/justTalk.png";
import { useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [imagem, setImagem] = useState(pokedex);

  return (
    <section className="mt-32">
      <SectionName name="PROJETOS" number="001" />
      <div className="flex justify-center">
        <section className="flex w-[90%] justify-around items-center">
          {/* Div 1 projetos*/}
          <div className="flex flex-col">
            {imagem === pokedex ? (
              <Link
                href={"/pokedex"}
                className="flex justify-between text-[#F2F2F2] dark:text-[#050505] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[18px] group cursor-pointer"
              >
                <span className="font-roboto text-xs font-light min-[499px]:min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                  01
                </span>
                <h3 className="font-roboto text-[25px] font-normal w-[220px] ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                  Pokédex
                </h3>
                <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
              </Link>
            ) : (
              <Link
                href={"/pokedex"}
                className="flex justify-between text-[hsla(0,0%,99%,.4)] dark:text-[rgba(5,7,13,.4)] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[18px] group cursor-pointer"
              >
                <span className="font-roboto text-xs font-light min-[499px]:min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                  01
                </span>
                <h3 className="font-roboto text-[25px] font-normal w-[220px] ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                  Pokédex
                </h3>
                <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
              </Link>
            )}
            <Link
              href={"/mks"}
              onMouseOver={() => setImagem(mks)}
              className="flex justify-between text-[hsla(0,0%,99%,.4)] dark:text-[rgba(5,7,13,.4)] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[18px] group cursor-pointer"
              onMouseOut={() => {
                setImagem(pokedex);
              }}
            >
              <span className="font-roboto text-xs font-light min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                02
              </span>
              <h3 className="font-roboto text-[25px] w-[220px] font-normal ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                MKS Sistemas
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </Link>
            <Link
              href={"/marvel-comic"}
              onMouseOver={() => setImagem(marvel)}
              className="flex justify-between text-[hsla(0,0%,99%,.4)] dark:text-[rgba(5,7,13,.4)] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[18px] group cursor-pointer"
              onMouseOut={() => {
                setImagem(pokedex);
              }}
            >
              <span className="font-roboto text-xs font-light min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                03
              </span>
              <h3 className="font-roboto text-[25px] w-[220px] font-normal ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                Marvel Comics
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </Link>
            <Link
              href={"just-talk"}
              onMouseOver={() => setImagem(just)}
              className="flex justify-between text-[hsla(0,0%,99%,.4)] dark:text-[rgba(5,7,13,.4)] items-center w-[450px] max-[499px]:w-[333px] border-b border-[hsla(0,0%,99%,.2)] dark:border-[rgba(5,7,13,.2)] p-[18px] group cursor-pointer"
              onMouseOut={() => {
                setImagem(pokedex);
              }}
            >
              <span className="font-roboto text-xs font-light min-[499px]:group-hover:pl-[28px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                04
              </span>
              <h3 className="font-roboto text-[25px] w-[220px] font-normal ml-[-76px] max-[499px]:ml-[-15px] min-[499px]:group-hover:ml-[-60px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]">
                JustTalk
              </h3>
              <ArrowUpRight className="group-hover:mr-[14px] duration-300 group-hover:text-[#F2F2F2] dark:group-hover:text-[#050505]" />
            </Link>
          </div>
          {/* Div 1 projetos*/}
          <div className="w-[50%]  max-[924px]:hidden bg-gradient-to-t from-[#111213] to-[#131515] dark:bg-gradient-to-t dark:from-[#F2f2f2] dark:to-[#9ab8d212] rounded-2xl border border-[hsla(0,0%,99%,.1)] dark:border-[rgba(5,7,13,.2)] flex justify-center items-center p-4">
            <Image className="w-full h-full " src={imagem} alt="pokedex" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
