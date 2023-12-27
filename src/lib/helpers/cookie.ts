"use client";

import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const COOKIE_NAME = {
  ACCESS_TOKEN: "access_token",
};

export const setCookieConfig = (
  cname: string,
  cvalue: string,
  exdays?: number
) => {
  return setCookie(cname, cvalue)
};

export const getCookieConfig = (cname: string) => {
  console.log(getCookie(cname));
  
  return getCookie(cname)
};
export const deleteCookieConfig = (cname: string) => {
  return deleteCookie(cname)
};
