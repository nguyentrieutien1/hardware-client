import React, { useState } from "react";
import { useCategories } from "~/queries";
interface CategoriesProps {
  setFilterByCategory?: any;
}
export default function Categories(props: CategoriesProps) {
  const { setFilterByCategory } = props;
  const [hideCategories, setHideCategories] = useState<boolean>(false);
  const { data: categories } = useCategories();
  return (
    <div className="col-lg-3 p-0">
      <div className="hero__categories border-1 position-relative">
        <div
          onClick={() => {
            setHideCategories((prev) => !prev);
          }}
          className="hero__categories__all d-flex align-items-center justify-content-between "
        >
          <div className="">
            <i className="fa fa-bars" />
            <span>Thể loại</span>
          </div>
          <span>{`(${categories?.data ? categories?.data?.length : 0})`}</span>
        </div>
        {hideCategories && (
          <ul
            className="position-absolute w-100 bg-white"
            style={{ zIndex: 3 }}
          >
            {categories?.data?.map((cat, i) => (
              <li
                className="cursor-pointer"
                key={i}
                onClick={() => setFilterByCategory(cat?.id)}
              >
                <a>{cat?.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
