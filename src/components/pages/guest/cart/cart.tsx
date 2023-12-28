"use client";
import React, { useState } from "react";
import { AppModal } from "~/components/modal/modal";
import { CURRENCY, LINK } from "~/lib/constants";
import { useDeleteCartMutation, useUpdateToCartMutation } from "~/mutations";
import { useIsUserLogined } from "~/queries";
import Spinner from "~/components/spinner/spinner";
import Button from "react-bootstrap/esm/Button";
import { useCreateOrderMutation } from "~/mutations/order/create-order-mutation";
import { IOrder } from "~/types";
import { toastConfig } from "~/lib";
import "../order/order.css"
import { useRouter } from "next/navigation";
import { toastErrorAuthen } from "~/lib/helpers";
export default function CartPage() {
  const [show, setShow] = useState<boolean>(false);
  const { data: res } = useIsUserLogined();
  const cart = res?.data?.cart;
  const router = useRouter();
  const { mutate: update, isLoading: isLoadingUpdate } =
    useUpdateToCartMutation();
  const { mutateAsync: del, isLoading: isLoadingDelelete } =
    useDeleteCartMutation();
  const { mutateAsync: createOrder } = useCreateOrderMutation();
  const [productId, setProductId] = useState(undefined);
  const onUpdateQuantity = (id: number, { quantity }) => {
    if (isLoadingDelelete || isLoadingUpdate) {
      return;
    }
    if (quantity == 0) {
      setShow(true);
      setProductId(id);
    } else {
      update({ id, data: { quantity } });
    }
  };
  const onDeleteProduct = () => {
    if (isLoadingDelelete || isLoadingUpdate) {
      return;
    }
    del({ id: productId }).then(() => {
      setShow(false);
    });
  };
  const handleOrder = () => {
    const order: IOrder[] = cart.map((item) => {
      return {
        cartId: item.id,
        accountId: res?.data?.id,
      };
    });
    createOrder(order).then(() => {
      toastConfig("Đặt hàng thành công !", { status: "success" });
      router.push(LINK.ORDER)
    }).catch(err => {
      toastErrorAuthen(err, 'Đặt hàng thất bại, quay trở lại sau 5 phút nữa ')
    })
  };
  return (
    <div>
      <Spinner isLoading={isLoadingDelelete || isLoadingUpdate} />
      {show && (
        <AppModal
          modalIsOpen={show}
          closeModal={() => setShow(false)}
          onConfirm={() => onDeleteProduct()}
          title={`Xóa sản phẩm`}
          content={<p>Bạn có chắc chắn muốn xóa sản phẩm này không ?</p>}
        />
      )}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="">
                <h1>Đây là giỏ hàng của bạn.</h1>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-img-wrap">
                <img src="images/Hardware.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ftco-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            {cart?.length > 0 ? (
              <div className="col-md-12">
                <div className="site-blocks-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Ảnh</th>
                        <th className="product-name">Tên</th>
                        <th className="product-price">Giá</th>
                        <th className="product-quantity">Số tiền</th>
                        <th className="product-total">Tổng</th>
                        <th className="product-remove">Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => {
                        const { id, quantity, product } = item;
                        const { price, name } = product;
                        return (
                          <tr>
                            <td className="product-thumbnail">
                              <img
                                src="images/product-1.png"
                                alt="Image"
                                className="img-fluid"
                              />
                            </td>
                            <td className="product-name">
                              <h2 className="h5 text-black">{name}</h2>
                            </td>
                            <td>{`${price} ${CURRENCY}`}</td>
                            <td>
                              <div className=" mb-3 d-flex align-items-center justify-content-center">
                                <div className="input-group-prepend">
                                  <button
                                    className="btn btn-outline-black border-0 bg-transparent text-black "
                                    type="button"
                                    onClick={() =>
                                      onUpdateQuantity(id, {
                                        quantity: quantity - 1,
                                      })
                                    }
                                  >
                                    −
                                  </button>
                                </div>
                                <div className="w-25">
                                  <input
                                    type="text"
                                    className="form-control text-center "
                                    value={quantity}
                                  />
                                </div>
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-outline-black increase border-0 bg-transparent text-black"
                                    type="button"
                                    onClick={() =>
                                      onUpdateQuantity(id, {
                                        quantity: quantity + 1,
                                      })
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>
                              {quantity * price} {CURRENCY}
                            </td>
                            <td>
                              <Button
                                variant="primary"
                                onClick={() => {
                                  setProductId(id);
                                  setShow(true);
                                }}
                              >
                                Xóa
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <h3 className="text-center">
                Hiện tại giỏ hàng của bạn đang trống !
              </h3>
            )}
          </div>
          {cart?.length > 0 && (
            <div className="row">
              <div className="col-md-6">
                {/* <div className="row mb-5">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <button className="btn btn-black btn-sm btn-block">
                      Update Cart
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-outline-black btn-sm btn-block">
                      Continue Shopping
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label className="text-black h4" htmlFor="coupon">
                      Coupon
                    </label>
                    <p>Enter your coupon code if you have one.</p>
                  </div>
                  <div className="col-md-8 mb-3 mb-md-0">
                    <input
                      type="text"
                      className="form-control py-3"
                      id="coupon"
                      placeholder="Coupon Code"
                    />
                  </div>
                  <div className="col-md-4">
                    <button className="btn btn-black">Apply Coupon</button>
                  </div>
                </div> */}
              </div>
              <div className="col-md-6 pl-5">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-right border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">
                          Tổng tiền
                        </h3>
                      </div>
                    </div>

                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Tổng</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">
                          {cart?.length > 0 &&
                            cart?.reduce((acc, curr) => {
                              return (acc +=
                                curr?.product?.price * curr?.quantity);
                            }, 0)}
                          {` ${CURRENCY}`}
                        </strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <Button
                          className="btn btn-black btn-lg py-3 btn-block float-end
                        "
                          onClick={() => handleOrder()}
                        >
                          Đặt hàng
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
