import React from "react";
import "./login.css"
import Link from "next/link";
import { LINK } from "~/lib/constants/routes";
export default function LoginPage() {


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
                  <Link href={LINK.REGISTER} className="btn btn-white btn-outline-white">
                    Đăng kí
                  </Link>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Đăng nhập</h3>
                  </div>
                  <div className="w-100">
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
                  </div>
                </div>
                <form action="#" className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                    >
                      Đăng nhập
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