import React, { useState } from "react";
import { useCategories } from "~/queries";
import Accordion from "react-bootstrap/Accordion";

interface CategoriesProps {
  setFilterByCategory?: any;
}
export default function Categories(props: CategoriesProps) {
  const { setFilterByCategory } = props;
  const [hideCategories, setHideCategories] = useState<boolean>(true);
  const { data: categories } = useCategories();
  return (
    <div className="col-12 w-100 p-0">
      <div className="hero__categories position-relative">
        <div
          onClick={() => setHideCategories((prev) => !prev)}
          className="hero__categories__all d-flex align-items-center justify-content-between"
        >
          <div>
            <i className="fa fa-bars" />
            <span>Danh mục </span>
          </div>
        </div>
        {hideCategories && (
          <ul
            className="bg-white position-absolute w-100"
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
