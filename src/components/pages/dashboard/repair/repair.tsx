"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { REPAIR_MESSAGE, REPAIR_STATUS } from "~/lib/constants";
import { formattedDate } from "~/lib/helpers";
import { useGetOrders } from "~/queries/order/get-orders-query";
import Tippy from "@tippyjs/react";
import Spinner from "~/components/spinner/spinner";
import PaginationPage from "../../guest/pagination/pagination";
import { AppModal } from "~/components/modal/modal";
import { useGetAccounts } from "~/queries/account/get-accounts.query";
import { useCreateRepairMutation } from "~/mutations/repair/create-repair-mutation";
import { toastConfig } from "~/lib";
import { useGetRepairs } from "~/queries/repair/get-repairs-query";
import { useUpdateRepairMutation } from "~/mutations/repair/update-repair.mutation";
export default function RepairPage() {
  const [active, setActive] = useState(1);
  const [repair, setRepair] = useState({
    accountId: null,
    fullName: "",
    nameRepair: "",
    phone: "",
    address: "",
    note: "",
    expirationDate: "",
  });
  const step = 8;
  const [show, setShow] = useState(false);
  const [repairs, setRepairs] = useState([]);

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [repairId, setRepairId] = useState();
  const { mutateAsync, isLoading } = useUpdateRepairMutation();
  const { mutateAsync: createRepair, isLoading: isLoadingCreateRepair } =
    useCreateRepairMutation();
  const { data: repairData } = useGetRepairs();
  const handleAcceptOrder = (orderId: any, statusId: any) => {
    mutateAsync({ id: orderId, data: { statusId } });
  };
  const { data } = useGetAccounts({ roleId: +2 });
  const employee = data?.data;

  const handleJump = (number) => {
    setActive(number);
  };
  useEffect(() => {
    if (repairData?.data) {
      setRepairs([...repairData?.data]);
    }
  }, [repairData?.data, repairData?.data?.length]);
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRepair((prev) => {
      return {
        ...prev,
        [name]: name === "accountId" ? +value : value,
      };
    });
  };
  const setInitRepair = () => {
    setRepair({
      accountId: null,
      fullName: "",
      nameRepair: "",
      phone: "",
      address: "",
      note: "",
      expirationDate: "",
    });
  };
  const handleCreateRepair = () => {
    for (const key in repair) {
      if (!repair[key] || !repair) {
        toastConfig(`Các trường phải đảm bảo không được trống.`, {
          status: "warning",
        });
        return;
      }
    }
    if (!isUpdate) {
      createRepair(repair)
        .then((res) => {
          if (res?.status === 201) {
            toastConfig("Tạo sản phẩm sửa chửa thành công !", {
              status: "success",
            });
            setShow(false);
            setInitRepair();
          }
        })
        .catch(() => {
          toastConfig("Cửa hàng đang bận, không thể thao tác ngay lúc này !", {
            status: "error",
          });
        });
    } else {
      mutateAsync({ id: repairId, data: repair }).then(() => {
        setShow(false);
        setIsUpdate(false);
        setInitRepair();
        toastConfig("Cập nhật sản phẩm thành công !", { status: "success" });
      });
    }
  };
  const calculateRemainingDays = (date) => {
    const targetDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return remainingDays;
  };
  return (
    <div className="content-wrapper">
      {show && (
        <AppModal
          size="lg"
          title={
            !isUpdate ? "Thêm sản phẩm sửa chửa" : "Cập nhật sản phẩm sửa chửa"
          }
          onConfirm={() => handleCreateRepair()}
          closeModal={() => {
            setShow(false);
            setInitRepair();
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
                            name="nameRepair"
                            onChange={handleChange}
                            value={repair.nameRepair}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail3">
                            Tên khách hàng
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            id="exampleInputEmail3"
                            placeholder="Số lượng tên khách hàng"
                            onChange={handleChange}
                            value={repair.fullName}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="exampleInputEmail3">Địa chỉ</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            id="exampleInputEmail3"
                            placeholder="Nhập địa chỉ khách hàng"
                            onChange={handleChange}
                            value={repair.address}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail3">
                            Số điện thoại
                          </label>
                          <input
                            type="number"
                            name="phone"
                            className="form-control"
                            id="exampleInputEmail3"
                            placeholder="Nhập số điện thoại"
                            onChange={handleChange}
                            value={repair.phone}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword4">
                            Thời gian bảo hành
                          </label>
                          <input
                            type="date"
                            name="expirationDate"
                            className="form-control"
                            id="exampleInputPassword4"
                            placeholder="Giá"
                            onChange={handleChange}
                            value={repair.expirationDate}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword5">
                            Người làm việc
                          </label>
                          <div className="mb-3">
                            <select
                              className="form-select form-group form-select-sm p-2"
                              name="accountId"
                              id="exampleInputPassword5"
                              onChange={handleChange}
                            >
                              <option>chọn danh mục</option>
                              {employee?.map((empl) => {
                                return (
                                  <option
                                    selected={empl?.id == repair?.accountId}
                                    value={empl?.id}
                                  >
                                    {empl?.fullName}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword4">Ghi chú</label>
                          <textarea
                            rows={5}
                            className="form-control"
                            id="exampleFormControlTextarea5"
                            name="note"
                            onChange={handleChange}
                            value={repair.note}
                          ></textarea>
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
      <Spinner isLoading={isLoading || isLoadingCreateRepair} />
      <div className="row">
        <div className="col-3 mb-3">
          <div className="d-grid gap-2">
            <button
              onClick={() => setShow(true)}
              type="button"
              className="btn btn-success p-2"
            >
              + Thêm sản phẩm sửa chửa
            </button>
          </div>
        </div>
      </div>
      {repairs.length > 0 ? (
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Danh sách đặt hàng</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> Tên hàng </th>
                      <th> Mã đặt hàng</th>
                      <th>Khách hàng</th>
                      <th>Người sửa</th>
                      <th> Thời gian bảo hành</th>
                      <th> Trạng thái</th>
                      <th>Số điện thoại</th>
                    </tr>
                  </thead>
                  <tbody>
                    {repairs
                      ?.slice(step * active - step, step * active)
                      .map((order) => {
                        return (
                          <tr className="cursor-pointer">
                            <td>{order?.nameRepair?.slice(0, 10)}...</td>
                            <td> {order?.orderCode}</td>
                            <td>{order?.fullName}</td>
                            <td>{order?.worker?.fullName}</td>
                            <td>
                              {calculateRemainingDays(order?.expirationDate) <=
                              0 ? (
                                <label
                                  style={{ cursor: "pointer" }}
                                  className={`cursor-pointer badge badge-gradient-danger`}
                                >
                                  Đã hết hạn
                                </label>
                              ) : calculateRemainingDays(order?.expirationDate) <
                              7 ? (
                                <label
                                  style={{ cursor: "pointer" }}
                                  className={`cursor-pointer badge badge-gradient-warning`}
                                >
                                  { `Còn ${calculateRemainingDays(
                                  order?.expirationDate
                                )} ngày`}
                                </label>
                              ): (
                                `Còn ${calculateRemainingDays(
                                  order?.expirationDate
                                )} ngày`
                              )}
                            </td>
                            <td>
                              <Tippy
                                trigger="click"
                                placement="right-start"
                                theme="light"
                                interactive={true}
                                content={
                                  order?.status?.name !==
                                  REPAIR_STATUS.CANCELED ? (
                                    <div className="d-flex flex-column">
                                      {order?.status?.name ===
                                      REPAIR_STATUS.PENDING ? (
                                        <div
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            handleAcceptOrder(order?.id, 7)
                                          }
                                          className="cursor-pointer  badge badge-gradient-success text-center cursor-pointer"
                                        >
                                          Phê duyệt
                                        </div>
                                      ) : order?.status?.name ===
                                        REPAIR_STATUS.ACCEPTED ? (
                                        <div
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            handleAcceptOrder(order?.id, 8)
                                          }
                                          className="cursor-pointer  badge badge-gradient-success text-center cursor-pointer"
                                        >
                                          Hoàn thành
                                        </div>
                                      ) : (
                                        <div
                                          style={{ cursor: "pointer" }}
                                          onClick={() =>
                                            handleAcceptOrder(order?.id, 1)
                                          }
                                          className="cursor-pointer badge badge-gradient-info text-center cursor-pointer"
                                        >
                                          Thu hồi phê duyệt
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <div
                                      style={{ cursor: "pointer" }}
                                      onClick={() =>
                                        handleAcceptOrder(order?.id, 1)
                                      }
                                      className="cursor-pointer badge badge-gradient-danger text-center cursor-pointer"
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
                                  style={{ cursor: "pointer" }}
                                  className={`cursor-pointer badge badge-gradient-${
                                    order?.status?.name ===
                                    REPAIR_STATUS.PENDING
                                      ? "danger"
                                      : order?.status?.name ===
                                        REPAIR_STATUS.ACCEPTED
                                      ? "warning"
                                      : order?.status?.name ===
                                        REPAIR_STATUS.REJECT
                                      ? "primary"
                                      : "success"
                                  }`}
                                >
                                  <div
                                    className="cursor-pointer z-1"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {order?.status?.name ===
                                    REPAIR_STATUS.PENDING
                                      ? REPAIR_MESSAGE.PENDING
                                      : order?.status?.name ===
                                        REPAIR_STATUS.ACCEPTED
                                      ? REPAIR_MESSAGE.ACCEPTED
                                      : REPAIR_MESSAGE.COMPLETED}
                                  </div>
                                </label>
                              </Tippy>
                            </td>
                            <td>{order?.phone}</td>
                            <td>
                              <button
                                onClick={() => {
                                  setIsUpdate(true);
                                  setShow(true);
                                  setRepairId(order?.id);
                                  setRepair({
                                    accountId: order?.accountId,
                                    fullName: order?.fullName,
                                    nameRepair: order?.nameRepair,
                                    phone: order?.phone,
                                    address: order?.address,
                                    note: order?.note,
                                    expirationDate: order?.expirationDate,
                                  });
                                }}
                                type="button"
                                className="btn btn-success btn-sm m-lg-1"
                              >
                                Cập nhật
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                <div className="d-flex justify-content-end mt-4">
                  {repairs.length > 0 && (
                    <PaginationPage
                      active={active}
                      handleJump={handleJump}
                      length={repairs.length}
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
