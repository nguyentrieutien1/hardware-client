import { useMutation, useQueryClient } from "react-query";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
import { constructorIsUserLogined } from "~/queries";
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
      const key = constructorIsUserLogined();
      queryClient.refetchQueries({ queryKey: key });
    },
  });
};
