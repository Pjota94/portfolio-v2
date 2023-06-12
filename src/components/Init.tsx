"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Init = () => {
  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "Front-End Developer"],
    loop: 0,
  });

  return (
    <section className="mt-9 max-[500px]:mt-16">
      <div className="flex flex-col font-roboto text-[25px] leading-9 ml-32 max-[546px]:ml-12 min-[1462.22px]:text-[28px] min-[1645px]:text-[30px]">
        <h2 className="font-roboto font-normal">Paulo Júnior</h2>
        <h2 className="font-roboto font-normal">
          {text}
          <Cursor />
        </h2>
      </div>
      <div className="w-full flex justify-center mt-36 max-[546px]:mt-32  min-[1462.22px]:mt-44 min-[1645px]:mt-52">
        <h1 className="font-bitter font-bold text-[22px] w-[696px] my-5 min-[1462.22px]:w-[749px] min-[1645px]:w-[812px] min-[1462.22px]:text-[24px] min-[1645px]:text-[26px] max-[740px]:w-[312px] max-[740px]:text-[16px]">
          Sou um Desenvolvedor determinado a transformar minha paixão por
          codificar em uma carreira de sucesso
          <span className="animate-ping">_</span>
        </h1>
      </div>
      <section className="ml-32 mt-32 font-roboto font-normal min-[1462.22px]:text-[23px] min-[1645px]:text-[26px] text-xl max-[546px]:ml-12 min-[1462.22px]:mt-44 min-[1645px]:mt-52">
        <ol className="flex gap-24 max-[546px]:gap-16">
          <a
            href="https://github.com/Pjota94"
            target={"_blank"}
            className="w-20 mr-[31px] min-[1645px]:w-[93px] min-[1645px]:mr-[50px] min-[1462.22px]:mr-[45px]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paulo-j%C3%BAnior-6673a5199/"
            target={"_blank"}
          >
            Linkedin
          </a>
        </ol>
        <ol className="flex gap-24 mt-9 max-[546px]:gap-16">
          <a
            href="https://instagram.com/pjuniorpaiva?igshid=MzNlNGNkZWQ4Mg=="
            target={"_blank"}
            className="w-28 min-[1645px]:w-[144px] min-[1462.22px]:w-32"
          >
            Instagram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+5583999479372&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
            target={"_blank"}
          >
            WhatsApp
          </a>
        </ol>
      </section>
    </section>
  );
};

export default Init;
