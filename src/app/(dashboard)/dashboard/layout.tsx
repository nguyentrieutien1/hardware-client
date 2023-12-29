"use client";
import Header from "~/components/pages/dashboard/header/header";
import "../../../../public/css/dashboard.style.css";
import Sidebar from "~/components/pages/dashboard/sidebar/sidebar";
import { useIsUserLogined } from "~/queries";
import { COOKIE_NAME, getCookieConfig } from "~/lib";
import { useRouter } from "next/navigation";
import { LINK } from "~/lib/constants";
import Loading from "~/components/loading/loading";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: res, isLoading } = useIsUserLogined();
  if (!isLoading) {
    if (
      getCookieConfig(COOKIE_NAME.ACCESS_TOKEN) &&
      res.data?.role?.name === "SUPER_ADMIN"
    ) {
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
    } else {
      window.location.href = LINK.HOME
    }
  } else {
    return <><Loading /></>;
  }
}
