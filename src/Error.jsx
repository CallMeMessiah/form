import styles from "./Error.module.css";

export const Error = ({ errors }) => {
  const activeErrors = Object.values(errors).filter((err) => err?.message);

  if (activeErrors.length === 0) return null; // нет ошибок — не рендерим ничего

  return (
    <>
      {activeErrors.map((error, index) => (
        <div key={index} className={`${styles.errorBase}`}>
          {error.message}
        </div>
      ))}
    </>
  );
};
