import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3,
  faSquareJs,
  faSass,
  faBootstrap,
  faNodeJs,
  faVuejs,
  faReact,
  faGit,
  faNpm,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills container">
        <FontAwesomeIcon className="skills__skill" icon={faHtml5} />
        <FontAwesomeIcon className="skills__skill" icon={faCss3} />
        <FontAwesomeIcon className="skills__skill" icon={faSquareJs} />
        <FontAwesomeIcon className="skills__skill" icon={faSass} />
        <FontAwesomeIcon className="skills__skill" icon={faBootstrap} />
        <FontAwesomeIcon className="skills__skill" icon={faNodeJs} />
        <FontAwesomeIcon className="skills__skill" icon={faVuejs} />
        <FontAwesomeIcon className="skills__skill" icon={faReact} />
        <FontAwesomeIcon className="skills__skill" icon={faGit} />
        <FontAwesomeIcon className="skills__skill" icon={faNpm} />
        <FontAwesomeIcon className="skills__skill" icon={faFigma} />
      </section>
      <hr />
    </>
  );
};

export default Skills;
