import "./globals.css";
import Provider from "@/components/Provider";
import "animate.css";
import { Bitter, Roboto_Flex, Source_Sans_Pro } from "next/font/google";

export const metadata = {
  title: "Paulo Júnior | Full-Stack Developer",
  description: "Portfolio Paulo Júnior Desenvolvedor Full-Stack",
};

const source = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--source-font",
});

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--roboto-font",
});

const bitter = Bitter({
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
    <html
      lang="en"
      className={`${roboto.variable} ${bitter.variable} ${source.variable}`}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
