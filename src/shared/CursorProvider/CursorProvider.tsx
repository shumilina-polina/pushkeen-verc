import React, { useEffect, useState } from "react";
import s from "./CursorProvider.module.scss";

export const CursorContext = React.createContext("cursorContext");

const SUPPORTED_CURSORS = [false, "pointer", "right", "left"];

const CursorProvider = ({ children }: any) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState<boolean>(false);

  const onMouseMove = (event: any) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  const { x, y } = mousePosition;

  const onCursor = (cursorType: boolean) => {
    cursorType =
      (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
    setCursor(cursorType);
  };

  return (
    <CursorContext.Provider value={`${onCursor}`}>
      <ins
        className={s.movable}
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
