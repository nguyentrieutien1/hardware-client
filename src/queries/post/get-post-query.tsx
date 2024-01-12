import { useQuery } from "react-query";
import { axiosConfig } from "~/lib";

const getPostDetail = async ({ id }: {id: number}) => {
  return await axiosConfig.get(`/posts/${id}`);
};
export const constructorGetPostDetail = (id) => ["get-post", id];
export const useGetPostDetail = ({id}) => {
  return useQuery({
    queryFn: () => getPostDetail({id}),
    queryKey: constructorGetPostDetail(id),
    
    refetchOnWindowFocus: false
  });
};
