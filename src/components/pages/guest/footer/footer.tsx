import React from "react";
import { CiFacebook, CiInstagram, CiLaptop, CiTwitter } from "react-icons/ci";
import Icon from "~/components/icon/icon";
import MessengerCustomerChat from "react-messenger-customer-chat";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8"></div>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="mb-4 footer-logo-wrap">
              <a href="#" className="footer-logo">
                FASTFIX TN<span>.</span>
              </a>
            </div>
            <p className="mb-4">
              Chào mừng đến với cửa hàng chuyên mua bán và sửa chữa phần cứng!
              Chúng tôi cung cấp dịch vụ sửa chữa chuyên nghiệp và mua bán các
              linh kiện phần cứng chất lượng cao. Với đội ngũ kỹ thuật viên giàu
              kinh nghiệm và sự chăm sóc khách hàng tận tâm, chúng tôi cam kết
              mang lại cho bạn trải nghiệm tuyệt vời và giải pháp phù hợp cho
              nhu cầu công nghệ của bạn. Hãy liên hệ với chúng tôi để biết thêm
              thông tin và nhận tư vấn từ đội ngũ chuyên gia của chúng tôi.
            </p>
            <ul className="list-unstyled custom-social">
              <li>
                <a href="#">
                  <Icon IconComponent={CiFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon IconComponent={CiTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon IconComponent={CiInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon IconComponent={CiLaptop} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8  text-center">
            <div className="row links-wrap">
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Về chúng tôi</a>
                  </li>
                  <li>
                    <a href="#">Dịch vụ</a>
                  </li>
                  <li>
                    <a href="#">Bài viết</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Hỗ trợ</a>
                  </li>
                  <li>
                    <a href="#">Live chat</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Our team</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-3">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Nordic Chair</a>
                  </li>
                  <li>
                    <a href="#">Kruzo Aero</a>
                  </li>
                  <li>
                    <a href="#">Ergonomic Chair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright ©. All Rights Reserved. — Designed with love by
                <a href="https://untree.co">Trieu Tien Nguyen</a>
                {/* License information: https://untree.co/license/ */}
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto text-center">
                <li className="me-4">
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
