const Init = () => {
  return (
    <section className="mt-9">
      <div className="flex flex-col font-roboto font-extralight text-[25px] leading-9 ml-32 max-[546px]:ml-12">
        <h2 className="font-roboto font-thin">Paulo Júnior</h2>
        <h2 className="font-roboto font-thin">Full-Stack Developer</h2>
      </div>
      <div className="w-full flex justify-center mt-36 max-[546px]:mt-32  min-[1462.22px]:mt-44 min-[1645px]:mt-52">
        <h1 className="font-roboto font-semibold text-3xl w-[640px] max-[546px]:w-[312px] max-[546px]:text-[18px]">
          Um desenvolvedor full-stack que ama codar e sonha em viver do
          desenvolvimento <span className="animate-ping">_</span>
        </h1>
      </div>
      <section className="ml-32 mt-32 font-roboto font-extralight text-xl max-[546px]:ml-12 min-[1462.22px]:mt-44 min-[1645px]:mt-52">
        <ol className="flex gap-24">
          <a
            href="https://github.com/Pjota94"
            target={"_blank"}
            className="w-16 mr-[31px]"
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
        <ol className="flex gap-24 mt-9">
          <a
            href="https://instagram.com/pjuniorpaiva?igshid=MzNlNGNkZWQ4Mg=="
            target={"_blank"}
            className="w-24"
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
