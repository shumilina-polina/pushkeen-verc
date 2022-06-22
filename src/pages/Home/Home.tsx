import s from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <section className={s.main}>
        <div className={s.title_container}>
          <h1 className={s.title}>pushkeen</h1>
        </div>
        <div className="container">
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
          
        </div>
      </section>
    </>
  );
};
