"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { ORDER_MESSAGE, ORDER_STATUS } from "~/lib/constants";
import { formattedDate } from "~/lib/helpers";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import { useGetOrders } from "~/queries/order/get-orders-query";
import Tippy from "@tippyjs/react";
import { useUpdateOrderMutation } from "~/mutations/order/update-order-mutation";
import Spinner from "~/components/spinner/spinner";
import PaginationPage from "../../guest/pagination/pagination";
import { AppModal } from "~/components/modal/modal";
export default function RepairPage() {
  const [orders, setOrders] = useState([]);
  const [active, setActive] = useState(1);
  const step = 8;
  const { data: res, isLoading: isGetOrdersLoading } = useGetOrders();
  const [show, setShow] = useState(false)
  const { mutateAsync, isLoading } = useUpdateOrderMutation();
  const handleAcceptOrder = (orderId: any, statusId: any) => {
    mutateAsync({ id: orderId, data: { statusId } });
  };
  const handleJump = (number) => {
    setActive(number);
  };
  useEffect(() => {
    if (res?.data) {
      setOrders(res?.data);
    }
  }, [res?.data]);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value) {
      setOrders(
        [...res?.data].filter((order) => order?.status?.name === value)
      );
    } else {
      setOrders(res?.data);
    }
  };
  return (
    <div className="content-wrapper">
       {show && (
        <AppModal
          size="lg"
          title={'Thêm sản phẩm sửa chửa'}
          onConfirm={() => {}}
          closeModal={() => {
            setShow(false);
          }}
          modalIsOpen={show}
          content={
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <form className="forms-sample">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">
                            Tên sản phẩm
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Tên sản phẩm"
                            name="name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail3">
                            Số lượng sản phẩm
                          </label>
                          <input
                            type="number"
                            name="stock"
                            className="form-control"
                            id="exampleInputEmail3"
                            placeholder="Số lượng sản phẩm"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword4">Giá</label>
                          <input
                            type="number"
                            name="price"
                            className="form-control"
                            id="exampleInputPassword4"
                            placeholder="Giá"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword5">
                            Danh mục
                          </label>
                          <div className="mb-3">
                            <select
                              className="form-select form-group form-select-sm p-2"
                              name="categoriesId"
                              id="exampleInputPassword5"
                            >
                              <option>chọn danh mục</option>
                              {/* {categories.data?.map((cat) => {
                                return (
                                  <option
                                    selected={product?.categoriesId == cat?.id}
                                    value={cat?.id}
                                  >
                                    {cat?.name}
                                  </option>
                                );
                              })} */}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          }
        />
      )}
      <Spinner isLoading={isLoading || isGetOrdersLoading} />
      <div className="row">
        <div className="col-2 mb-3">
          <div className="d-grid gap-2">
            <button onClick={() => setShow(true)} type="button" className="btn btn-success p-2">
              + Thêm sản phẩm sửa chửa
            </button>
          </div>
        </div>
      </div>
      {orders.length > 0 ? (
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Danh sách đặt hàng</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> Tên hàng </th>
                      <th> Ngày tạo đơn </th>
                      <th>Tên khách hàng</th>
                      <th> Thời gian bảo hành</th>
                      <th> Trạng thái</th>
                      <th>Số điện thoại</th>
                      <th>Địa chỉ</th>
                   
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr className="cursor-pointer">
                          <td>{order?.product?.name}</td>
                          <td> {formattedDate(order?.createdAt)}</td>
                          <td>{order.fullName}</td>
                          <td> {order?.quantity}</td>
                          <td>
                            <Tippy
                              trigger="click"
                              placement="right-start"
                              theme="light"
                              interactive={true}
                              content={
                                order?.status?.name !==
                                ORDER_STATUS.CANCELED ? (
                                  <div className="d-flex flex-column">
                                    {order?.status?.name ===
                                    ORDER_STATUS.PENDING ? (
                                      <div
                                        onClick={() =>
                                          handleAcceptOrder(order?.id, 7)
                                        }
                                        className="badge badge-gradient-success text-center cursor-pointer"
                                      >
                                        {}
                                        Phê duyệt
                                      </div>
                                    ) : (
                                      <div
                                        onClick={() =>
                                          handleAcceptOrder(order?.id, 1)
                                        }
                                        className="badge badge-gradient-info text-center cursor-pointer"
                                      >
                                        Thu hồi phê duyệt
                                      </div>
                                    )}

                                    {order?.status?.name !==
                                      ORDER_STATUS.REJECT && (
                                      <div
                                        onClick={() =>
                                          handleAcceptOrder(order?.id, 2)
                                        }
                                        className="badge badge-gradient-danger text-center cursor-pointer mt-2"
                                      >
                                        Từ chối
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <div
                                    onClick={() =>
                                      handleAcceptOrder(order?.id, 1)
                                    }
                                    className="badge badge-gradient-danger text-center cursor-pointer"
                                  >
                                    Kích hoạt đơn hàng
                                  </div>
                                )
                              }
                              zIndex={2}
                              allowHTML={true}
                              arrow={false}
                            >
                              <label
                                className={`cursor-pointer badge badge-gradient-${
                                  order?.status?.name === ORDER_STATUS.PENDING
                                    ? "success"
                                    : order?.status?.name ===
                                      ORDER_STATUS.CANCELED
                                    ? "danger"
                                    : order?.status?.name ===
                                      ORDER_STATUS.REJECT
                                    ? "primary"
                                    : "warning"
                                }`}
                              >
                                {order?.status?.name === ORDER_STATUS.PENDING
                                  ? ORDER_MESSAGE.PENDING
                                  : order?.status?.name ===
                                    ORDER_STATUS.CANCELED
                                  ? ORDER_MESSAGE.CANCELED
                                  : order?.status?.name === ORDER_STATUS.REJECT
                                  ? ORDER_MESSAGE.REJECT
                                  : ORDER_MESSAGE.ACCEPTED}
                              </label>
                            </Tippy>
                          </td>
                          <td>
                            {currencyFormatterConfig(order?.product?.price)}
                          </td>
                          <td>
                            {currencyFormatterConfig(
                              order?.product?.price * order?.quantity
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="d-flex justify-content-end mt-4">
                  {orders.length > 0 && (
                    <PaginationPage
                      active={active}
                      handleJump={handleJump}
                      length={orders.length}
                      step={step}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-center">Hiện chưa có đơn hàng mà bạn muốn tìm.</h3>
      )}
    </div>
  );
}
