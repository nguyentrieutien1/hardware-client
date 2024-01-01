import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../../public/css/tiny-slider.css";
import "react-toastify/dist/ReactToastify.css";
import Providers from "~/lib/helpers/provider";
import "./../../public/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Máy tính Thu Nguyễn",
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
        <Providers>{children}</Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
