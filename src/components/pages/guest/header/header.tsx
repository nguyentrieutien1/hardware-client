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
      <nav
        className=" custom-navbar navbar  navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <Link className="navbar-brand" href={navItems[0].href} prefetch>
            FASTFIX TN<span>.</span>
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
                    navItems.findIndex((item) => item.href === pathname) ===
                    index
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="nav-link" href={item.href} prefetch>
                    {item.text}
                  </Link>
                </li>
              ))}
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 d-flex align-items-center">
                <Dropdown>
                  <Dropdown.Toggle
                    split
                    variant="success"
                    className="bg-transparent border-0 border-end-0 p-0"
                  >
                    <img src="images/user.svg" id="dropdown-split-basic" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="mt-2">
                    {data?.data ? (
                      <>
                        <Dropdown.Item>
                          <Link
                            onClick={() => setShow(true)}
                            className="text-decoration-none"
                            href={"#"}
                            prefetch
                          >
                            Tài khoản
                          </Link>
                        </Dropdown.Item>
                        {data?.data?.role?.name === "SUPER_ADMIN" && (
                          <Dropdown.Item>
                            <a
                              className="text-decoration-none"
                              onClick={() => router.replace(LINK.DASHBOARD)}
                            >
                              Vào trang quản trị
                            </a>
                          </Dropdown.Item>
                        )}
                        <Dropdown.Item>
                          <Link
                            className="text-decoration-none"
                            href={LINK.ORDER}
                            prefetch
                          >
                            Lịch sử đặt hàng
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleLogout()}>
                          Đăng xuất
                        </Dropdown.Item>
                      </>
                    ) : (
                      <Dropdown.Item>
                        <Link
                          className="text-decoration-none"
                          href={LINK.LOGIN}
                          prefetch
                        >
                          Đăng nhập
                        </Link>
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
