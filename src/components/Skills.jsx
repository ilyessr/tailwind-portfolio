import { skills } from "../data/skills";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="bg-slate-50 py-20" id="skills">
      <div className="align-element">
        <SectionTitle text="tech stack" />
        <p className="mt-6  text-slate-600 ">
          A mix of front-end and back-end tools to prototype quickly, ship
          cleanly, and keep apps fast across all screen sizes.
        </p>

        <div className="py-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
