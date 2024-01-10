import { useQuery } from "react-query";
import {  axiosConfig } from "~/lib";

const getCategories = async () => {
  return await axiosConfig.get("/categories");
};
export const constructorGetCategories = () => ["get-categories"];
export const useCategories = () => {
  return useQuery({
    queryKey: constructorGetCategories(),
    queryFn: getCategories,

  });
};
