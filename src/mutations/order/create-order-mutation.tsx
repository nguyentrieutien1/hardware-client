import { useMutation } from "react-query";
import { IOrder } from "../../types/index";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
const handleCreateOrder = async (data: IOrder[]) => {
  return await axiosConfig.post("/order", data, {headers: {
    Authorization: `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`
  }
});
};
export const useCreateOrderMutation = () => {
  return useMutation(handleCreateOrder);
};
