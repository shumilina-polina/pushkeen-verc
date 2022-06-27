import React from "react";
import { useTranslation } from "react-i18next";
import { Cards } from "../../shared/components/Cards/Cards";
import { CustomLink } from "../../shared/components/CustomLink";
import { linkValue } from "../../types/types";
import s from "./Nft.module.scss";
import { nftList } from "./NftList";

export const Nft = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <section className={s.desc}>
          <CustomLink
            className="link"
            to="/"
          >
            <button className={s.button}>{t("nft.title.button")}</button>
          </CustomLink>
          <h2 className={s.title}>nft</h2>
          <p className={s.text}>{t("nft.title.description")}</p>
        </section>
        <section className={s.collections}>
          <h2 className={s.title}>{t("nft.collections.title")}</h2>
          <Cards list={nftList} />
        </section>
      </div>
    </>
  );
};
