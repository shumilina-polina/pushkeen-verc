import { useTranslation } from "react-i18next";
import { CustomLink } from "../../shared/components/CustomLink";
import s from "./Project.module.scss";

export const Project = ({ children }: any) => {
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
            <CustomLink className="link" to={"/" + children.path}>
              <li className={s.title}>
                {t("project.list." + children.name + ".name")}
              </li>
            </CustomLink>
          </ul>
        </nav>

        {children}
      </section>
    </div>
  );
};
