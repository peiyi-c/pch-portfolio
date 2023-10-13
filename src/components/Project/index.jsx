import "./index.scss";

const Project = ({ name, link, image, description }) => {
  return (
    <>
      <div className="projects__list__item">
        <a
          className="projects__list__item__link"
          target="_blank"
          rel="noreferrer"
          href={link}
        >
          <img className="projects__list__item__image" src={image} />
        </a>
        <div className="projects__list__item__name">{name}</div>
      </div>
    </>
  );
};

export default Project;
