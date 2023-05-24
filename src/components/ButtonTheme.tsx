"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import light from "../assets/light.png";
import dark from "../assets/dark.png";
import Image from "next/image";
import "animate.css";

const ButtonTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return true;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="group cursor-pointer flex mt-10"
        >
          <p
            className={`hidden group-hover:block absolute right-[4.75rem] animate__animated animate__bounceIn font-bitter`}
          >
            Inverter Tema
          </p>

          <Image
            className="fixed right-11"
            width={24}
            height={24}
            src={dark}
            alt="logo"
          />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="group cursor-pointer flex mt-10"
        >
          <p className="hidden group-hover:block absolute right-[4.75rem] animate__animated animate__bounceIn font-bitter">
            Inverter Tema
          </p>

          <Image
            className="fixed right-11"
            width={24}
            height={24}
            src={light}
            alt="logo"
          />
        </button>
      );
    }
  };

  return <div>{renderThemeChanger()}</div>;
};

export default ButtonTheme;
