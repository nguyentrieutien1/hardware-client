"use client";
import React, { useState } from "react";
import Loading from "~/components/loading/loading";
import { AppModal } from "~/components/modal/modal";
import { CURRENCY } from "~/lib/constants";
import { useDeleteCartMutation, useUpdateToCartMutation } from "~/mutations";
import { useIsUserLogined } from "~/queries";
import Modal from "react-bootstrap/Modal";
import Spinner from "~/components/spinner/spinner";
import Button from "react-bootstrap/esm/Button";
export default function CartPage() {
  const [show, setShow] = useState<boolean>(false);
  const { data: res, isLoading } = useIsUserLogined();
  const cart = res?.data?.cart;
  const { mutate: update, isLoading: isLoadingUpdate } =
    useUpdateToCartMutation();
  const { mutateAsync: del, isLoading: isLoadingDelelete } =
    useDeleteCartMutation();
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
  var groupedProducts = cart?.reduce(function (acc, curr) {
    var id = curr.product.id;
    if (!acc[id]) {
      acc[id] = [];
    }
    acc[id].push(curr);
    return acc;
  }, {});
  const keys = Object.keys(groupedProducts);

  return (
    <div>
      <Spinner isLoading={isLoadingDelelete || isLoadingUpdate} />
      {show && (
        <AppModal
          modalIsOpen={show}
          closeModal={() => setShow(false)}
          onConfirm={() => onDeleteProduct()}
          title={`Xóa sản phẩm`}
          content={`Bạn có chắc chắn muốn xóa sản phẩm này không ?`}
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
      <div className="untree_co-section before-footer-section">
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
                      {keys.map((key) => {
                        const products = groupedProducts[key];
                        if (products.length > 0) {
                          const { id, quantity } = products[0];
                          const { price, name } = products[0].product;
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
                                      placeholder=""
                                      aria-label="Example text with button addon"
                                      aria-describedby="button-addon1"
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
                        }
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
                          VND
                        </strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button className="btn btn-black btn-lg py-3 btn-block">
                          Proceed To Checkout
                        </button>
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
