import React from "react";
import { CiFacebook, CiInstagram, CiLaptop, CiTwitter } from "react-icons/ci";
import Icon from "~/components/icon/icon";
import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Footer() {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
        <div className="footer__about col-12 d-flex justify-content-center" >
              <ul className=" text-center">
                <li>Địa chỉ: Thăng Bình, Quảng Nam</li>
                <li>Phone: +84 983787454</li>
                <li>Email:vanhao.0112@gmail.com</li>
              </ul>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright  justify-content-center d-flex">
              <div className="footer__copyright__text">
                <p className="">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with
                  <i className="fa fa-heart" aria-hidden="true" /> by Trieu Tien
                  Nguyen
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
              <div className="footer__copyright__payment">
                <img src="img/payment-item.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
