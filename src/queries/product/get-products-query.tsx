import { useQuery } from "react-query";
import {  axiosConfig } from "~/lib";

const getProducts = async () => {
  return await axiosConfig.get("/product");
};
export const constructorGetProducts = () => ["get-products"];
export const useGetProducts = () => {
  return useQuery({
    queryKey: constructorGetProducts(),
    queryFn: getProducts,
    staleTime: 5000, // Thời gian (ms) trước khi dữ liệu được coi là "stale" (mặc định là 5 phút)
    cacheTime: 5000, // Thời gian (ms) lưu trữ kết quả yêu cầu trong cache (mặc định là 10 phút)
  });
};
