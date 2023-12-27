import { useMutation } from "react-query";
import {  IUpdateOrder } from "../../types/index";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
const handleUpdateOrder = async (data: IUpdateOrder) => {
  return await axiosConfig.put(`/order/${data.id}`, {headers: {
    Authorization: `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`
  }
});
};
export const useUpdateOrderMutation = () => {
  return useMutation(handleUpdateOrder);
};
