import { useMutation, useQueryClient } from "react-query";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
import { constructorIsUserLogined } from "~/queries";
import { constructorGetOrders } from "~/queries/order/get-orders-query";
const handleUpdateOrder = async ({id, data}) => {
  return await axiosConfig.put(`/order/${id}`, data, {
    headers: {
      Authorization: `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`,
    },
  });
};
export const useUpdateOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(handleUpdateOrder, {
    onSuccess({ data }) {
      const authKey = constructorIsUserLogined();
      const orderKey = constructorGetOrders()
      queryClient.refetchQueries({ queryKey: authKey });
      queryClient.refetchQueries({ queryKey: orderKey });
    },
  });
};
