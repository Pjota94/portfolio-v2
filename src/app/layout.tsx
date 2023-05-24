import "./globals.css";
import Provider from "@/components/Provider";
import "animate.css";
import { Bitter, Murecho } from "next/font/google";

export const metadata = {
  title: "Paulo Júnior | Full-Stack Developer",
  description: "Portfolio Paulo Júnior Desenvolvedor Full-Stack",
};

const murecho = Murecho({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--murecho-font",
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
    <html lang="en" className={`${murecho.variable} ${bitter.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
