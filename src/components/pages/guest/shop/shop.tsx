"use client";
import React, { useState } from "react";
import { useGetProducts } from "~/queries";
import Loading from "~/components/loading/loading";
import Product from "../product/product";
import Categories from "../categories/categories";

export default function ShopPage() {
  const { data: products, isLoading } = useGetProducts();
  const [hideCategories, setHideCategories] = useState<boolean>(true);
  if (isLoading) return <Loading />;

  return (
    <>
      <>
        <section className="hero-normal container">
          <div className="">
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
                      <h5>+84 983787454</h5>
                      <span>Hỗ trợ 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        {/* Breadcrumb Section Begin */}
        {/* Breadcrumb Section End */}
        {/* Product Section Begin */}
        <section className="product spad container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-7">
                <div className="filter__item">
                  <div className="row">
                    {/* <div className="col-lg-4 col-md-5">
                      <div className="filter__sort">
                        <span>Sort By</span>
                        <select>
                          <option value={0}>Default</option>
                          <option value={0}>Default</option>
                        </select>
                      </div>
                    </div> */}
                    <div className="col-lg-4 col-md-3">
                      <div className="filter__option">
                        <span className="icon_grid-2x2" />
                        <span className="icon_ul" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {products?.data?.map((product) => (
                    <Product product={product} />
                  ))}
                </div>
                <div className="product__pagination">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">
                    <i className="fa fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
