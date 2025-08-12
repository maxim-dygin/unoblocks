import { api } from "./axios";

export const registerUser = (username: string, password: string) =>
  api.post("/api/auth/register", { username, password });

export const loginUser = (username: string, password: string) =>
  api.post("/api/auth/login", { username, password });
