import "./index.scss";
import Project from "../Project";
import { useLanguageContext } from "../Language/LanguageContext";
import projects from "../../data/data";
const Projects = () => {
  const { t } = useLanguageContext();
  return (
    <>
      <section id="projects" className="projects container">
        <h1 className="projects__title" role="heading">
          {t("Projects")}
        </h1>
        <div role="list" className="projects__list">
          {projects.map((project) => {
            return <Project {...project} key={project.id} />;
          })}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Projects;
