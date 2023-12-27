"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import "./login.css";
import Link from "next/link";
import { LINK } from "~/lib/constants/routes";
import { IAuthLogin } from "~/types";
import { COOKIE_NAME, setCookieConfig, toastConfig } from "~/lib";
import { useAuthLoginMutation } from "~/mutations";
import { useRouter } from "next/navigation";
import { toastErrorAuthen } from "~/lib/helpers";
export default function LoginPage() {
  const [loginInfo, setLoginInfo] = useState<IAuthLogin>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { mutateAsync } = useAuthLoginMutation();
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      for (const key in loginInfo) {
        if (Object.prototype.hasOwnProperty.call(loginInfo, key)) {
          if (!loginInfo[key]) {
            toastConfig(`${key} không được trống !`);
            return;
          }
        }
      }
      setIsLoading(true)
      mutateAsync(loginInfo)
        .then((res) => {
          const { status, data } = res;
          const { access_token } = data;
          if (status === 201) {
            setCookieConfig(COOKIE_NAME.ACCESS_TOKEN, access_token);
              toastConfig("Đăng nhập thành công !", { status: "success" });
              router.push(LINK.HOME);
              setIsLoading(false)
          }
        })
        .catch((err) => {
         toastErrorAuthen(err, `Email hoặc mật khẩu không chính xác, vui lòng nhập lại !`)
        });
    } catch (error) {
    }
  };
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section"></h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Chào mừng bạn đăng nhập</h2>
                  <p>Bạn có tài khoản chưa ?</p>
                  <Link
                    href={LINK.REGISTER}
                    className="login-wrap btn btn-outline-danger"
                  >
                    Đăng kí
                  </Link>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Đăng nhập</h3>
                  </div>
                  {/* <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a
                        href="#"
                        className="social-icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook" />
                      </a>
                      <a
                        href="#"
                        className="social-icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter" />
                      </a>
                    </p>
                  </div> */}
                </div>
                <form
                  action="#"
                  className="signin-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control border-1"
                      placeholder="Mật khẩu"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                    >
                      {isLoading ? (
                        <>
                          <div
                            className="spinner-border spinner-border-sm text-primary"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </>
                      ) : (
                        "Đăng nhập"
                      )}
                    </button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50 text-md-right">
                      <a href="#">Quên mật khẩu ?</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
