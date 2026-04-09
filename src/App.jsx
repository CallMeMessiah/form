import styles from "./App.module.css";
import { Error } from "./Error";
import { useForm } from "react-hook-form";

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("Данные ушли!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor="email">
        <span>Email</span>
      </label>
      <input
        type="email"
        id="email"
        {...register("email", {
          required: "Email обязателен",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Email некорректен" },
        })}
      />
      <label htmlFor="password">
        <span>Password</span>
      </label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: "Пароль обязателен",
          pattern: {
            value: /^[a-zA-Z0-9_+]{6,20}$/,
            message: "Пароль неверный",
          },
        })}
      />
      <label htmlFor="confirmPassword">
        <span>Confirm Password</span>
      </label>
      <input
        type="password"
        id="confirmPassword"
        {...register("confirmPassword", {
          validate: (value, formValues) => {
            return value === formValues.password ? true : "Пароли не совпадают";
          },
        })}
      />
      <button type="submit">Sign Up</button>
      <Error errors={errors}></Error>
    </form>
  );
};
