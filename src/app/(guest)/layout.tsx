"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "~/components/pages/guest/header/header";
import Footer from "~/components/pages/guest/footer/footer";
import "../../../public/css/style.css";
import "../../../public/css/bootstrap.min.css";

import "../../../public/css/font-awesome.min.css";
import { useEffect } from "react";

 function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("../../../jquery")
  }, [])
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
export default GuestLayout