"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "~/components/pages/guest/header/header";
import Footer from "~/components/pages/guest/footer/footer";
import ScriptClient from "../../components/script/script-client";
import { useIsUserLogined } from "~/queries/auth/auth-check-is-login-query";
import { useRouter, usePathname } from "next/navigation";
import { LINK } from "~/lib/constants/routes";
import "../../../public/css/bootstrap.min.css";
import "../../../public/css/style.css";
import { COOKIE_NAME, getCookieConfig } from "~/lib";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, data: res, status, error } = useIsUserLogined();
  const router = useRouter();
  const pathname = usePathname();
  const pathNeedVerify = [LINK.CART, LINK.ORDER];
  if (
    (pathNeedVerify.includes(pathname) &&
      !getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)) ||
    (  res && status === "error")
  ) {
    router.push(LINK.LOGIN);
    return <></>;
  } 
  return (
    <>
      <ScriptClient />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
