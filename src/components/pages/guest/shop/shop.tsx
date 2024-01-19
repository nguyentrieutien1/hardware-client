"use client";
import React, { useEffect, useState } from "react";
import { useGetProducts } from "~/queries";
import Product from "../product/product";
import Categories from "../categories/categories";
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
      <>
        <section className="hero-normal container">
          <div className="">
            <div className="row">
              <Categories setFilterByCategory={setFilterByCategory} />
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
                  {productList.length > 0 ? productList.slice((step * active - step), step * active).map((product) => (
                    <Product product={product} />
                  )) : <h3 className="col-12 text-center">Hiện tại cửa hàng chưa có sản phẩm nào !</h3>}
                </div>
                {productList.length > 0 && <div className="product__pagination">
                  <Pagination size="sm">{items}</Pagination>
                </div>}

              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
