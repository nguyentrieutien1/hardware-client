import { useMutation, useQueryClient } from "react-query";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";
import { constructorGetRepairs } from "~/queries/repair/get-repairs-query";
const handleCreateRepair = async (data) => {
  return await axiosConfig.post("/repair", data, {
    headers: {
      Authorization: `Bearer ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`,
    },
  });
};
export const useCreateRepairMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(handleCreateRepair, {
    onSuccess({ data }) {
      const key = constructorGetRepairs();
      queryClient.setQueriesData(key, (oldData: any) => {
        oldData['data'].unshift(data)
        return {...oldData}
      })
    },
  });
};
