"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { LINK, NAME } from "~/lib/constants/routes";
import Dropdown from "react-bootstrap/Dropdown";
import { useIsUserLogined } from "~/queries";
import { COOKIE_NAME, deleteCookieConfig } from "~/lib";
interface LinkItem {
  text: string;
  href: string;
}
export default function Header() {
  const { data } = useIsUserLogined();
  const pathname = usePathname();
  const router = useRouter();
  const navItems: LinkItem[] = [
    { text: NAME.HOME, href: LINK.HOME },
    { text: NAME.SHOP, href: LINK.SHOP },
    { text: NAME.CART, href: LINK.CART },
  ];

  const handleLogout = () => {
    try {
      deleteCookieConfig(COOKIE_NAME.ACCESS_TOKEN);
      router.push(LINK.LOGIN);
    } catch (error) {}
  };
  return (
    <nav
      className=" custom-navbar navbar  navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" href={navItems[0].href}>
          TN<span>.</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            {navItems.map((item: LinkItem, index: number) => (
              <li
                key={index}
                className={`nav-item ${
                  navItems.findIndex((item) => item.href === pathname) === index
                    ? "active"
                    : ""
                }`}
              >
                <Link className="nav-link" href={item.href}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 d-flex align-items-center">
            <li></li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  split
                  variant="success"
                  className="bg-transparent border-0 border-end-0 p-0"
                >
                  <img src="images/user.svg" id="dropdown-split-basic" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-2">
                  <Dropdown.Item>
                    <Link className="text-decoration-none" href={LINK.ORDER}>
                      Lịch sử đặt hàng
                    </Link>
                  </Dropdown.Item>
                  {data ? (
                    <Dropdown.Item onClick={() => handleLogout()}>
                      Đăng xuất
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item>
                      <Link className="text-decoration-none" href={LINK.LOGIN}>
                        Đăng nhập
                      </Link>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
