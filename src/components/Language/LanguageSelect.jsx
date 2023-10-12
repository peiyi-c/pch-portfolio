import { useLanguageContext } from "./LanguageContext";

const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();
  return (
    <ul
      role="list"
      onClick={onClickLanguageChange}
      style={{
        display: "flex",
      }}
    >
      {Object.keys(languages).map((lng) => (
        <li key={languages[lng].nativeName} data-value={lng}>
          {languages[lng].nativeName}
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelect;
