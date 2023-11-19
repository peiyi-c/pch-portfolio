/* eslint-disable react/prop-types */
import "./index.scss";
import { useLanguageContext } from "../Language/LanguageContext";
const Project = ({ name, link, image, description }) => {
  const { t } = useLanguageContext();
  return (
    <>
      <div className="projects__list__item">
        <a
          className="projects__list__item__link"
          target="_blank"
          rel="noreferrer"
          href={link}
        >
          <img
            className="projects__list__item__image"
            src={image}
            alt="project screenshot"
          />
        </a>
        <div className="projects__list__item__text">
          <h3 className="projects__list__item__text-name">{name}</h3>
          <div className="projects__list__item__text-description">
            {t(`${description}`)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
