import "./index.scss";
import { useLanguageContext } from "./LanguageContext";

const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();

  return (
    <ul className="languages" onClick={onClickLanguageChange} role="list">
      {Object.keys(languages).map((lng) => (
        <li
          key={languages[lng].nativeName}
          data-value={lng}
          className="languages__item"
          role="listitem"
        >
          {languages[lng].nativeName}
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelect;
