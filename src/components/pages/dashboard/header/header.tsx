"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../../../public/images/logo.svg";
import Link from "next/link";
import { LINK } from "~/lib/constants";
import { useIsUserLogined } from "~/queries";
import Tippy from "@tippyjs/react";
import { COOKIE_NAME, deleteCookieConfig } from "~/lib";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: res } = useIsUserLogined();
  const router = useRouter();
  const handleLogout = () => {
    try {
      deleteCookieConfig(COOKIE_NAME.ACCESS_TOKEN);
      router.push(LINK.LOGIN);
    } catch (error) {}
  };
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link
          className="navbar-brand brand-logo"
          href={LINK.DASHBOARD}
          prefetch
        >
          <Image width={100} height={100} src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu" />
        </button>
        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify" />
              </div>
              <input
                type="text"
                className="form-control bg-transparent border-0"
                placeholder="Search projects"
              />
            </div>
          </form>
        </div>
        <ul className="navbar-nav navbar-nav-right   cursor-pointer">
          <Tippy
            trigger="click"
            allowHTML={true}
            placement="bottom-end"
            arrow={false}
            className="bg-gradient border-2 cursor-pointer"
            interactive={true}
            content={
              <div
                onClick={() => handleLogout()}
                style={{ cursor: "pointer !important" }}
              >
                <button className="btn btn-info p-2 rounded-1">Đăng xuất</button>
              </div>
            }
          >
            <li className="nav-item nav-profile">
              <a className="nav-link dropdown-toggle">
                <div className="nav-profile-img">
                  <img
                    src={res?.data?.image?.url}
                    style={{ objectFit: "cover" }}
                    alt="image"
                  />
                  <span className="availability-status online" />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">{res?.data?.fullName}</p>
                </div>
              </a>
            </li>
          </Tippy>
        </ul>
      </div>
    </nav>
  );
}
