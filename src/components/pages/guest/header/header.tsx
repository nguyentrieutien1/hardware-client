"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { LINK, NAME } from "~/lib/constants/routes";
import Dropdown from "react-bootstrap/Dropdown";
import { useIsUserLogined } from "~/queries";
import { COOKIE_NAME, deleteCookieConfig, toastConfig } from "~/lib";
import { AppModal } from "~/components/modal/modal";
import Profile from "../profile/profile";
import { useUpdateAccountMutation } from "~/mutations/account/account-update-mutation";
import { toastErrorAuthen } from "~/lib/helpers";
interface LinkItem {
  text: string;
  href: string;
}
export default function Header() {
  const [account, setAccount] = useState<any>({});
  const [show, setShow] = useState<boolean>(false);
  const { data } = useIsUserLogined();
  const pathname = usePathname();
  const router = useRouter();
  const { mutateAsync: updateAccount } = useUpdateAccountMutation();

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
  const handleSubmit = () => {
    updateAccount({
      id: account?.id,
      data: {
        email: account?.email,
        phone: account?.phone,
        birthday: account?.birthday,
        address: account?.address,
        sex: account?.sex,
        images: account?.images,
        fullName: account?.fullName,
      },
    })
      .then(() => {
        toastConfig("Cập nhật thông tin thành công !", { status: "success" });
        setShow(false);
      })
      .catch((err) => {
        toastErrorAuthen(err, "Cập nhật tài khoản thất bại");
      });
  };
  return (
    <>
      {show && (
        <AppModal
          closeModal={() => {
            setShow(false);
            setAccount({});
          }}
          content={<Profile account={account} setAccount={setAccount} />}
          modalIsOpen={show}
          onConfirm={handleSubmit}
          title="Hồ sơ"
        />
      )}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope" /> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p" />
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user" /> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  {navItems.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`nav-item ${
                          navItems.findIndex(
                            (item) => item.href === pathname
                          ) === index
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link href={item.href}>{item.text}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" /> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-bag" /> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </>
  );
}
