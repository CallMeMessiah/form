import styles from "./App.module.css";
import { useState } from "react";
import { Error } from "./Error";
import { useForm } from "react-hook-form";

export const App = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const validationEmail = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    const validationPassword = /\d.*\w|\w.*\d/;
    const passwordsMatch = data.password === data.confirmPassword;

    if (!validationEmail.test(data.email)) {
      setError("email", { type: "manual", message: "Некорректный email" });
    }

    if (!validationPassword.test(data.password)) {
      setError("password", {
        type: "manual",
        message:
          "Пароль должен содержать только латинские буквы верхнего и нижнего регистра и цифры",
      });
    }

    if (!passwordsMatch) {
      setError("confirmPassword", {
        type: "manual",
        message: "Пароли не совпадают",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="email">
        <span>Email</span>
      </label>
      <input type="email" id="email" {...register("email")} />
      <label htmlFor="password">
        <span>Password</span>
      </label>
      <input type="password" id="password" {...register("password")} />
      <label htmlFor="confirmPassword">
        <span>Confirm Password</span>
      </label>
      <input
        type="password"
        id="confirmPassword"
        {...register("confirmPassword")}
      />
      <button type="submit">Sign Up</button>
      <Error errors={errors}></Error>
    </form>
  );
};
