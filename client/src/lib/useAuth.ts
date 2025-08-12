"use client";

import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { registerUser, loginUser } from "./api";
import type { AxiosError } from 'axios';

export function useRegister() {
  const toast = useToast();

  return useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => registerUser(username, password),
    onSuccess: (res) => {
      if (res.data?.token) {
        Cookies.set("access_token", res.data.token, { expires: 7 });
      }
      toast({
        title: "Регистрация успешна",
        status: "success",
      });
    },
    onError: (err: unknown) => {
      const e = err as AxiosError<any>;
      const msg =
        e?.response?.data?.error ??
        e?.response?.data?.message ??
        e?.message ??
        "Неизвестная ошибка";
      toast({
        title: "Ошибка регистрации",
        description: String(msg),
        status: "error",
      });
    },
  });
}

export function useLogin() {
  const toast = useToast();

  return useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) =>
      loginUser(username, password),
    onSuccess: (res) => {
      const token = res.data?.token;
      if (token) Cookies.set('access_token', token, { expires: 7 });
      toast({ title: 'Вход выполнен', status: 'success' });
    },
    onError: (err: unknown) => {
      const e = err as AxiosError<any>;
      const msg =
        e?.response?.data?.error ??
        e?.response?.data?.message ??
        e?.message ??
        'Неизвестная ошибка';
      toast({ title: 'Ошибка входа', description: String(msg), status: 'error' });
    },
  });
}
