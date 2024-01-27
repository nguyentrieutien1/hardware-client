import React, { useState } from "react";
import { AppModal } from "~/components/modal/modal";
import { toastConfig } from "~/lib";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
import { useSearchOrderMutation } from "~/mutations/order/get-search-order-mutation";
interface SearchOrder {
  setShow: any;
  show: any;
}
export default function SearchOrder(props: SearchOrder) {
  const { setShow, show } = props;
  const [orderCode, setOrderCode] = useState("");
  const { mutateAsync } = useSearchOrderMutation();
  const [info, setInfo] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  const calculateRemainingDays = (date) => {
    const targetDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return remainingDays;
  };
  const handleSearchOrder = () => {
    mutateAsync({ orderCode }).then((res) => {
      if (![1, 7, 8].includes(res?.data?.status.id)) {
        alert("Không tìm thấy đơn hàng");
      } else {
        setInfo(res.data);
        setShowModal(true);
      }
    });
  };
  console.log(info);
  
  return (
    <>
      <AppModal
        title={"Tra cứu thông tin đơn hàng"}
        onConfirm={() => handleSearchOrder()}
        closeModal={() => {
          setShow(false);
          setOrderCode("");
        }}
        modalIsOpen={show}
        content={
          <div className="col-12">
            <div className="">
              <div className="card-body">
                <div className="forms-sample">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">Mã đơn hàng</label>
                        <input
                          // onChange={onChangeCategories}
                          type="text"
                          className="form-control"
                          id="exampleInputName1"
                          placeholder="Mã đơn hàng"
                          name="name"
                          onChange={(e) => setOrderCode(e.target.value)}
                          // value={category?.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showModal && (
              <AppModal
                title={"Thông tin đơn hàng"}
                onConfirm={() => setShowModal(false)}
                size="lg"
                closeModal={() => {
                  setShowModal(false);
                }}
                modalIsOpen={show}
                content={
                  <div className="col-12">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Tên đơn hàng</th>
                            <th scope="col">Trạng thái</th>
                            {info?.expirationDate && (
                              <th scope="col">Ngày hết hạn</th>
                            )}
                            <th scope="col">Giá tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td scope="row">
                              {info?.nameRepair || info?.product?.name}
                            </td>
                            <td>
                              {info?.status?.id === 1
                                ? "Đang đợi phê duyệt"
                                : info?.status?.id === 7 && info?.nameRepair
                                ? "Đơn hàng đang sửa chữa"
                                : info?.status?.id === 7 && info?.product?.name
                                ? "Đơn hàng đang vận chuyển"
                                : info?.status?.id === 8
                                ? " Đơn hàng đã hoàn thành"
                                : "Không tìm thấy đơn hàng "}
                            </td>
                            <td>
                              {calculateRemainingDays(info?.expirationDate) <= 0
                                ? "Đã hết hạn"
                                : `Còn ${
                                    calculateRemainingDays(
                                      info?.expirationDate
                                    )
                                  } ngày`}
                            </td>
                            <td>
                              {info?.price
                                ? currencyFormatterConfig(info?.price)
                                : currencyFormatterConfig(
                                    info?.quantity * info?.product?.price
                                  )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                }
              />
            )}
          </div>
        }
      />
    </>
  );
}
