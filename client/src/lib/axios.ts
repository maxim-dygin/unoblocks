// src/lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.191.239:8080", // или 'http://localhost:8080', если через SSH-туннель
  // withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
