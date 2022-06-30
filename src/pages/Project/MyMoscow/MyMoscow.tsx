import { useTranslation } from "react-i18next";
import s from "./MyMoscow.module.scss";

export const MyMoscow = () => {
  const { t } = useTranslation();
  console.log("MOSCOW");

  return <div>MOSCOW</div>;
};
