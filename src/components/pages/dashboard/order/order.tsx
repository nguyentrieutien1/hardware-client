"use client";
import React from "react";
import { ORDER_STATUS } from "~/lib/constants";
import { formattedDate } from "~/lib/helpers";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import { useGetOrders } from "~/queries/order/get-orders-query";
import Tippy from "@tippyjs/react";
export default function OrderPage() {
  const { data: res } = useGetOrders();

  return (
    <div className="row content-wrapper">
      <div className="col-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Danh sách đặt hàng</h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th> Tên hàng </th>
                    <th> Ngày đặt </th>
                    <th> Người đặt</th>
                    <th> Số lượng</th>
                    <th> Trạng thái đặt hàng</th>
                    <th> Giá</th>
                    <th> Tổng số tiền </th>
                  </tr>
                </thead>
                <tbody>
                  {res?.data?.map((order) => {
                    return (
                      <tr className="cursor-pointer">
                        <td>{order?.cart?.product?.name}</td>
                        <td> {formattedDate(order?.createdAt)}</td>
                        <td>{order?.account?.fullName}</td>
                        <td> {order?.cart?.quantity}</td>
                        <td>
                          <Tippy
                            trigger="click"
                            placement="right-start"
                            theme="light"
                            interactive={true}
                            content={
                              <div className="d-flex flex-column">
                                <div
                                  onClick={() => alert(123)}
                                  className="p-1 badge badge-gradient-success text-center cursor-pointer"
                                >
                                  Phê duyệt
                                </div>
                                <div
                                  onClick={() => alert(123)}
                                  className="p-1 badge badge-gradient-danger text-center cursor-pointer mt-2"
                                >
                                  Từ chối
                                </div>
                              </div>
                            }
                            zIndex={2}
                            allowHTML={true}
                            arrow={false}
                          >
                            <label
                              className={`cursor-pointer badge badge-gradient-${
                                order?.status?.name === ORDER_STATUS.PENDING
                                  ? "success"
                                  :  order?.status?.name === ORDER_STATUS.CANCELED ? 'danger': 'warning'
                              }`}
                            >
                              {order?.status?.name === ORDER_STATUS.PENDING
                                ? "Đợi phê duyệt"
                                :   order?.status?.name === ORDER_STATUS.CANCELED ? 'Đã hủy' : 'Đã phê duyệt'}
                            </label>
                          </Tippy>
                        </td>
                        <td>
                          {currencyFormatterConfig(order?.cart?.product?.price)}
                        </td>
                        <td>
                          {currencyFormatterConfig(
                            order?.cart?.product?.price * order?.cart?.quantity
                          )}
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
    </div>
  );
}
