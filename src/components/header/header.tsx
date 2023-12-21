"use client"
import Link from "next/link";
import React, { useState } from "react";
import { LINK, NAME } from "~/lib/constants/routes";
interface LinkItem {
  text: string;
  href: string;
}
export default function Header() {
  const [active, setActive] = useState<number>(0);
  const navItems: LinkItem[] = [
    { text: NAME.HOME, href: LINK.HOME },
    { text: NAME.SHOP, href: LINK.SHOP },
    // { text: "About us", href: "about-us" },
    // { text: "Service", href: "service" },
    // { text: "Blog", href: "blog" },
    // { text: "Contact us", href: "contact-us" },
  ];

  return (
    <nav
      className="custom-navbar navbar  navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <Link onClick={() => setActive(0)} className="navbar-brand" href={navItems[0].href}>
          Furni<span>.</span>
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
                onClick={() => setActive(index)}
                className={`nav-item ${index === active ? "active" : ""}`}
              >
                <Link className="nav-link" href={item.href}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="#">
                <img src="images/user.svg" />
              </a>
            </li>
            <li>
              <Link className="nav-link" href={LINK.CART}>
                <img src="images/cart.svg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
