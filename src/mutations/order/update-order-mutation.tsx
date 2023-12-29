import { useMutation, useQueryClient } from "react-query";
import {  IUpdateOrder } from "../../types/index";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
import { constructorIsUserLogined } from "~/queries";
const handleUpdateOrder = async (data: IUpdateOrder) => {
  return await axiosConfig.put(`/order/${data.id}`, {headers: {
    Authorization: `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`
  }
});
};
export const useUpdateOrderMutation = () => {
  const queryClient= useQueryClient();
  return useMutation(handleUpdateOrder, {onSuccess({data}, ) {
    const key = constructorIsUserLogined();
    queryClient.setQueryData(key, (oldData: any) => {
      const cartUpdate = oldData?.data.order.filter((item) => {
        return item?.id !== data?.id;
      });
      oldData["data"]["order"] = [...cartUpdate];
      return { ...oldData };
    });
  },});

};
