import React, { useState } from "react";
import { AppModal } from "~/components/modal/modal";
import { toastConfig } from "~/lib";
import { useSearchOrderMutation } from "~/mutations/order/get-search-order-mutation";
interface SearchOrder {
  setShow: any;
  show: any;
}
export default function SearchOrder(props: SearchOrder) {
  const { setShow, show } = props;
  const [orderCode, setOrderCode] = useState("");
  const { mutateAsync } = useSearchOrderMutation();
  const handleSearchOrder = () => {
    mutateAsync({ orderCode }).then((res) => {
      if (res.data) {
        if (res?.data?.status?.id === 1) {
          toastConfig("Đơn hàng đang trong thời gian phê duyệt", {
            status: "info",
          });
        } else if (res?.data?.status?.id === 8) {
          toastConfig("Đơn hàng đã sửa xong", { status: "info" });
        } else {
          toastConfig("Đơn hàng đang trong quá trình", { status: "info" });
        }
      } else {
        toastConfig("Không tìm thấy đơn hàng !", { status: "error" });
      }
    });
  };
  return (
    <AppModal
      title={"Tra cứu thông tin đơn hàng"}
      onConfirm={() => handleSearchOrder()}
      closeModal={() => {
        setShow(false);
        setOrderCode("")
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
        </div>
      }
    />
  );
}
