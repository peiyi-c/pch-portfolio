import "./index.scss";
import Work from "../Work";
const Works = () => {
  return (
    <>
      <section id="works" className="works container">
        <h1 className="workds__title">Works</h1>
        <Work />
        <Work />
        <Work />
        <Work />
      </section>
      <hr />
    </>
  );
};

export default Works;
