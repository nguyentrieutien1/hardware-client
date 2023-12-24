"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "~/components/header/header";
import Footer from "~/components/footer/footer";
import ScriptClient from "../../components/script/script-client";
import { useIsUserLogined } from "~/queries/auth/auth-check-is-login-query";
import Loading from "~/components/loading/loading";
import { useRouter, usePathname  } from "next/navigation";
import { LINK } from "~/lib/constants/routes";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, data, status, error } = useIsUserLogined();
  console.log(data);
  const router = useRouter();
  const pathname = usePathname()
  const pathNeedVerify = [LINK.SHOP, LINK.CART]
   if (!isLoading && status === 'error' && pathNeedVerify.includes(pathname)) {
    return router.push(LINK.LOGIN);
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
