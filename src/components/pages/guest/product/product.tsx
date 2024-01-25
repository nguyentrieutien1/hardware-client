import Tippy from "@tippyjs/react";
import Link from "next/link";
import React from "react";
import { toastConfig } from "~/lib";
import { LINK } from "~/lib/constants";
import { toastErrorAuthen } from "~/lib/helpers";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import { useAddToCartMutation } from "~/mutations";
import { useIsUserLogined } from "~/queries";
import { IProduct } from "~/types";
type ProductProps = {
  product: IProduct;
  numberColumn: any
};
export default function Product(props: ProductProps) {
  const { id, images, name, price } = props.product;
  const {numberColumn} = props;
  // const onAddToCart = async () => {
  //   mutateAsync({ productId: id, quantity: 1, accountId: res?.data.id })
  //     .then(() => {
  //       toastConfig(`Bạn đã thêm ${name} vào giỏ hàng thành công !`, {
  //         status: "success",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toastErrorAuthen(err, `Để mua hàng, trước tiên bạn phải đăng nhập đã `);
  //     });
  // };
  return (
    <div className={`col-lg-${numberColumn} col-12 col-sm-6  col-md-4 col-lg-3  col-xl-2 cursor-pointer p-0 p-sm-2 mx-0`} style={{boxSizing: "border-box"}}>
      <div className="featured__item">
        <div className="featured__item__pic">
          <Link href={`${LINK.SHOP_DETAIL}/${id}`}>
            <img
              src={images.length > 0 ? images[0]?.url : ""}
              style={{ objectFit: "contain",}}
            />
          </Link>
          <ul className="featured__item__pic__hover z-n1">
            <Tippy
              theme="light"
              content={
                <p style={{ color: "white" }}>
                  Hiện tại chức năng chưa phát triển
                </p>
              }
              allowHTML={true}
            >
              <li>
                <a>
                  <i className="fa fa-heart" />
                </a>
              </li>
            </Tippy>
            <Tippy
              theme="light"
              content={
                <p style={{ color: "white" }}>
                  Hiện tại chức năng chưa phát triển
                </p>
              }
              allowHTML={true}
            >
              <li>
                <a>
                  <i className="fa fa-retweet" />
                </a>
              </li>
            </Tippy>
            <Link href={`${LINK.SHOP_DETAIL}/${id}`}>
              <li>
                <a>
                  <i className="fa fa-shopping-cart" />
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="featured__item__text p-3">
          <h6>
            <a>{name?.slice(0, 60)}...</a>
          </h6>
          <h5>{currencyFormatterConfig(price)}</h5>
        </div>
      </div>
    </div>
  );
}
