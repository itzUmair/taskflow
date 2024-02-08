import axios from "@/api/axios";
import { AxiosError } from "axios";

type FormValidity = {
  type: "EmailError" | "PasswordError" | "valid";
  error: string | null;
};

type ErrorResponse = {
  message: string;
};

export const FormVerifier = (email: string, password: string): FormValidity => {
  if (email.length === 0) {
    return { type: "EmailError", error: "email is required" };
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return { type: "EmailError", error: "invalid email" };
  } else if (password.length === 0) {
    return { type: "PasswordError", error: "password is required" };
  } else if (password.length < 8) {
    return {
      type: "PasswordError",
      error: "password must be atleast 8 characters long",
    };
  } else {
    return {
      type: "valid",
      error: null,
    };
  }
};

export const LoginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post("/users/signin", {
      email,
      password,
    });
    localStorage.setItem("user-token", response.data.token);
    return { status: 200, message: "logged in" };
  } catch (error) {
    const err = error as AxiosError<ErrorResponse>;
    if (err.response) {
      if (err.response.status === 404) {
        return { status: 404, message: err.response.data.message };
      } else if (err.response.status === 401) {
        return { status: 401, message: err.response.data.message };
      }
    }
  }
};
