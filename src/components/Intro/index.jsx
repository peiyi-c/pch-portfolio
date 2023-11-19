import "./index.scss";
import { useLanguageContext } from "../Language/LanguageContext";
import LanguageSelect from "../Language/LanguageSelect";
import airship from "../../assets/airship.png";

const Intro = () => {
  const { t } = useLanguageContext();
  return (
    <>
      <LanguageSelect />
      <section id="intro" className="intro container">
        <img
          className="intro__img"
          src={airship}
          alt="airship"
          role="img"
          aria-hidden="true"
        />
        {/* https://icooon-mono.com/ */}
        <h1 className="intro__title" role="heading">
          Pei-Yi
        </h1>
        <p className="intro__text"> {t("Intro-Text")} </p>
      </section>
    </>
  );
};

export default Intro;
