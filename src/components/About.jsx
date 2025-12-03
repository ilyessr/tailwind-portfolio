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
          <SectionTitle text="Tea-Powered Developer" />
          <p className="text-slate-600 mt-6 ">
            I'm a junior full-stack developer focused on transforming ideas into
            reliable, user-friendly web applications. I care about clean design,
            maintainable code, and continuous learning.
          </p>
          <p className="text-slate-600 mt-4 ">
            From <strong>React</strong> and <strong>Next</strong>.js on the
            front end to <strong>Node.js</strong> and <strong>NestJS</strong> on
            the back end, I enjoy building modern, fast, and seamless digital
            experiences.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
