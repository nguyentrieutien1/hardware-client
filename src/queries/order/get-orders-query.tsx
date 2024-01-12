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
    refetchOnWindowFocus: false

  });
};
