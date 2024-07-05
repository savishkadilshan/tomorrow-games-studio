// import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./providers"

// const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: "Tomorrow Games",
  description: "Tomorrow Games Studio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebasNeue.className}>
        <Header />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
