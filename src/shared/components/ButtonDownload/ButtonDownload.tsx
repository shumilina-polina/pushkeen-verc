import { useTranslation } from "react-i18next";
import s from "./ButtonDownload.module.scss";

export const ButtonDownload = ({ text }: { text: string }) => {
  const { t } = useTranslation();

  return <button className={s.button}>{text}</button>;
};
