import { useQuery } from "react-query";
import { COOKIE_NAME, axiosConfig, getCookieConfig } from "~/lib";

const checkUserIsLogined = async () => {
  return await axiosConfig.get("/auth/check-is-login", {
    headers: {
      Authorization: `Bear ${getCookieConfig(COOKIE_NAME.ACCESS_TOKEN)}`,
    },
  });
};
const constructorIsUserLogined = () => ["is-user-logined"];
export const useIsUserLogined = () => {
  return useQuery({
    queryKey: constructorIsUserLogined(),
    queryFn: checkUserIsLogined,
    staleTime: 5000, // Thời gian (ms) trước khi dữ liệu được coi là "stale" (mặc định là 5 phút)
    cacheTime: 5000, // Thời gian (ms) lưu trữ kết quả yêu cầu trong cache (mặc định là 10 phút)
  });
};
