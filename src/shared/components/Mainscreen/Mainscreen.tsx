import s from "./Mainscreen.module.scss";

export const Mainscreen = ({ path }: { path: string }) => {
  return (
    <div
      className={s.image}
      style={{
        backgroundImage: "url(" + require(`assets/${path}`) + ")",
      }}
    ></div>
  );
};
