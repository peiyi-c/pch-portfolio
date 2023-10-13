import "./index.scss";
import { useLanguageContext } from "../Language/LanguageContext";
import LanguageSelect from "../Language/LanguageSelect";
const Intro = () => {
  const { t } = useLanguageContext();
  return (
    <>
      <LanguageSelect />
      <section id="intro" className="intro container">
        <h1 className="intro__title">Pei-Yi</h1>

        <p className="intro__text"> {t("Intro-Text")} </p>
      </section>
    </>
  );
};

export default Intro;
