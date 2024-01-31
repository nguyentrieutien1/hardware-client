"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LINK, NAME } from "~/lib/constants/routes";
import { useGetProducts } from "~/queries";
import {
  COOKIE_NAME,
  deleteCookieConfig,
  toastConfig,
  useAppSelector,
} from "~/lib";
import { AppModal } from "~/components/modal/modal";
import Profile from "../profile/profile";
import { useUpdateAccountMutation } from "~/mutations/account/account-update-mutation";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
  toastErrorAuthen,
} from "~/lib/helpers";
import Image from "next/image";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import SearchOrder from "../search-order/search-order";
interface LinkItem {
  text: string;
  href: string;
}
export default function Header() {
  const [account, setAccount] = useState<any>({});
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { mutateAsync: updateAccount } = useUpdateAccountMutation();
  const { data: products, isLoading: productLoading } = useGetProducts();
  const [cartLocal, setCartLocal] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const { value } = useAppSelector((state) => state.cart);
  const [userIsLogined, setUserIsLogined] = useState(false);
  const [searchOrder, setSearchOrder] = useState("");
  const [isOpenSearchOrderModal, setiIsOpenSearchOrderModal] = useState(false);
  const isProduction = process.env.NODE_ENV === "production";
  console.log(value);

  const navItems: LinkItem[] = [
    { text: NAME.HOME, href: LINK.HOME },
    // { text: NAME.SHOP, href: LINK.SHOP },
    { text: NAME.CART, href: LINK.CART },
    { text: NAME.POST, href: LINK.POST },
  ];
  useEffect(() => {
    if (products) {
      const newCarts = value.map((cart: any) => {
        const checkItemIsExist = products?.data.find(
          (product) => product?.id == cart?.productId
        );
        return {
          ...cart,
          product: checkItemIsExist,
        };
      });
      setTotal(
        newCarts.reduce((acc, curr) => {
          return (acc += curr?.product?.price * curr?.quantity);
        }, 0)
      );
    }
  }, [value, products]);
  useEffect(() => {
    setQuantity(
      value.reduce((prev, curr: any) => {
        return (prev += curr?.quantity);
      }, 0)
    );
  }, [value]);

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
        const checkItemIsExist = products?.data.find((product) => {
          return product?.id == cart?.productId;
        });
        return {
          ...cart,
          product: checkItemIsExist,
        };
      });
      setCartLocal([...carts]);
    }
  }, [products?.data, products?.data?.length]);
  useEffect(() => {
    if (getItemFromLocalStorage("isLogined")) {
      setUserIsLogined(true);
    } else {
      setUserIsLogined(false);
    }
  }, []);
  useEffect(() => {
    require("../../../../../jquery.js");
  }, []);
  return (
    <>
      <div className="humberger__menu__overlay "></div>
      <div className="humberger__menu__wrapper active">
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <Link href={LINK.CART}>
                <i className="fa fa-shopping-bag" /> <span>{quantity}</span>
              </Link>
            </li>
            <div className="header__cart__price">
              item: <span>{currencyFormatterConfig(total)}</span>
            </div>
          </ul>
        </div>
        <div id="mobile-menu-wrap">
          <nav className="mobile-menu-wrap">
            <ul>
              {navItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className="list-unstyled" href={item.href}>
                      {item.text}
                    </Link>
                  </li>
                );
              })}
              <li className="list-unstyled">Tra cứu đơn hàng</li>
            </ul>
          </nav>
        </div>
        {userIsLogined ? (
          <div className="header__top__right__auth cursor-pointer">
            <a
              onClick={() => {
                setItemToLocalStorage("isLogined", false);
                window.location.href = LINK.LOGIN;
              }}
            >
              <i className="fa fa-user" /> Đăng xuất
            </a>
          </div>
        ) : (
          <div className="header__top__right__auth cursor-pointer">
            <a onClick={() => (window.location.href = LINK.LOGIN)}>
              <i className="fa fa-user" /> Đăng nhập
            </a>
          </div>
        )}
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <i className="fa fa-envelope" /> vanhao.0112@gmail.com
            </li>
            <li>Miễn phí vận chuyển</li>
          </ul>
        </div>
      </div>

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
      <header className="header mb-3 ">
        <div className="header__top  primary-bgr text-white">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul className="d-flex">
                    <li className="d-flex align-items-center">
                      <i className="fa fa-envelope text-white" />
                      <div className="text-white">vanhao.0112@gmail.com</div>
                    </li>
                    <li className=" text-white">Miễn phí vận chuyển</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header__top__right">
                  {userIsLogined ? (
                    <div className="header__top__right__auth cursor-pointer">
                      <a
                        onClick={() => {
                          setItemToLocalStorage("isLogined", false);
                          window.location.href = LINK.LOGIN;
                        }}
                      >
                        <i className="fa fa-user" /> Đăng xuất
                      </a>
                    </div>
                  ) : (
                    <div className="header__top__right__auth cursor-pointer">
                      <a onClick={() => (window.location.href = LINK.LOGIN)}>
                        <i className="fa fa-user" /> Đăng nhập
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="">
              <div className="header__logo">
                <Link href={LINK.HOME}>
                  <Image
                    src={`${
                      isProduction
                        ? "https://maytinhthunguyen.com"
                        : "http://localhost:5000"
                    }/api/upload/1705643045785-625737817.png`}
                    alt="logo"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            </div>
            <div className="active">
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

                  <li onClick={() => {}} className="list-unstyled">
                    <Link
                      onClick={() => setiIsOpenSearchOrderModal(true)}
                      href={"#"}
                    >
                      {" "}
                      Tra cứu đơn hàng
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="d-flex mt-5 m-lg-0">
              <div className="header__cart">
                <ul className="m-3 m-sm-0 m-md-3">
                  <li>
                    <Link href={LINK.CART}>
                      <i className="fa fa-shopping-bag"></i>{" "}
                      <span className=" primary-bgr">{quantity}</span>
                    </Link>
                  </li>
                  <div className="header__cart__price ml-3">
                    Tổng tiền: <span>{currencyFormatterConfig(total)}</span>
                  </div>
                </ul>
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
        <SearchOrder
          setShow={setiIsOpenSearchOrderModal}
          show={isOpenSearchOrderModal}
        />
      </header>
    </>
  );
}
