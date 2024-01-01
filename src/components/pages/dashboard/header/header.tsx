"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../../../public/images/logo.svg";
import Link from "next/link";
import { LINK } from "~/lib/constants";
import { CiFolderOff } from "react-icons/ci";
import { useIsUserLogined } from "~/queries";

export default function Header() {
  const { data: res } = useIsUserLogined();
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
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile">
            <a
              className="nav-link dropdown-toggle"
              id="profileDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
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
          <li className="nav-item nav-logout d-none d-lg-block">
            <a className="nav-link" href="#">
              <i className="mdi mdi-power" />
            </a>
          </li>
          <li className="nav-item nav-settings d-none d-lg-block">
            <a className="nav-link" href="#">
              <i className="mdi mdi-format-line-spacing" />
            </a>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-menu" />
        </button>
      </div>
    </nav>
  );
}
