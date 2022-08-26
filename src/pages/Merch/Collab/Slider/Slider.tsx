import s from "./Slider.module.scss";

export const Slider = ({
  color,
  setColor,
}: {
  color: string;
  setColor: any;
}) => {
  return (
    <div className={s.slider}>
      <img
        style={color === "white" ? { display: "block" } : { display: "none" }}
        className={s.image_white}
        src={require("../../../../assets/merch/obj_1.jpg")}
        alt="White tshirt"
      />
      <img
        style={color === "black" ? { display: "block" } : { display: "none" }}
        className={s.image_black}
        src={require("../../../../assets/merch/obj_2.jpg")}
        alt="Black tshirt"
      />
      <button
        className={s.button_prev}
        onClick={() => {
          localStorage.setItem("tshirt", "black");
          setColor("black");
        }}
        style={
          color === "white"
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        <svg width="17" height="29" viewBox="0 0 17 29">
          <path d="M4.43478 14.5L17 2.175L14.7826 0L0 14.5L14.7826 29L17 26.825L4.43478 14.5Z" />
        </svg>
      </button>
      <button
        className={s.button_next}
        onClick={() => {
          localStorage.setItem("tshirt", "white");
          setColor("white");
        }}
        style={
          color === "black"
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        <svg width="17" height="29" viewBox="0 0 17 29">
          <path d="M4.43478 14.5L17 2.175L14.7826 0L0 14.5L14.7826 29L17 26.825L4.43478 14.5Z" />
        </svg>
      </button>
    </div>
  );
};
