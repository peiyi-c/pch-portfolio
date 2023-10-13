import "./index.scss";
import { useLanguageContext } from "./LanguageContext";

const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();

  return (
    <ul role="list" className="languages" onClick={onClickLanguageChange}>
      {Object.keys(languages).map((lng) => (
        <li
          key={languages[lng].nativeName}
          data-value={lng}
          className="languages__item"
        >
          {languages[lng].nativeName}
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelect;
