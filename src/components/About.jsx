import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {
  const cvUrl = `${import.meta.env.BASE_URL}cv-ilyess-rachedi.pdf`;

  return (
    <section id="about" className="bg-white py-20">
      <div className="align-element grid items-center gap-12 md:grid-cols-2">
        <img
          src={aboutSvg}
          alt="Developer working illustration"
          className="w-full max-w-lg h-auto drop-shadow-xl"
        />

        <article className="p-8">
          <SectionTitle text="Full-Stack Engineer with a Scientific Background" />
          <p className="text-slate-600 mt-6">
            I’m a full-stack developer with a background in sciences, focused on
            building reliable and meaningful applications. I enjoy working on
            products with complex logic, where understanding the problem deeply
            is just as important as writing the code.
          </p>
          <p className="text-slate-600 mt-4">
            I work mainly with <strong>React</strong> and{" "}
            <strong>TypeScript</strong> on the front end, and{" "}
            <strong>Node.js</strong> or <strong>Python</strong> on the back end.
            I care about clean, maintainable code and creating smooth user
            experiences, especially for tools used in demanding environments.
          </p>
          <a
            href={cvUrl}
            download="CV-Ilyess-Rachedi.pdf"
            className="flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-200 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-emerald-500 w-full sm:w-fit m-auto mt-3"
          >
            Download CV
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
