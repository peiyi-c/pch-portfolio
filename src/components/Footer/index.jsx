import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="contact container">
        <FontAwesomeIcon icon={faEnvelope} />
      </footer>
    </>
  );
};

export default Footer;
