"use client";
import React, { useEffect, useState } from "react";
import { useGetProducts } from "~/queries";
import Product from "../product/product";
import Categories from "../categories/categories";
import Post from "../post/post";
import Search from "../search/search";
import PaginationPage from "../pagination/pagination";
import ProductNotFound from "../product-not-found/product-not-found";
import Loading from "~/components/loading/loading";
import Spinner from "~/components/spinner/spinner";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { currencyFormatterConfig } from "~/lib/helpers/currency-formatter";
export default function ShopPage() {
  const { data: products, isLoading } = useGetProducts(); //[1, 2]
  const [productList, setProductList] = useState([]);
  const [active, setActive] = useState(1);
  const [price, setPrice] = useState([0, 50000]);
  const [search, setSearch] = useState("");
  const [newPrice, setNewPrice] = useState([0, 0]);
  const step = 12;

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

  // dsasadsad
  useEffect(() => {
    if (products?.data) {
      setProductList(products?.data);
    }
  }, [products?.data]);
  const handleSliderChange = (newValue) => {
    setProductList(products?.data);
    const prices = products?.data.map((product) => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    setPrice([minPrice, maxPrice]);
    setNewPrice(newValue);
    const filterProducts = [...products.data].filter((product) => {
      return product?.price >= newValue[0] && product?.price <= newValue[1];
    });
    setProductList([...filterProducts]);
    setActive(1);
  };
  const handleSearch = () => {
    const filterProducts = [...products.data].filter((product) => {
      console.log(search);

      return product?.name?.toLowerCase().includes(search?.toLowerCase());
    });
    setProductList([...filterProducts]);
    setActive(1);
  };
  return (
    <>
      <section className="featured spad">
        <div className="p-2">
          <div className="row">
            <div className="col-lg-12">
              <div className="row"></div>
            </div>
          </div>
          <div className="row featured__filter mb-5 p-2">
            <div className="col-12 col-lg-2">
              <Categories setFilterByCategory={setFilterByCategory} />
              <div className="mt-4">
                {products?.data?.length > 0 && (
                  <div className="sidebar__item">
                    <h4>Giá</h4>
                    <div className="">
                      <Slider
                        step={100000}
                        range
                        dots={true}
                        onChange={handleSliderChange}
                        min={0}
                        max={price[1]}
                      />
                    </div>
                    <div className="mt-5 d-flex align-items-center justify-content-between text-nowrap">
                      <p> Khoảng giá: </p>
                      <p className="text-body">
                        {currencyFormatterConfig(newPrice[0])}
                      </p>
                      <p>-</p>
                      <p className="ml-3 text-body">{`${currencyFormatterConfig(
                        newPrice[1]
                      )}`}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-10 row d-flex justify-content-center">
              <div className="col-12 mb-2 w-100">
                <div className="">
                  <div className="hero__search__form col-lg-4">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                      }}
                      action="#"
                    >
                      <input
                      className="w-100"
                        onChange={(e) => {
                          if (!e.target.value) {
                            setProductList(products.data);
                          } else {
                            setSearch(e.target.value);
                          }
                        }}
                        type="text"
                        placeholder="Tìm kiếm sản phẩm theo tên"
                      />
                      <button type="button" className="site-btn">
                        Tìm kiếm
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {products?.data ? (
                productList
                  .slice(step * active - step, step * active)
                  .map((product, i) => (
                    <Product numberColumn={2} key={i} product={product} />
                  ))
              ) : (
                <Spinner isLoading={isLoading} />
              )}
              <div className="section-title d-flex justify-content-end row col-12">
                {productList.length > 0 && (
                  <div className="product__pagination p-0">
                    <PaginationPage
                      active={active}
                      handleJump={handleJump}
                      length={productList.length}
                      step={step}
                    />
                  </div>
                )}
              </div>
            </div>
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
