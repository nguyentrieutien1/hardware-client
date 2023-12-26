import React from "react";
import { toastConfig } from "~/lib";
import { useAddToCartMutation } from "~/mutations";
import { useIsUserLogined } from "~/queries";
import { IProduct } from "~/types";
type ProductProps = {
  product: IProduct;
};
export default function Product(props: ProductProps) {
  const { description, id, images, name, price } = props.product;
  const { data: res } = useIsUserLogined();
  const { mutateAsync } = useAddToCartMutation();
  const onAddToCart = async () => {
    mutateAsync({ productId: id, quantity: 1, accountId: res.data.id }).then(() => {
      toastConfig(`Bạn đã thêm ${name} vào giỏ hàng thành công !`, {status: 'success'})
    }).catch(() => {
      toastConfig(`Bạn đã thêm ${name} vào giỏ hàng thất bại, quay trở lại sau 30 phút nữa nhé !`, {status: 'info'})
    })
  };
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
        <div className="product-item">
          <img
            src={images.length > 0 ? images[0].url : "images/product-1.png"}
            className="img-fluid product-thumbnail"
          />
          <h3 className="product-title">{name}</h3>
          <strong className="product-price">{`$ ${price}`}</strong>
          <span onClick={onAddToCart} className="icon-cross">
            <img src="images/cross.svg" className="img-fluid" />
          </span>
        </div>
      </div>
    </>
  );
}
