import axios from "axios";
import { config } from "../config.ts";

interface ApiListUsersResponse {
  data: ApiUser[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface ApiUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const api = axios.create({ baseURL: config.API_URL });

const requests: string[] = [];

api.interceptors.request.use((config) => {
  requests.push(`${config.baseURL}${config.url}`);
  localStorage.setItem("networkCalls", JSON.stringify(requests));
  return config;
});

export async function listUsers(page: number = 1) {
  return api.get<ApiListUsersResponse>(`/api/users?page=${page}`);
}
