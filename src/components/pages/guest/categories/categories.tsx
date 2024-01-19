import React, { useState } from "react";
import { useCategories } from "~/queries";
interface CategoriesProps {
  setFilterByCategory?: any
}
export default function Categories(props: CategoriesProps) {
  const { setFilterByCategory } = props
  const [hideCategories, setHideCategories] = useState<boolean>(true);
  const { data: categories } = useCategories();
  return (
    categories?.data && (
      <div className="col-lg-3 z-3">
        <div className="hero__categories">
          <div
            onClick={() => {
              setHideCategories((prev) => !prev);
            }}
            className="hero__categories__all d-flex align-items-center justify-content-between"
          >
            <div className="">
              <i className="fa fa-bars" />
              <span>Thể loại</span>
            </div>
            <span>{`(${categories?.data?.length})`}</span>
          </div>
          {hideCategories && (
            <ul>
              {categories?.data?.map((cat) => (
                <li className="cursor-pointer" onClick={() => setFilterByCategory(cat?.id)}>
                  <a>{cat?.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  );
}
