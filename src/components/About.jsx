import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="align-element grid items-center gap-12 md:grid-cols-2">
        <img
          src={aboutSvg}
          alt="Developer working illustration"
          className="w-full max-w-lg h-auto drop-shadow-xl"
        />

        <article className=" p-8 ">
          <SectionTitle text="Code & Coffee" />
          <p className="text-slate-600 mt-6 ">
            I'm a junior full-stack developer who enjoys turning ideas into
            functional and user-friendly web applications. Passionate about
            clean design, efficient code, and learning new technologies every
            day.
          </p>
          <p className="text-slate-600 mt-4 ">
            Whether it’s building with <strong>React</strong> and
            <strong> Next.js</strong> on the front-end or crafting APIs with{" "}
            <strong>Node.js</strong> and <strong>NestJS</strong> on the
            back-end, I like creating smooth, performant, and modern web
            experiences.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
