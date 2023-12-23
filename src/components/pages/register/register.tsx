import Link from "next/link";
import React from "react";
import "../login/login.css"
import { LINK } from "~/lib/constants/routes";
export default function RegisterPage() {
  return (
    <>
        <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Đăng kí</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Chào mừng bạn đăng kí</h2>
                  <Link href={LINK.LOGIN} className="btn btn-white btn-outline-white">
                    Đăng nhập
                  </Link>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Đăng kí</h3>
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
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                    >
                      Đăng kí
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
