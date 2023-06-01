import SectionName from "./SectionName";

const Contact = () => {
  return (
    <section className="mt-32">
      <SectionName name="CONTATO" number="004" />
      <div className="flex justify-center">
        <div className="flex mt-24 mb-8 w-[90%] justify-between  max-[796px]:flex-col">
          <div className="flex flex-col max-[796px]:mb-[40px]">
            <h2 className="text-[33px] font-roboto font-medium max-[796px]:text-[28px]">
              Vamos conversar ?
            </h2>
            <a
              href="mailto:juniorgurinhem9@gmail.com"
              target={"_blank"}
              className="mt-[24px] text-center font-medium font-bitter bg-[#E7E1D7] py-[5px] text-[#050505] text-[24px] rounded-[28px] hover:bg-[#e7e1d7c0] duration-300  dark:bg-[#050505] dark:text-[#E7E1D7] dark:hover:bg-[#050505dc] max-[796px]:w-[233px] max-[796px]:mt-[6px] max-[796px]:text-[21px]"
            >
              Entrar em contato
            </a>
          </div>
          <div className="flex flex-col">
            <span className="font-bitter text-[27px] max-[796px]:text-[20px] hover:text-[#e7e1d7c0] duration-300 dark:hover:text-[#050505b5]">
              juniorgurinhem9@gmail.com
            </span>
            <ol className="mt-[24px] max-[796px]:mt-[6px]">
              <a
                className="font-bitter text-[27px]  max-[796px]:text-[20px] hover:text-[#e7e1d7c0] duration-300 dark:hover:text-[#050505b5]"
                href="https://drive.google.com/file/d/1fPJDggJtw9Wda00LX9tZI_2Whi6ItNQI/view?usp=sharing"
                target="_blank"
              >
                Currículo
              </a>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
