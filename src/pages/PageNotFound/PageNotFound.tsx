import { useTranslation } from "react-i18next";
import s from "./PageNotFound.module.scss";
import { Helmet } from "react-helmet";

export const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>PushKeen - 404</title>
      </Helmet>
      <section className={s.notfound}>
        <div className="container">
          <span className={s.text}>{t("notfound")}</span>
        </div>
      </section>
    </>
  );
};
