import { useMutation, useQueryClient } from "react-query";
import { IOrder } from "../../types/index";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
const handleSearchOrder = async ({ orderCode }) => {
  return await axiosConfig.post(
    "/order/search",
    { orderCode },
    {
      headers: {
        Authorization: `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`,
      },
    }
  );
};
export const useSearchOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(handleSearchOrder, { onSuccess({ data }) {} });
};
