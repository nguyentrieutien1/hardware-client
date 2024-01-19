"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LINK, NAME } from "~/lib/constants/routes";
import Dropdown from "react-bootstrap/Dropdown";
import { useGetProducts, useIsUserLogined } from "~/queries";
import { COOKIE_NAME, deleteCookieConfig, toastConfig } from "~/lib";
import { AppModal } from "~/components/modal/modal";
import Profile from "../profile/profile";
import { useUpdateAccountMutation } from "~/mutations/account/account-update-mutation";
import { getItemFromLocalStorage, toastErrorAuthen } from "~/lib/helpers";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import Image from "next/image";
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
  const { data: products, isLoading: productLoading } = useGetProducts();
  const [cartLocal, setCartLocal] = useState([]);
  const isProduction = process.env.NODE_ENV === 'production';

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
  useEffect(() => {
    if (products?.data) {
      let carts = getItemFromLocalStorage("cart") || [];
      carts = carts.map((cart) => {
        const checkItemIsExist = products?.data.find(
          (product) => {
            console.log(carts);
            console.log(product);
            
            return product?.id == cart?.productId
          }
        );
        return {
          ...cart,
          product: checkItemIsExist,
        };
      });
      setCartLocal([...carts]);
    }
  }, [products?.data, products?.data?.length]);
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
      <header className="header mb-3">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                    <i className="fa fa-envelope" />vanhao.0112@gmail.com
                    </li>
                    <li>Miễn phí vận chuyển</li>
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
                    <div>Tùy chọn</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li>
                        <a href="#">Tùy chọn 1</a>
                      </li>
                      <li>
                        <a href="#">Tùy chọn 2</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth cursor-pointer">
                    <a onClick={() => router.replace(LINK.LOGIN)}>
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
                <Link href={LINK.HOME}>
                  <Image src={`${isProduction ? 'https://maytinhthunguyen.com': 'http://localhost:5000'}/api/upload/1705643045785-625737817.png`} alt="logo" width={100} height={100} style={{objectFit: "contain"}}/>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 justify-content-center text-right">
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
            
          </div>
        </div>
      </header>
    </>
  );
}
