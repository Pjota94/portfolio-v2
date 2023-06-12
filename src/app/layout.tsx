import "./globals.css";
import Provider from "@/components/Provider";
import "animate.css";
import { Roboto_Mono, Montserrat, Poppins } from "next/font/google";

export const metadata = {
  title: "Paulo Júnior | Full-Stack Developer",
  description: "Portfolio Paulo Júnior Desenvolvedor Full-Stack",
};

// const roboto = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   variable: "--roboto-font",
// });

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--roboto-font",
});

const bitter = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--bitter-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${bitter.variable} `}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
