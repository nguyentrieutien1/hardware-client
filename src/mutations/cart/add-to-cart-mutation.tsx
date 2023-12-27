import { useMutation } from "react-query";
import { ICart } from "../../types/index";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
const handleOnAddToCart = async (data:ICart ) => {
  return await axiosConfig.post("/cart", data, {headers: {
    Authorization: `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`
  }
});
};
export const useAddToCartMutation = () => {
  return useMutation(handleOnAddToCart);
};
