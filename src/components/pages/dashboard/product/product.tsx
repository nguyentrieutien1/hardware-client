"use client";
import React, { useState } from "react";
import { AppModal } from "~/components/modal/modal";
import { CURRENCY } from "~/lib/constants";
import { useGetProducts } from "~/queries";

export default function ProductPage() {
  const [show, setShow] = useState<boolean>(false);
  const { data: res } = useGetProducts();
  const products = res?.data;

  return (
    <>
      {show && (
        <AppModal
          title="Thêm sản phẩm"
          onConfirm={() => {}}
          closeModal={() => {}}
          modalIsOpen={show}
          content={
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <form className="forms-sample">
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputName1"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail3">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail3"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword4">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword4"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <div className="form-group">
                          <label>File upload</label>
                          <input
                            type="file"
                            name="img[]"
                            className="file-upload-default"
                          />
                          <div className="input-group col-xs-12">
                            <input
                              type="text"
                              className="form-control file-upload-info"
                              disabled={true}
                              placeholder="Upload Image"
                            />
                            <span className="input-group-append">
                              <button
                                className="file-upload-browse btn btn-gradient-primary"
                                type="button"
                              >
                                Upload
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputCity1">City</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputCity1"
                            placeholder="Location"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleTextarea1">Textarea</label>
                          <textarea
                            className="form-control"
                            id="exampleTextarea1"
                            rows={6}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-gradient-primary me-2"
                    >
                      Submit
                    </button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          }
        />
      )}

      <div className="row content-wrapper">
        <div className="col-12 ">
          <div className="row">
            <div className="col-2 mb-2">
              <div className="d-grid gap-2">
                <button
                  onClick={() => setShow(true)}
                  type="button"
                  className="btn btn-primary"
                >
                  + Thêm sản phẩm
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Danh sách sản phẩm</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> Ảnh </th>
                      <th> Tên </th>
                      <th> Mô tả </th>
                      <th> Số lượng trong kho </th>
                      <th> Giá </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((product) => {
                      console.log(product);

                      return (
                        <tr>
                          <td>
                            <img
                              src="images/faces/face1.jpg"
                              className="me-2"
                              alt="image"
                            />
                          </td>
                          <td>{product?.name}</td>
                          <td>
                            {product?.description}
                            {/* <label className="badge badge-gradient-success btn-rounded">
                              DONE
                            </label> */}
                          </td>
                          <td>{product?.stock} </td>
                          <td>
                            {product?.price} {CURRENCY}{" "}
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Xóa
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm m-lg-1"
                            >
                              Cập nhật
                            </button>
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
    </>
  );
}
