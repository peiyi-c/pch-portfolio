import "./index.scss";
import sphere from "../../assets/sphere.png";
import sphere2 from "../../assets/sphere2.png";

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader-bubble" src={sphere} alt="loading bubble" />
      <img className="loader-bubble2" src={sphere2} alt="loading bubble" />
    </div>
  );
};

export default Loader;
