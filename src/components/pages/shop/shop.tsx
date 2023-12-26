"use client"
import React from "react";
import Product from "../product/product";
import { useGetProducts } from "~/queries";
import { IProduct } from "~/types";
import Loading from "~/components/loading/loading";

export default function ShopPage() {
  const { data: products, isLoading } = useGetProducts();
  
  if(isLoading) return <Loading />
  
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="">
                <h1>Cùng nhau mua sắm nào !</h1>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-img-wrap">
                <img src="images/Hardware.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products?.data?.map((product: IProduct, index: number) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
