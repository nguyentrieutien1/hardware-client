"use client";
import React, { useEffect, useState } from "react";
import { useGetProducts } from "~/queries";
import Product from "../product/product";
import Categories from "../categories/categories";
import Pagination from "react-bootstrap/Pagination";
import PaginationPage from "../pagination/pagination";
import Search from "../search/search";

export default function ShopPage() {
  const { data: products } = useGetProducts();
  const [productList, setProductList] = useState([]);
  const [active, setActive] = useState(1);
  const step = 9;

  const handleJump = (number) => {
    setActive(number);
  };

  const setFilterByCategory = (id) => {
    const filterProducts = [...products.data].filter((product) => {
      return product.categoriesId == id;
    });
    setProductList([...filterProducts]);
    setActive(1);
  };
  useEffect(() => {
    if (products?.data) {
      setProductList(products?.data);
    }
  }, [products?.data]);
  return (
    <>
      <>
        <section className="hero-normal container">
          <div className="">
            <div className="row">
              <Categories setFilterByCategory={setFilterByCategory} />
              <Search />
            </div>
          </div>
        </section>
        <section className="product spad container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-12 d-flex justify-content-center">
                <h3>This is menu</h3>
              </div>
              <div className="col-lg-9 col-12 mt-3">
                <div className="">
                  <div className="">
                    <div className="">
                      <div className="section-title product__discount__title text-center">
                        <h2>Khuyến mãi</h2>
                      </div>
                      <div className="d-flex justify-content-end">
                        <PaginationPage
                          active={active}
                          handleJump={handleJump}
                          length={productList.length}
                          step={step}
                        />
                      </div>
                    </div>
                    <div className="row">
                      {productList.length > 0 ? (
                        productList
                          .slice(step * active - step, step * active)
                          .map((product) => (
                            <Product numberColumn={4} product={product} />
                          ))
                      ) : (
                        <h3 className="col-12 text-center">
                          Hiện tại cửa hàng chưa có sản phẩm nào !
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
