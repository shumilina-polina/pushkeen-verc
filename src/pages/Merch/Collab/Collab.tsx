import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import s from "./Collab.module.scss";

export const Collab = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <section className={s.collab}>a</section>
    </div>
  );
};
