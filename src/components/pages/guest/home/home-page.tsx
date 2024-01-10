"use client";
import React, { useState } from "react";
import { useCategories, useGetProducts } from "~/queries";
import Loading from "~/components/loading/loading";
import Product from "../product/product";
import Categories from "../../categories/categories";

export default function ShopPage() {
  const { data: products, isLoading } = useGetProducts();

  if (isLoading) return <Loading />;

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
           <Categories />
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down" />
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              <div className="hero__item set-bg" data-setbg="images/bowl-2.png">
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
                <img className="ml-3" src="images/bowl-2.png" width={300} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Tất cả sản phẩm</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    Tất cả
                  </li>
                  {/* <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="row featured__filter">
            {products?.data?.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
