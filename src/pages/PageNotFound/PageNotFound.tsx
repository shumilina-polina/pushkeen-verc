import { useTranslation } from "react-i18next";
import s from "./PageNotFound.module.scss";

export const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <section className={s.notfound}>
      <div className="container">
        <span className={s.text}>{t("notfound")}</span>
      </div>
    </section>
  );
};
