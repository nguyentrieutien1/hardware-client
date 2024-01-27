import { useQuery } from "react-query";
import {  axiosConfig } from "~/lib";

const getAccounts = async (queries) => {
  return await axiosConfig.get("/account", {params:queries });
};
export const constructorGetAccounts = () => ["get-accounts"];
export const useGetAccounts = (queries) => {
  return useQuery({
    queryKey: constructorGetAccounts(),
    queryFn: () => getAccounts(queries),
    refetchOnWindowFocus: false,
    cacheTime: 12 * 60 * 60 * 1000, // 12 giờ
    staleTime: 12 * 60 * 60 * 1000 // 12 giờ

  });
};
