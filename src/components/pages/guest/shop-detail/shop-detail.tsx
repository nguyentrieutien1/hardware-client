"use client";
import React, { useState } from "react";
import { useGetProductDetail, useIsUserLogined } from "~/queries";
import { useParams } from "next/navigation";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import { useAddToCartMutation } from "~/mutations";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
  toastErrorAuthen,
} from "~/lib/helpers";
import { toastConfig } from "~/lib";
import Loading from "~/components/loading/loading";
import Spinner from "~/components/spinner/spinner";
export default function ShopDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data: product, isLoading } = useGetProductDetail({ id });
  const { mutateAsync } = useAddToCartMutation();
  const { data: res } = useIsUserLogined();
  const onAddToCart = async () => {
    if (res?.data?.id) {
      mutateAsync({ productId: +id, quantity, accountId: res?.data.id })
        .then(() => {
          toastConfig(`Bạn đã thêm ${name} vào giỏ hàng thành công !`, {
            status: "success",
          });
        })
        .catch((err) => {
          toastErrorAuthen(
            err,
            `Để mua hàng, trước tiên bạn phải đăng nhập đã `
          );
        });
    } else {
      const cart = getItemFromLocalStorage("cart") || [];
      const checkItemIsExist = cart.findIndex((item) => item?.productId == +id);
      console.log(checkItemIsExist);

      if (checkItemIsExist > -1) {
        cart[checkItemIsExist].quantity =
          cart[checkItemIsExist].quantity + quantity;
        console.log(cart[checkItemIsExist]);
      } else {
        cart.push({ productId: +id, quantity });
      }
      setItemToLocalStorage("cart", cart);
    }
    toastConfig(`Bạn đã thêm ${name} vào giỏ hàng thành công !`, {
      status: "success",
    });
  };
  return product ? (
    <section className="product-details spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="product__details__pic">
              <div className="product__details__pic__item">
                <img
                  className="product__details__pic__item--large"
                  alt="1"
                  src={
                    product?.data?.images?.length > 0
                      ? product?.data?.images[0].url
                      : ""
                  }
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="product__details__pic__slider owl-carousel">
                <img
                  data-imgbigurl="img/product/details/product-details-2.jpg"
                  alt="2"
                />
                <img
                  data-imgbigurl="img/product/details/product-details-3.jpg"
                  alt="3"
                />
                <img
                  data-imgbigurl="img/product/details/product-details-5.jpg"
                  alt="4"
                />
                <img
                  data-imgbigurl="img/product/details/product-details-4.jpg"
                  alt="5"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product__details__text">
              <h3>{product?.data?.name}</h3>
              <div className="product__details__rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star-half-o" />
                <span>(18 reviews)</span>
              </div>
              <div className="product__details__price">
                {currencyFormatterConfig(product?.data?.price)}
              </div>
              <p>{product?.data?.description}</p>
              <div className="product__details__quantity">
                <div className="quantity">
                  <div className="pro-qty">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        if (+e.target.value < 1) {
                          return;
                        }
                        setQuantity(+e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <a
                onClick={() => onAddToCart()}
                className="primary-btn text-white cursor-pointer"
              >
                ADD TO CARD
              </a>
              <a className="heart-icon">
                <span className="icon_heart_alt" />
              </a>
              <ul>
                <li>
                  <b>Availability</b> <span>In Stock</span>
                </li>
                <li>
                  <b>Shipping</b>{" "}
                  <span>
                    01 day shipping. <samp>Free pickup today</samp>
                  </span>
                </li>
                <li>
                  <b>Weight</b> <span>0.5 kg</span>
                </li>
                <li>
                  <b>Share on</b>
                  <div className="share">
                    <a>
                      <i className="fa fa-facebook" />
                    </a>
                    <a>
                      <i className="fa fa-twitter" />
                    </a>
                    <a>
                      <i className="fa fa-instagram" />
                    </a>
                    <a>
                      <i className="fa fa-pinterest" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                    aria-selected="false"
                  >
                    Information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                    aria-selected="false"
                  >
                    Reviews <span>(1)</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Pellentesque in ipsum id orci porta dapibus.
                      Proin eget tortor risus. Vivamus suscipit tortor eget
                      felis porttitor volutpat. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Donec rutrum congue
                      leo eget malesuada. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor at sem. Praesent sapien massa,
                      convallis a pellentesque nec, egestas non nisi. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Proin
                      eget tortor risus.
                    </p>
                    <p>
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Cras ultricies ligula sed magna
                      dictum porta. Cras ultricies ligula sed magna dictum
                      porta. Sed porttitor lectus nibh. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam
                      sit amet quam vehicula elementum sed sit amet dui. Sed
                      porttitor lectus nibh. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Proin eget tortor
                      risus.
                    </p>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-2" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Pellentesque in ipsum id orci porta dapibus.
                      Proin eget tortor risus. Vivamus suscipit tortor eget
                      felis porttitor volutpat. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Donec rutrum congue
                      leo eget malesuada. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor at sem. Praesent sapien massa,
                      convallis a pellentesque nec, egestas non nisi. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Proin
                      eget tortor risus.
                    </p>
                    <p>
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Cras ultricies ligula sed magna
                      dictum porta. Cras ultricies ligula sed magna dictum
                      porta. Sed porttitor lectus nibh. Mauris blandit aliquet
                      elit, eget tincidunt nibh pulvinar a.
                    </p>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-3" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Products Infomation</h6>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui. Pellentesque in ipsum id orci porta dapibus.
                      Proin eget tortor risus. Vivamus suscipit tortor eget
                      felis porttitor volutpat. Vestibulum ac diam sit amet quam
                      vehicula elementum sed sit amet dui. Donec rutrum congue
                      leo eget malesuada. Vivamus suscipit tortor eget felis
                      porttitor volutpat. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor at sem. Praesent sapien massa,
                      convallis a pellentesque nec, egestas non nisi. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia Curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Proin
                      eget tortor risus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Spinner isLoading={isLoading} />
  );
}
