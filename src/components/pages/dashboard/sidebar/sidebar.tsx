import Link from "next/link";
import React from "react";
import { CiMedicalCross,  } from "react-icons/ci";
import { LINK } from "~/lib/constants";
import Avt from "../../../../../public/images/faces/face1.jpg";
import Image from "next/image";
export default function Sidebar() {
  return (
    <nav className="sidebar sidebar-offcanvas fixed" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="#" className="nav-link">
            <div className="nav-profile-image">
                <Image src={Avt} alt={''}/>
              <span className="login-status online" />
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href={LINK.DASHBOARD}>
            <span className="menu-title">Trang chủ</span>
            <i className="mdi mdi-home menu-icon" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link d-flex align-items-center justify-content-between" href={LINK.DASHBOARD_PRODUCT}>
            <span className="menu-title">Sản phẩm</span>
            <CiMedicalCross />
          </Link>
        </li>
        <li className="nav-item sidebar-actions">
          <span className="nav-link">
            <button className="btn btn-block btn-lg btn-gradient-primary mt-4">
              + Add a project
            </button>
          </span>
        </li>
      </ul>
    </nav>
  );
}
