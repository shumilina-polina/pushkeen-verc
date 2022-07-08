import s from "./ButtonDownload.module.scss";

export const ButtonDownload = ({ text }: { text: string }) => {
  return <button className={s.button}>{text}</button>;
};
