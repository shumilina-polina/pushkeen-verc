import { useTranslation } from "react-i18next";
import s from "./Contact.module.scss";

export const SubmitMessage = ({
  setSubmitMessage,
}: {
  setSubmitMessage: (e: any) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className={s.submit}>
      <h3 className={s.submit_title}>{t("main.contact.submit.title")}</h3>
      <span className={s.submit_label}>{t("main.contact.submit.text")}</span>
      <button
        className={s.submit_button}
        onClick={() => {
          setSubmitMessage(false);
        }}
      ></button>
    </div>
  );
};
