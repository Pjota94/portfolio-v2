import SectionName from "./SectionName";

const Contact = () => {
  return (
    <section className="mt-32">
      <SectionName name="CONTATO" number="004" />
      <div className="flex justify-center">
        <div className="flex mt-20 w-[90%] justify-between">
          <div className="flex flex-col">
            <h2 className="text-[33px] font-medium">Vamos conversar ?</h2>
            <button className="mt-[24px] bg-[#E7E1D7] py-[5px] text-[#050505] text-[24px] rounded-[28px] hover:bg-[#e7e1d7c0] duration-300  dark:bg-[#050505] dark:text-[#E7E1D7] dark:hover:bg-[#050505dc]">
              Entrar em contato
            </button>
          </div>
          <div className="flex flex-col">
            <span className="text-[27px]">juniorgurinhem9@gmail.com</span>
            <a className="mt-[24px] text-[27px]" href="">
              Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
