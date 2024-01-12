import { useQuery } from "react-query";
import {  axiosConfig } from "~/lib";

const getPosts = async () => {
  return await axiosConfig.get("/posts");
};
export const constructorGetPosts = () => ["get-posts"];
export const useGetPosts = () => {
  return useQuery({
    queryKey: constructorGetPosts(),
    queryFn: getPosts,
    refetchOnWindowFocus: false

  });
};
