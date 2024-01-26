import React, { useState } from "react";
import { AppModal } from "~/components/modal/modal";
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
    mutateAsync({ orderCode }).then(() => {});
  };
  return (
    <AppModal
      title={"Tra cứu thông tin đơn hàng"}
      onConfirm={() => handleSearchOrder()}
      closeModal={() => {
        setShow(false);
      }}
      modalIsOpen={show}
      content={
        <div className="col-12">
          <div className="">
            <div className="card-body">
              <form className="forms-sample">
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
              </form>
            </div>
          </div>
        </div>
      }
    />
  );
}
