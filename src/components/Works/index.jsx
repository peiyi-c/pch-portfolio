import "./index.scss";
import Work from "../Work";
const Works = () => {
  return (
    <>
      <section id="works" className="works container">
        <h1 className="works__title">Works</h1>
        <div role="list" className="works__list">
          <Work />
          <Work />
          <Work />
          <Work />
        </div>
      </section>
      <hr />
    </>
  );
};

export default Works;
