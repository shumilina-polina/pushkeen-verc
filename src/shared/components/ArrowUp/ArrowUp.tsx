import { useState } from "react";
import s from "./ArrowUp.module.scss";
import i from 'assets/svg/arrow_up.svg'

export const ArrowUp = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY >= 100 && !isVisible) {
      setVisible(true);
    } else if (window.scrollY < 100 && isVisible) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={s.arrow + (!isVisible ? " " + s.arrow_hidden : "")}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img src={i} alt="Arrow Up" />
    </button>
  );
};
