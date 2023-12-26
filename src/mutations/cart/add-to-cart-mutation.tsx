import { useMutation } from "react-query";
import { ICart } from "../../types/index";
import { axiosConfig } from "~/lib";
const handleOnAddToCart = async (data:ICart ) => {
  return await axiosConfig.post("/cart", data);
};
export const useAddToCartMutation = () => {
  return useMutation(handleOnAddToCart);
};
