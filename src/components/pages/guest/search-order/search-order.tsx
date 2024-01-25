import React from "react";
import { AppModal } from "~/components/modal/modal";
interface SearchOrder {
  setShow: any;
  show: any;
}
export default function SearchOrder(props: SearchOrder) {
  const { setShow, show } = props;
  return (
    <AppModal
      title={"Tra cứu thông tin đơn hàng"}
      onConfirm={() => {}}
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
