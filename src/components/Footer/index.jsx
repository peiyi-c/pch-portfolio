import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Wave from "../../assets/wave.svg";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="contact">
        <div className="contact__links">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </footer>
      <img className="concat__wave" aria-hidden="true" src={Wave} />
    </>
  );
};

export default Footer;
