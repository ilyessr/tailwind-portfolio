import { projects } from "../data/projects";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="align-element">
        <SectionTitle text="Projects" />
        <p className="mt-6 text-slate-600 ">
          Here are some projects I built for fun and to challenge my skills.
        </p>
        <div className="py-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
