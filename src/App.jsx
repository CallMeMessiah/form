import styles from "./App.module.css";
import { useRef, useState } from "react";
import { Error } from "./Error";

const defaultErrors = [
  { ErrorText: "Некорректный email", valide: true },
  {
    ErrorText:
      "Пароль должен содержать только латинские буквы верхнего и нижнего регистра и цифры",
    valide: true,
  },
  { ErrorText: "Пароли не совпадают", valide: true },
];

export const App = () => {
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [errors, setError] = useState(defaultErrors);
  const handleClick = () => {
    let curErrors = [...defaultErrors];
    const validationEmail = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    const validationPassword = /\d.*\w|\w.*\d/;
    const passwordsMatch =
      password.current.value === confirmPassword.current.value;

    // Обновляем ВСЕ поля (не только невалидные)
    curErrors[0].valide = validationEmail.test(email.current.value);
    curErrors[1].valide = validationPassword.test(password.current.value);
    curErrors[2].valide = passwordsMatch;

    setError(curErrors);
  };

  return (
    <form>
      <label htmlFor="email">
        <span>Email</span>
      </label>
      <input type="email" name="email" id="email" ref={email} />
      <label htmlFor="password">
        <span>Password</span>
      </label>
      <input type="password" name="password" id="password" ref={password} />
      <label htmlFor="confirmPassword">
        <span>Confirm Password</span>
      </label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        ref={confirmPassword}
      />
      <button type="button" onClick={handleClick}>
        Sign Up
      </button>
      <Error errors={errors}></Error>
    </form>
  );
};
