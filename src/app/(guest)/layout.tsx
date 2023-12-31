"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "~/components/pages/guest/header/header";
import Footer from "~/components/pages/guest/footer/footer";
import "../../../public/css/style.css";
import "../../../public/css/font-awesome.min.css";

 function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
export default GuestLayout