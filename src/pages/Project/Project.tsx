import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp } from "../../shared/components/ArrowUp/ArrowUp";
import { CustomLink } from "../../shared/components/CustomLink";
import s from "./Project.module.scss";

type Props = {
  children: any;
  locales_title: string;
  locales_page: string;
};

export const Project = (props: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <section className={s.project}>
          <nav className={s.nav_wrapper}>
            <div className={s.link_wrapper}>
              <CustomLink className="link " to="/">
                <button className={s.project_button}>
                  {t("project.button")}
                </button>
              </CustomLink>
            </div>

            <ul className={s.breadcrumb}>
              <CustomLink className="link" to="/">
                <li className={s.pushkeen}>{t("project.breadcrumb.main")}</li>
              </CustomLink>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <CustomLink className="link" to={"/" + props.locales_page}>
                <li className={s.projects}>
                  {props.locales_page === "nft"
                    ? "NFT"
                    : t("project.breadcrumb.projects")}
                </li>
              </CustomLink>
              &nbsp;&nbsp;/&nbsp;&nbsp;
              <li className={s.title}>
                {t("project.list." + props.locales_title + ".title")}
              </li>
            </ul>
          </nav>

          {props.children}
        </section>
      </div>
      <ArrowUp />
    </>
  );
};
