import { useMutation, useQueryClient } from "react-query";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
import { constructorIsUserLogined } from "~/queries";
import { constructorGetRepairs } from "~/queries/repair/get-repairs-query";
const handleUpdateRepair = async ({ id, data }) => {
  return await axiosConfig.put(`/repair/${id}`, data, {
    headers: {
      Authorization: `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`,
    },
  });
};
export const useUpdateRepairMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(handleUpdateRepair, {
    onSuccess({ data }) {
      const keyGetRepairs = constructorGetRepairs()
      queryClient.setQueriesData(keyGetRepairs, (oldData: any) => {
        const newOrder = oldData?.data?.map(item => {
          if(item?.id == data?.id) {
            return data;
          }
          return item
        })

        oldData['data'] = newOrder
        return oldData;
      })
    },
  });
};
