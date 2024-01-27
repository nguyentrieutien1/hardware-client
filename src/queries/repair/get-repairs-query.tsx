import { useQuery } from "react-query";
import {  axiosConfig } from "~/lib";

const getRepairs = async () => {
  return await axiosConfig.get("/repair");
};
export const constructorGetRepairs = () => ["get-repair"];
export const useGetRepairs = () => {
  return useQuery({
    queryKey: constructorGetRepairs(),
    queryFn: getRepairs,
    refetchOnWindowFocus: false,
    cacheTime: 12 * 60 * 60 * 1000, // 12 giờ
    staleTime: 12 * 60 * 60 * 1000 // 12 giờ
  });
};
