import {  toast } from "react-toastify";

export const toastConfig = (
  content: string,
  options?: { status?: "success" | "error" | "info" | 'warning' }
) => {
  return toast(content, {
    progressStyle: {
      background:
        options?.status === "success"
          ? "var(--bs-success)"
          : options?.status === "error"
          ? "var(--bs-danger)"
          : options?.status === "warning"
          ? "var(--bs-warning)"
          : "var(--bs-info)",
    },
    autoClose: 1000
  });
};
