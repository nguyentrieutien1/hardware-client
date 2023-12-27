"use client";
import React from "react";
import "./order.css";
import Button from "react-bootstrap/esm/Button";
import { useIsUserLogined } from "~/queries";
import { formattedDate } from "~/lib/helpers";
import { CURRENCY } from "~/lib/constants";
import { useUpdateOrderMutation } from "~/mutations/order/update-order-mutation";
export default function Order() {
  const { data: res } = useIsUserLogined();
  const orders = res?.data?.order;
  const {mutateAsync} = useUpdateOrderMutation()

  const handleCancelOrder = (id: number) => {
    mutateAsync({id}).then(() =>{})
  } 
  return (
    // <div className="container mt-4 mb-4">
    //   <div className="row d-flex cart align-items-center justify-content-center">
    //     <div className="col-md-10">
    //       <div className="card">
    //         <div className="d-flex justify-content-center border-bottom">
    //           <div className="p-3">
    //             <div className="progresses">
    //               <div className="steps">
    //                 <span>1</span>{" "}
    //               </div>{" "}
    //               <span className="line"></span>
    //               <div className="steps">
    //                 <span>2</span>{" "}
    //               </div>{" "}
    //               <span className="line"></span>
    //               <div className="steps">
    //                 {" "}
    //                 <span className="font-weight-bold">3</span>{" "}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="row g-0">
    //           <div className="col-md-6 border-right p-5">
    //             <div className="text-center order-details">
    //               <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
    //                 {" "}
    //                 <span className="check1">
    //                   <i className="fa fa-check"></i>
    //                 </span>{" "}
    //                 <span className="font-weight-bold">Order Confirmed</span>{" "}
    //                 <small className="mt-2">
    //                   Your illustraion will go to you soon
    //                 </small>{" "}
    //                 <a href="#" className="text-decoration-none invoice-link">
    //                   View Invoice
    //                 </a>{" "}
    //               </div>{" "}
    //               <button className="btn btn-danger btn-block order-button">
    //                 Go to your Order
    //               </button>
    //             </div>
    //           </div>
    //           <div className="col-md-6 background-muted">
    //             <div className="p-3 border-bottom">
    //               <div className="d-flex justify-content-between align-items-center">
    //                 {" "}
    //                 <span>
    //                   <i className="fa fa-clock-o text-muted"></i> 3 days
    //                   delivery
    //                 </span>{" "}
    //                 <span>
    //                   <i className="fa fa-refresh text-muted"></i> 2 Max
    //                   Revisions
    //                 </span>{" "}
    //               </div>
    //               <div className="mt-3">
    //                 <h6 className="mb-0">Illustraion in Sketch or AI</h6>{" "}
    //                 <span className="d-block mb-0">
    //                   Includes: Sketch, PSD, PNG, SVG, AI{" "}
    //                 </span>{" "}
    //                 <small>Min: 1 illustraion</small>
    //                 <div className="d-flex flex-column mt-3">
    //                   {" "}
    //                   <small>
    //                     <i className="fa fa-check text-muted"></i> Vector file
    //                   </small>{" "}
    //                   <small>
    //                     <i className="fa fa-check text-muted"></i> Sources files
    //                   </small>{" "}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="row g-0 border-bottom">
    //               <div className="col-md-6 border-right">
    //                 <div className="p-3 d-flex justify-content-center align-items-center">
    //                   {" "}
    //                   <span>x3</span>{" "}
    //                 </div>
    //               </div>
    //               <div className="col-md-6">
    //                 <div className="p-3 d-flex justify-content-center align-items-center">
    //                   {" "}
    //                   <span>$20 per unit</span>{" "}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="row g-0 border-bottom">
    //               <div className="col-md-6">
    //                 <div className="p-3 d-flex justify-content-center align-items-center">
    //                   {" "}
    //                   <span>Subtotal</span>{" "}
    //                 </div>
    //               </div>
    //               <div className="col-md-6">
    //                 <div className="p-3 d-flex justify-content-center align-items-center">
    //                   {" "}
    //                   <span>$60</span>{" "}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="row g-0 border-bottom">
    //               <div className="col-md-6">
    //                 <div className="p-3 d-flex justify-content-center align-items-center">
    //                   {" "}
    //                   <span>Processing fees</span>{" "}
    //                 </div>
    //               </div>
    //               <div className="col-md-6">
    //                 <div className="p-3 d-flex justify-content-center align-items-center">
    //                   {" "}
    //                   <span>$1.80</span>{" "}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="row g-0">
    //               <div className="col-md-6">
    //                 <div className="p-3 d-flex justify-content-center align-items-center">
    //                   {" "}
    //                   <span className="font-weight-bold">Total</span>{" "}
    //                 </div>
    //               </div>
    //               <div className="col-md-6">
    //                 <div className="p-3 d-flex justify-content-center align-items-center">
    //                   {" "}
    //                   <span className="font-weight-bold">$61.80</span>{" "}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div> </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <section className="ftco-section">
        {orders?.length > 0 && (
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
                        <th>Trạng thái đặt hàng</th>
                        <th>Hủy đặt hàng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => {
                        return (
                          <tr key={index} className="alert" role="alert">
                            <td>
                              {index + 1}
                            </td>
                            <td className="d-flex align-items-center">
                              <div
                                className="img"
                                style={{
                                  backgroundImage: "url(images/person_1.jpg)",
                                }}
                              />
                              <div className="pl-3 email mx-3">
                                <span>{order?.account?.fullName}</span>
                                <span>{formattedDate(order?.createdAt)}</span>
                              </div>
                            </td>
                            <td>{order?.cart?.quantity}</td>
                            <td>{order?.cart?.product?.price} {CURRENCY}</td>
                            <td className="status">
                              <span className="active">Active</span>
                            </td>
                            <td>
                              <Button
                              onClick={() => handleCancelOrder(order?.id)}
                                className="btn-sm  float-start
                          "
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
        )}
      </section>
    </>
  );
}
