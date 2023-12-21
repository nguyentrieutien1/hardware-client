import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../../public/css/tiny-slider.css";
import "./../../public/css/bootstrap.min.css";
import "./../../public/css/style.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "/",

};

export const viewport = {
   width: 1,
   themeColor: "light",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="vi">
         <body className={inter.className}>
            {children}
         </body>
      </html>
   );
}