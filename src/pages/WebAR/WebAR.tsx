import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Project } from "pages/Project/Project";
import s from "./WebAR.module.scss";
import { Helmet } from "react-helmet";
import { ButtonDownload } from "shared/components/ButtonDownload/ButtonDownload";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import AOS from "aos";

export const WebAR = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>PushKeen - Web AR</title>
        <meta
          name="description"
          content="Web AR — это технология дополненной реальности, которая работает непосредственно в браузере, без необходимости устанавливать дополнительное приложение."
        />
      </Helmet>
      <Project locales_page="projects" locales_title="webar">
        <section className={s.page}>
          <div
            className={s.main}
            style={{
              backgroundImage:
                "url(" + require(`assets/projects/webar/mainscreen.jpeg`) + ")",
            }}
          >
            <div className="container">
              <div className={s.main_wrapper}>
                <div className={s.main_text}>
                  <h2>{t("project.list.webar.about.title.name")}</h2>
                  <span>{t("project.list.webar.about.title.label")}</span>
                </div>
                <div className={s.main_new}>new</div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className={s.content}>
              <h3>{t("project.list.webar.about.content.name")}</h3>
              <ReactMarkdown>
                {t("project.list.webar.about.content.label")}
              </ReactMarkdown>
            </div>
            <div className={s.test}>
              <h3>{t("project.list.webar.test.title")}</h3>
              <ul>
                {[1, 2].map((item) => (
                  <li
                    data-aos="fade-left"
                    data-aos-delay={`${100 * item}`}
                    key={item}
                  >
                    <div>{item}</div>
                    <span>{t(`project.list.webar.test.text_${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.img_1}>
              <div className={s.label}>
                <span>{t("project.list.webar.label_1")}</span>
                <a
                  href="https://"
                  target="_blank"
                  rel="noreferrer"
                  className={s.button}
                >
                  <ButtonDownload text={t("project.list.webar.button")} />
                </a>
              </div>
              <img
                src={require("assets/projects/webar/img1.jpg")}
                alt="Playloft Gaga"
              />
            </div>
            <div className={s.market}>
              <div className={s.market_tool}>
                <h3>{t("project.list.webar.market.title")}</h3>
                <ReactMarkdown>
                  {t("project.list.webar.market.text_1")}
                </ReactMarkdown>
                <br />
                <br />
                <ReactMarkdown>
                  {t("project.list.webar.market.text_2")}
                </ReactMarkdown>
              </div>
              <div className={s.market_items}>
                <h4>{t("project.list.webar.market.items.title")}</h4>
                <ul>
                  {[1, 2, 3, 4].map((item) => (
                    <li
                      data-aos="fade-right"
                      data-aos-delay={`${100 * item}`}
                      key={item}
                    >
                      {t(`project.list.webar.market.items.${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.market_tool}>
                <ReactMarkdown>
                  {t("project.list.webar.market.text_3")}
                </ReactMarkdown>
                <br />
                <ReactMarkdown>
                  {t("project.list.webar.market.text_4")}
                </ReactMarkdown>
              </div>
            </div>
            <div className={s.img_2}>
              <div className={s.label}>
                <span>{t("project.list.webar.label_1")}</span>
                <a
                  href="https://"
                  target="_blank"
                  rel="noreferrer"
                  className={s.button}
                >
                  <ButtonDownload text={t("project.list.webar.button")} />
                </a>
              </div>
              <img
                src={require("assets/projects/webar/img2.jpg")}
                alt="Playloft Gaga"
              />
              <div className={s.label_2}>
                <div></div>
                <span>{t("project.list.webar.label_2")}</span>
              </div>
            </div>
            <div className={s.integration}>
              <h3>{t("project.list.webar.integration.title")}</h3>
              <br />
              <ReactMarkdown>
                {t("project.list.webar.integration.text_1")}
              </ReactMarkdown>
              <br />
              <ReactMarkdown>
                {t("project.list.webar.integration.text_2")}
              </ReactMarkdown>
            </div>
          </div>
          <div className={s.instruction}>
            <div className="container">
              <div className={s.instruction_wrapper}>
                <h3>
                  <ReactMarkdown>
                    {t("project.list.webar.instruction.title")}
                  </ReactMarkdown>
                </h3>
                <span>{t("project.list.webar.instruction.title_2")}</span>
                <ul>
                  {[1, 2].map((item) => (
                    <li
                      data-aos="fade-left"
                      data-aos-delay={`${100 * item}`}
                      key={item}
                    >
                      <div>{item}</div>
                      <span>
                        <ReactMarkdown>
                          {t(`project.list.webar.instruction.text_${item}`)}
                        </ReactMarkdown>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Project>
    </>
  );
};
