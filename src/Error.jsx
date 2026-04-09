import styles from "./Error.module.css";

export const Error = ({ errors }) => {
  return (
    <>
      {errors.map((error, index) => (
        <div
          key={index}
          className={`${styles.errorBase} ${!error.valide ? styles.visible : ""}`}
        >
          {!error.valide && error.ErrorText}
        </div>
      ))}
    </>
  );
};
