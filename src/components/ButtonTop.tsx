"use client";

import ScrollToTop from "react-scroll-to-top";
import ComponentSvg from "./ComponentSVG";

const ButtonTop = () => {
  return (
    <ScrollToTop
      style={{
        backgroundColor: "black",
        opacity: 0.5,
        boxShadow: "none",
        bottom: "70px",
      }}
      className="bg-[black]"
      smooth
      top={400}
      component={<ComponentSvg />}
    />
  );
};

export default ButtonTop;
