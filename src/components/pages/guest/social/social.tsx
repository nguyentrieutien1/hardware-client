import React from "react";

export default function Social() {
  return (
    <div className="header__top__right__social">
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100063797755796"
      >
        <i className="fa fa-facebook primary-color " />
      </a>
      <a target="_blank" href="https://www.tiktok.com/@thunguyencomputer">
        <img
          style={{ width: "30px", height: "30px", objectFit: "contain" }}
          src="https://1000logos.net/wp-content/uploads/2019/06/green-tiktok-logo.png"
        />
      </a>
      <a target="_blank" href="https://www.youtube.com/@THUNGUYENCOMPUTER">
        <i className="fa fa-youtube primary-color" />
      </a>
    </div>
  );
}
