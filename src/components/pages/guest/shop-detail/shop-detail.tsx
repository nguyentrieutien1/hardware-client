"use client";
import React, { useEffect, useState } from "react";
import { useGetProductDetail, useIsUserLogined } from "~/queries";
import { useParams } from "next/navigation";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "~/lib/helpers";
import { toastConfig } from "~/lib";
import Spinner from "~/components/spinner/spinner";
import Tippy from "@tippyjs/react";
export default function ShopDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data: product, isLoading } = useGetProductDetail({ id });
  const [productData, setProductData] = useState<any>({});
  const onAddToCart = async () => {
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
    toastConfig(`Bạn đã thêm ${name} vào giỏ hàng thành công !`, {
      status: "success",
    });
  };
  useEffect(() => {
    if (product?.data) {
      setProductData({ ...product?.data });
    }
  }, [product?.data]);
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
                    productData?.images?.length > 0
                      ? productData?.images[0].url
                      : ""
                  }
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="product__details__pic__slider owl-carousel">
                {productData?.images?.map((img) => (
                  <Tippy
                    allowHTML={true}
                    content={
                      <img
                        style={{ objectFit: "contain", width: '100%', height: '100%' }}
                        src={img?.url}
                        alt="5"
                      />
                    }
                  >
                    <img
                      className="m-2"
                      width={50}
                      height={50}
                      style={{ objectFit: "cover" }}
                      src={img?.url}
                      alt="5"
                    />
                  </Tippy>
                ))}
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
              <div className="product__details__quantity align-items-center">
                <div className="quantity d-flex align-items-center">
                  <span>
                    Số lượng: </span>
                  <div className="pro-qty  p-2 " >
                    <input
                      type="number"

                      className="bg-transparent"
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
                <a
                  onClick={() => onAddToCart()}
                  className="primary-btn text-white cursor-pointer"
                >

                  Thêm vào giỏ hàng
                </a>
              </div>

              <ul>
                <li>
                  <b>Thời gian vận chuyển</b>{"  "}
                  <span>
                    khoảng 01 ngày. <samp>Free pickup today</samp>
                  </span>
                </li>
                <li>
                  <b>Nặng</b> <span>0.5 kg</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <p
                    data-toggle="tab"
                  >
                    Thông tin
                  </p>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div className="product__details__tab__desc">
                    <h6>Thông tin về sản phẩm</h6>
                    <p>
                      {productData?.description}
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
