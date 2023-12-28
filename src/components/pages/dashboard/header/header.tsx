import React from "react";
import Image from "next/image";
import Logo from "../../../../../public/images/logo.svg";
import Avt from "../../../../../public/images/couch.svg";
import Link from "next/link";
import { LINK } from "~/lib/constants";
import { CiBellOff, CiFolderOff } from "react-icons/ci";

export default function Header() {
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo" href={LINK.DASHBOARD}>
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
          <li className="nav-item nav-profile dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="profileDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="nav-profile-img">
                <img src="images/faces/face1.jpg" alt="image" />
                <span className="availability-status online" />
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black">David Greymaax</p>
              </div>
            </a>
          </li>
          <li className="nav-item d-none d-lg-block full-screen-link">
            <a className="nav-link">
              <i className="mdi mdi-fullscreen" id="fullscreen-button" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="messageDropdown"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="mdi mdi-email-outline" />
              <span className="count-symbol bg-warning" />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href="#"
              data-bs-toggle="dropdown"
            >
              <CiFolderOff  />
              <span className="count-symbol bg-danger" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <h6 className="p-3 mb-0">Notifications</h6>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="mdi mdi-calendar" />
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">
                    Event today
                  </h6>
                  <p className="text-gray ellipsis mb-0">
                    {" "}
                    Just a reminder that you have an event today{" "}
                  </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="mdi mdi-settings" />
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">
                    Settings
                  </h6>
                  <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="mdi mdi-link-variant" />
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">
                    Launch Admin
                  </h6>
                  <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <h6 className="p-3 mb-0 text-center">See all notifications</h6>
            </div>
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
