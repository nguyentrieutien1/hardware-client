"use client";
import Header from "~/components/pages/dashboard/header/header";
import "../../../../public/css/dashboard.style.css";
import Sidebar from "~/components/pages/dashboard/sidebar/sidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
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
