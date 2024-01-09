import Tippy from "@tippyjs/react";
import Link from "next/link";
import { title } from "process";
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
};
export default function Product(props: ProductProps) {
  const { id, images, name, price, description } = props.product;
  const { data: res } = useIsUserLogined();
  const { mutateAsync } = useAddToCartMutation();
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
    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat cursor-pointer">
      <div className="featured__item">
        <div className="featured__item__pic set-bg">
          <Link href={`${LINK.SHOP_DETAIL}/${id}`}>
            <img
              className="rounded-3"
              src={images.length > 0 && images[0]?.url}
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
        <div className="featured__item__text">
          <h6>
            <a>{title}</a>
          </h6>
          <h5>{currencyFormatterConfig(price)}</h5>
        </div>
      </div>
    </div>
  );
}
