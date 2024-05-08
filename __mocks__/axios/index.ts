import { InternalAxiosRequestConfig } from "axios";

export const get = jest.fn();
export const create = () => ({
  get,
  interceptors: {
    request: {
      use: (c: InternalAxiosRequestConfig) => c,
    },
  },
});

export default { create };
