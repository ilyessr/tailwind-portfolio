# Tailwind + Vite Portfolio

A simple, responsive personal website with sections like Hero, Skills, About, and Projects.
Includes smooth animations, sticky navigation, and a mobile-friendly layout.

## Tech Stack

- React + Vite
- Tailwind CSS v4
- react-icons, nanoid

## Project Structure

src/
│
├── components/ → Hero, Navbar, Skills, About, Projects, SectionTitle, Cards
├── data/ → skills, projects, and links
├── assets/ → SVGs and images
├── index.css → Tailwind setup + custom classes
├── App.jsx

Other files:

vite.config.js: Vite setup + base for GitHub Pages

.github/workflows/deploy.yml: GitHub Actions deployment config

#### Repeating Styles

index.css

```css
@layer components {
  .align-element {
    @apply mx-auto max-w-7xl px-8;
  }
}
```

- replace in Hero and Navbar

#### Skills

- explore skills array in data.jsx
- create Skills,SkillsCard and SectionTitle components
- setup return and render in App.jsx

Skills.jsx

```js
import SkillsCard from "./SkillsCard";
import { skills } from "../data";
import SectionTitle from "./SectionTitle";
const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack " />

      <div class=" py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
```

SectionTitle.jsx

```js
const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize">{text}</h2>
    </div>
  );
};
export default SectionTitle;
```

SkillsCard.jsx

```js
const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className="h-16 w-16">{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
```

#### Global Styles

index.html

```html
<html lang="en" class="bg-slate-50 scroll-smooth"></html>
```

#### About

- create About component and render in App.jsx

```js
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section class="bg-white py-20" id="about">
      <div class="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
```

#### Projects

- explore "projects" array in data.jsx
- create Projects and ProjectsCard components
- setup return and render in App.jsx

Projects.jsx

```js
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
```

ProjectsCard.jsx

```js
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md block hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64 "
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
```

#### Extra Challenge

- setup projects in CMS
