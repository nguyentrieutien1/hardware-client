"use client";
import React, { useEffect, useState } from "react";
import { useGetProducts } from "~/queries";
import Product from "../product/product";
import Categories from "../categories/categories";
import Link from "next/link";
import { LINK } from "~/lib/constants";
import Post from "../post/post";
import Pagination from 'react-bootstrap/Pagination';
export default function ShopPage() {
  const { data: products } = useGetProducts();
  const [productList, setProductList] = useState([])
  const [active, setActive] = useState(1)
  const step = 8;
  let items = [];
  for (let number = 1; number <= (productList?.length / step) + 1; number++) {
    items.push(
      <Pagination.Item defaultValue={active} onClick={() => handleJump(number)} activeLabel="" key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const handleJump = number => {
    setActive(number)
  }


  const setFilterByCategory = id => {
    const filterProducts = [...products.data].filter(product => {
      return product.categoriesId == id;
    })
    setProductList([...filterProducts])
    setActive(1)
  }
  useEffect(() => {
    if (products?.data) {
      setProductList(products?.data)
    }
  }, [products?.data])
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Categories setFilterByCategory={setFilterByCategory} />
            <div className="col-lg-9 row">
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
                <div className="row">
                  <div className="col-4 col-sm-0"></div>
                  <div className="hero__search__phone ">
                    <div className="hero__search__phone__icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="hero__search__phone__text">
                      <h5>+84 983787454</h5>
                      <span>Hỗ trợ 24/7</span>
                    </div>
                  </div>
                  <div className="col-4 col-sm-0"></div>
                </div>
              </div>
              <div className="hero__item set-bg row" data-setbg="images/bowl-2.png">
                <div className="hero__text col-lg-6 col-md-12 text-center text-lg-left ">
                  <p className="">Chuyên mua bán và sửa chữa phần cứng</p>
                  <h2 className="">
                    dịch vụ tốt <br />
                    nhất
                  </h2>
                  <p className="">cho thiết bị của bạn!</p>
                  <Link href={LINK.SHOP} className="primary-btn mb-3 ">
                    Mua ngay
                  </Link>
                </div>
                <div className="col-12 col-md-12 col-lg-6 justify-content-center d-flex">
                  <img
                    className=""
                    src="https://previews.123rf.com/images/trodler/trodler1701/trodler170100003/72181166-pc-hardware-components-isolated-on-white-3d-rendering.jpg"
                    width={300}
                  />
                </div>
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
            {productList.length > 0 ? productList.slice((step * active - step), step * active).map((product) => (
              <Product product={product} />
            )) : <h5 className="col-12 text-center mb-5">Hiện tại cửa hàng chưa có sản phẩm nào !</h5>}
           
          </div>
          <div className="mb-3">
          {productList.length > 0 && <div className="product__pagination">
              <Pagination size="sm">{items}</Pagination>
            </div>}
          </div>
          <div className="row mt-3">
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
