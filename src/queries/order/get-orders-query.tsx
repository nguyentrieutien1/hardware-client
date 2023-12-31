import { useQuery } from "react-query";
import {  axiosConfig } from "~/lib";

const getOrders = async () => {
  return await axiosConfig.get("/order");
};
export const constructorGetOrders = () => ["get-orders"];
export const useGetOrders = () => {
  return useQuery({
    queryKey: constructorGetOrders(),
    queryFn: getOrders,
    staleTime: 5000, // Thời gian (ms) trước khi dữ liệu được coi là "stale" (mặc định là 5 phút)
    cacheTime: 5000, // Thời gian (ms) lưu trữ kết quả yêu cầu trong cache (mặc định là 10 phút)
  });
};
