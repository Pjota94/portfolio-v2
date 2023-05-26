import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <section className="mt-40">
      <div className="h-full flex flex-col items-center justify-center gap-6 mb-8">
        <div className="h-[0.3px] w-[90%] bg-[hsla(0,0%,99%,.3)] dark:bg-[rgba(5,7,13,.3)]"></div>
        <div className="w-[90%] flex justify-between items-center">
          <span className="text-[20px] font-extralight">
            © 2023 Paulo Júnior
          </span>
          <div className="flex gap-[36px]">
            <a
              className="hover:text-[#e7e1d7c0] duration-300 dark:hover:text-[#050505b5]"
              href="https://www.linkedin.com/in/paulo-j%C3%BAnior-6673a5199/"
              target={"_blank"}
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Pjota94"
              target={"_blank"}
              className="hover:text-[#e7e1d7c0] duration-300 dark:hover:text-[#050505b5]"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
