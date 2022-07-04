import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const PublicArt = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>PublicArt</div>;
};
