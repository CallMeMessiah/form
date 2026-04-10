import styles from "./App.module.css";
import { Error } from "./Error";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required("Enter email.").email("Email invalid."),
  password: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_]{6,20}$/,
      "The password must contain latin letters and numbers and be at least 6 and no more than 20 characters long.",
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], `The passwords don't match.`)
    .required("Confirm password."),
});

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    console.log("Vse, dannye yshly!");
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
