import type { FetchResponse } from "@/types/query";
import axios, { type AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data.results);
  }

  get(id: string | number) {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((response) => response.data);
  }
}

export default ApiClient;
