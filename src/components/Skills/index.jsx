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
import TypeScript from "../../assets/TypeScript.svg";

const Skills = () => {
  return (
    <>
      <section id="skills" className="skills container">
        <h1 className="skills__title">Skills</h1>
        <div className="container skills__list">
          <span className="skills__skill" data-name="HTML">
            <FontAwesomeIcon className="skills__skill__icon" icon={faHtml5} />
          </span>
          <span className="skills__skill" data-name="CSS">
            <FontAwesomeIcon className="skills__skill__icon" icon={faCss3} />
          </span>
          <span className="skills__skill" data-name="Scss">
            <FontAwesomeIcon className="skills__skill__icon" icon={faSass} />
          </span>
          <span className="skills__skill" data-name="Bootstrap">
            <FontAwesomeIcon
              className="skills__skill__icon"
              icon={faBootstrap}
            />
          </span>
          <span className="skills__skill" data-name="JavaScript">
            <FontAwesomeIcon
              className="skills__skill__icon"
              icon={faSquareJs}
            />
          </span>
          <span className="skills__skill typescript" data-name="TypeScript">
            <img className="skills__skill__icon " src={TypeScript} />
          </span>
          <span className="skills__skill" data-name="Node.js">
            <FontAwesomeIcon className="skills__skill__icon" icon={faNodeJs} />
          </span>
          <span className="skills__skill" data-name="Vue.js">
            <FontAwesomeIcon className="skills__skill__icon" icon={faVuejs} />
          </span>
          <span className="skills__skill" data-name="React.js">
            <FontAwesomeIcon className="skills__skill__icon" icon={faReact} />
          </span>
          <span className="skills__skill" data-name="git">
            <FontAwesomeIcon className="skills__skill__icon" icon={faGit} />
          </span>
          <span className="skills__skill" data-name="npm">
            <FontAwesomeIcon className="skills__skill__icon" icon={faNpm} />
          </span>
          <span className="skills__skill" data-name="figma">
            <FontAwesomeIcon className="skills__skill__icon" icon={faFigma} />
          </span>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Skills;
