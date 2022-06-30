import { useTranslation } from "react-i18next";
import { CustomLink } from "../../shared/components/CustomLink";
import s from "./Project.module.scss";

type Props = {
  children: any;
  locales_title: string;
};

export const Project = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <section className={s.project}>
        <nav className={s.nav_wrapper}>
          <CustomLink className="link" to="/">
            <button className={s.project_button}>{t("project.button")}</button>
          </CustomLink>
          <ul className={s.breadcrumb}>
            <CustomLink className="link" to="/">
              <li className={s.pushkeen}>{t("project.breadcrumb.main")}</li>
            </CustomLink>{" "}
            /{" "}
            <CustomLink className="link" to="/projects">
              <li className={s.projects}>{t("project.breadcrumb.projects")}</li>
            </CustomLink>{" "}
            /{" "}
            <li className={s.title}>
              {t("project.list." + props.locales_title + ".title")}
            </li>
          </ul>
        </nav>

        {props.children}
      </section>
    </div>
  );
};
