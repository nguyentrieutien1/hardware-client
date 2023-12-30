"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "~/components/pages/guest/header/header";
import Footer from "~/components/pages/guest/footer/footer";
import ScriptClient from "../../components/script/script-client";
import { useIsUserLogined } from "~/queries/auth/auth-check-is-login-query";
import { useRouter, usePathname } from "next/navigation";
import { LINK } from "~/lib/constants/routes";

import { COOKIE_NAME, getCookieConfig } from "~/lib";
config.autoAddCss = false;

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: res, status, isLoading } = useIsUserLogined();
  const router = useRouter();
  const pathname = usePathname();
  const pathNeedVerify = [LINK.CART, LINK.ORDER];
  if (
    (pathNeedVerify.includes(pathname) &&
      !getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)) ||
    (pathNeedVerify.includes(pathname) && !isLoading && !res?.data)
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
