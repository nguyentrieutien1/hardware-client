import Tippy from "@tippyjs/react";
import React from "react";
import Spinner from "~/components/spinner/spinner";
import { toastConfig } from "~/lib";
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
  const { mutateAsync, isLoading} = useAddToCartMutation();
  const onAddToCart = async () => {
    mutateAsync({ productId: id, quantity: 1, accountId: res?.data.id })
      .then(() => {
        toastConfig(`Bạn đã thêm ${name} vào giỏ hàng thành công !`, {
          status: "success",
        });
      })
      .catch((err) => {
        toastErrorAuthen(err, `Để mua hàng, trước tiên bạn phải đăng nhập đã `);
      });
  };
  return (
    <>
    {isLoading && <Spinner isLoading={isLoading} />}
      <Tippy
        allowHTML={true}
        content={<p className="product-title text-center">{description}</p>}
        followCursor={true}
        arrow={true}
        animation={'scale'}
        placement="right"
      >
        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0 mt-5 text-break">
          <div className="product-item">
            <img
              src={images.length > 0 ? images[0].url : "images/product-1.png"}
              className="img-fluid product-thumbnail"
            />
            <h3 className="product-title">{name}</h3>

            <p className="product-title">{`${description.slice(0, 20)}...`}</p>
            <strong className="product-price">
              {currencyFormatterConfig(price)}
            </strong>
            <span onClick={onAddToCart} className="icon-cross">
              <img src="images/cross.svg" className="img-fluid" />
            </span>
          </div>
        </div>
      </Tippy>
    </>
  );
}
