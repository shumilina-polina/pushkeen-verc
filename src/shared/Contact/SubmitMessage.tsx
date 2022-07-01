import s from "./Contact.module.scss";

export const SubmitMessage = ({
  setSubmitMessage,
}: {
  setSubmitMessage: (e: any) => void;
}) => {
  return (
    <div className={s.submit}>
      <h3 className={s.submit_title}>Ваш запрос отправлен!</h3>
      <span className={s.submit_label}>В скором времени свяжемся с вами</span>
      <button
        className={s.submit_button}
        onClick={() => {
          setSubmitMessage(false);
        }}
      ></button>
    </div>
  );
};
