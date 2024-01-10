import { useQuery } from "react-query";
import { axiosConfig } from "~/lib";

const getProductDetail = async ({ id }: {id: number}) => {
  return await axiosConfig.get(`/product/${id}`);
};
export const constructorGetProductDetail = (id) => ["get-product", id];
export const useGetProductDetail = ({id}) => {
  return useQuery({
    queryFn: () => getProductDetail({id}),
    queryKey: constructorGetProductDetail(id),
  });
};
