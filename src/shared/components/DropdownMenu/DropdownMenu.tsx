import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { useTranslation } from "react-i18next";
import MediaQuery from "react-responsive";
import s from "./DropdownMenu.module.scss";
import React from "react";

export const DropdownMenu = () => {
  const { t } = useTranslation();
  return (
    <div>
      {[4, 2, 6, 3, 3].map((countInList, indexList) => {
        return (
          <React.Fragment key={indexList}>
            <MediaQuery minWidth={771}>
              <Accordion
                className={s.accordion}
                onClick={(e) => {
                  const elem = e.currentTarget;
                  elem.setAttribute(
                    "style",
                    elem.classList.contains("Mui-expanded")
                      ? "border-bottom: 1px solid #a9a9a9 !important"
                      : "border-bottom: 1px solid #1858fb !important"
                  );
                }}
              >
                <AccordionSummary className={s.summary}>
                  <h3 className={s.title}>
                    {t(`main.activity.lists.list_${indexList + 1}.title`)}
                  </h3>
                </AccordionSummary>
                <AccordionDetails className={s.details}>
                  <ul>
                    {Array.from({ length: countInList }).map((_, num) => {
                      return (
                        <li key={num}>
                          {t(
                            `main.activity.lists.list_${indexList + 1}.${
                              num + 1
                            }`
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </AccordionDetails>
              </Accordion>
            </MediaQuery>
            <MediaQuery maxWidth={770}>
              <div className={s.menu}>
                <Accordion className={s.accordion} expanded={true}>
                  <AccordionSummary className={s.summary}>
                    <h3 className={s.title}>
                      {t(`main.activity.lists.list_${indexList + 1}.title`)}
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails className={s.details}>
                    <ul>
                      {Array.from({ length: countInList }).map((_, num) => {
                        return (
                          <li key={num}>
                            {t(
                              `main.activity.lists.list_${indexList + 1}.${
                                num + 1
                              }`
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </div>
            </MediaQuery>
          </React.Fragment>
        );
      })}
    </div>
  );
};
