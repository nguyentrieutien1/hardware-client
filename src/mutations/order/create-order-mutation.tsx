import { useMutation } from "react-query";
import { IOrder } from "../../types/index";
import { axiosConfig } from "~/lib";
const handleCreateOrder = async (data: IOrder[]) => {
  return await axiosConfig.post("/order", data);
};
export const useCreateOrderMutation = () => {
  return useMutation(handleCreateOrder);
};
