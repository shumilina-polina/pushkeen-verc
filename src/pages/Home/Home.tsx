import s from "./Home.module.scss";
import rings from "../../assets/animate/ct_gif.mp4";
import { Projects } from "./components/Projects/Projects";

export const Home = () => {
  return (
    <>
      <section className={s.main}>
        <div className={s.title_container}>
          <h1 className={s.title}>pushkeen</h1>
        </div>
        <div className="container">
          <div className={s.wrapper_slogan}>
            <div className={s.slogan}>
              <p className={s.slogan_text}>
                <span className={s.arrow}>Pushing culture</span>
                <br />
                <span className={s.star}>keen on techology</span>
              </p>
              <span className={s.slogan_desc}>
                *продвигаем культуру, внедряем инновации
              </span>
            </div>
            <video
              className={s.rings}
              width="900"
              src={rings}
              autoPlay
              preload="auto"
              no-controls="true"
              muted
              loop
            ></video>
          </div>
        </div>
      </section>
      <Projects/>
    </>
  );
};
