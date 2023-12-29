"use client";
import React, { useState } from "react";
import "./order.css";
import Button from "react-bootstrap/esm/Button";
import { useIsUserLogined } from "~/queries";
import { formattedDate, toastErrorAuthen } from "~/lib/helpers";
import { CURRENCY, MESSAGE_ORDER, MESSAGE_STATUS } from "~/lib/constants";
import { useUpdateOrderMutation } from "~/mutations/order/update-order-mutation";
import { AppModal } from "../../../modal/modal";
import { toastConfig } from "~/lib";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
export default function Order() {
  const [orderId, setOrderId] = useState<number>();
  const [show, setShow] = useState<boolean>(false);
  const { data: res } = useIsUserLogined();
  const orders = res?.data?.order;
  const { mutateAsync } = useUpdateOrderMutation();

  const handleCancelOrder = (id: number) => {
    mutateAsync({ id })
      .then(() => {
        toastConfig("Hủy đơn hàng thành công", { status: "success" });
        setShow(false);
      })
      .catch((err) => {
        toastErrorAuthen(err, "Hủy đơn hàng");
      });
  };
  return (
    <>
      {show && (
        <AppModal
          modalIsOpen={show}
          closeModal={() => setShow(false)}
          onConfirm={() => handleCancelOrder(orderId as number)}
          title="Xóa đơn đặt hàng"
          content={<p>Bạn có muốn xóa đơn đặt hàng này không ?</p>}
        />
      )}
      <section className="ftco-section">
        {orders?.length > 0 ? (
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="table-wrap">
                  <table className="table table-responsive-xl">
                    <thead>
                      <tr>
                        <th>Số thứ tự</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Ngày đặt hàng</th>
                        <th>Trạng thái đặt hàng</th>
                        <th>Hủy đặt hàng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => {
                        return (
                          <tr key={index} className="alert" role="alert">
                            <td>{index + 1}</td>
                            <td className="d-flex align-items-center">
                              <div
                                className="img"
                                style={{
                                  backgroundImage: "url(images/person_1.jpg)",
                                }}
                              />
                              <div className="pl-3  mx-3">
                                <span>{order?.account?.fullName}</span>
                              </div>
                            </td>
                            <td>{order?.cart?.quantity}</td>
                            <td>{
                              currencyFormatterConfig(order?.cart?.product?.price)}
                            </td>
                            <td>{formattedDate(order?.createdAt)}</td>
                            <td className="status text-left">
                              <span
                                className={`${
                                  order?.status?.name ===
                                    MESSAGE_STATUS.PENDING && "bg-warning"
                                } text-white  px-3 py-1`}
                              >
                                {order?.status?.name ===
                                  MESSAGE_STATUS.PENDING &&
                                  MESSAGE_ORDER.PENDING}
                              </span>
                            </td>
                            <td>
                              <Button
                                onClick={() => {
                                  setShow(true);
                                  setOrderId(order?.id);
                                }}
                                className="btn-sm  float-start"
                              >
                                Hủy
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ): <h3 className="text-center">Không có đơn hàng nào được đặt ở đây</h3>}
      </section>
    </>
  );
}
