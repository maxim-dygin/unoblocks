// src/lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.191.239:8080",
  // withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
