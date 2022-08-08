import cn from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import s from "./DropdownMenu.module.scss";

export const DropdownMenu = () => {
  const { t } = useTranslation();
  let active = cn(s.list, s.list_active);
  const [list, setList] = useState<number>(0);
  return (
    <div className={s.menu}>
      {[4, 2, 6, 3, 3].map((countInList, indexList) => {
        return (
          <div
            key={indexList}
            className={s.menu_item}
            style={list === indexList + 1 ? { borderColor: "#1858fb" } : {}}
          >
            <h3
              className={s.title}
              onClick={() => {
                setList(indexList + 1);
              }}
              style={list === indexList + 1 ? { color: "#1858fb" } : {}}
            >
              {t(`main.activity.lists.list_${indexList + 1}.title`)}
            </h3>
            <ul className={list === indexList + 1 ? active : s.list}>
              {Array.from({ length: countInList }).map((_, num) => {
                return (
                  <li key={num}>
                    {t(`main.activity.lists.list_${indexList + 1}.${num + 1}`)}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
