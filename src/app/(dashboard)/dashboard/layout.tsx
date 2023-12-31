"use client";
import Header from "~/components/pages/dashboard/header/header";
import Sidebar from "~/components/pages/dashboard/sidebar/sidebar";
import { useIsUserLogined } from "~/queries";
import { COOKIE_NAME, getCookieConfig } from "~/lib";
import { LINK } from "~/lib/constants";
import "../../../../public/css/dashboard.style.css";
import Loading from "~/components/loading/loading";
import 'tippy.js/dist/tippy.css'; // optional
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: res, isLoading } = useIsUserLogined();
  if (!isLoading) {
    if (
      !getCookieConfig(COOKIE_NAME.ACCESS_TOKEN) ||
      res.data?.role?.name !== "SUPER_ADMIN"
    ) {
      window.location.href = LINK.HOME;
    } else {
      return (
        <>
          <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper ">
              <Sidebar />
              {children}
            </div>
          </div>
        </>
      );
    }
    // if (
    //   getCookieConfig(COOKIE_NAME.ACCESS_TOKEN) &&
    //   res.data?.role?.name === "SUPER_ADMIN"
    // ) {

    // } else {
    //   window.location.href = LINK.HOME
    // }
  } else {
    return (
      <>
        <Loading />
      </>
    );
  }
}