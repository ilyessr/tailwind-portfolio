import { skills } from "../data/skills";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="bg-slate-50 py-20" id="skills">
      <div className="align-element">
        <SectionTitle text="Tech Stack" />
        <p className="mt-6 text-slate-600">
          I work across the full stack, focusing on building reliable and
          maintainable applications. My experience ranges from modern frontend
          development to backend systems handling complex logic and data.
        </p>

        <div className="py-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
