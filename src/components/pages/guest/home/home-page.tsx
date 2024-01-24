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
export default function ShopPage() {
  const { data: products, isLoading } = useGetProducts(); //[1, 2]
  const [productList, setProductList] = useState([]);
  const [active, setActive] = useState(1);
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

  return (
    <>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
             <div className="row">
             <div className="col-4">
              <Categories />
              </div>
              <div className="section-title">
                {productList.length > 0 && (
                  <div className="product__pagination float float-right mx-4">
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
          </div>

          <div className="row featured__filter mb-5">
            {products?.data ? (
              productList
                .slice(step * active - step, step * active)
                .map((product, i) => (
                  <Product numberColumn={3} key={i} product={product} />
                ))
            ) : (
              <Spinner isLoading={isLoading} />
            )}
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
