import "./index.scss";

const Work = () => {
  return (
    <>
      <div className="works__list__item">
        <a
          className="works__list__item__link"
          target="_blank"
          rel="noreferrer"
          href="https://envious-kittens.surge.sh/#issue-7"
        >
          <img
            className="works__list__item__image"
            src="https://user-images.githubusercontent.com/73789013/266792811-b95ffbaa-96c1-441d-8c2a-13d6a2409bd5.png"
          />
        </a>
        <div className="works__list__item__name">Project Name</div>
      </div>
    </>
  );
};

export default Work;
