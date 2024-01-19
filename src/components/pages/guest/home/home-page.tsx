"use client";
import React from "react";
import { useGetProducts } from "~/queries";
import Product from "../product/product";
import Categories from "../categories/categories";
import Link from "next/link";
import { LINK } from "~/lib/constants";
import Post from "../post/post";

export default function ShopPage() {
  const { data: products } = useGetProducts();
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
                    <h5>+84 983787454</h5>
                    <span>Hỗ trợ 24/7</span>
                  </div>
                </div>
              </div>
              <div className="hero__item set-bg" data-setbg="images/bowl-2.png">
                <div className="hero__text">
                  <span>Chuyên mua bán và sửa chữa phần cứng</span>
                  <h2>
                    dịch vụ tốt <br />
                    nhất
                  </h2>
                  <p>cho thiết bị của bạn!</p>
                  <Link href={LINK.SHOP} className="primary-btn">
                    Mua ngay
                  </Link>
                </div>
                <img
                  className="ml-3"
                  src="https://previews.123rf.com/images/trodler/trodler1701/trodler170100003/72181166-pc-hardware-components-isolated-on-white-3d-rendering.jpg"
                  width={300}
                />
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
                  {/* <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="row featured__filter">
            {products?.data?.length > 0 ? (
              products?.data?.map((product) => <Product product={product} />)
            ) : (
              <div className="text-center  col-12 mb-5">
                <h3>Hiện tại cửa hàng chưa có sản phẩm nào</h3>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Bài viết gần đây</h2>
              </div>
            </div>
          </div>
          <Post />
        </div>
      </section>
    </>
  );
}
