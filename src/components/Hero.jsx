import React from "react";
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-emerald-50 via-white to-white py-20 sm:py-24"
    >
      <div className="align-element grid items-center gap-12 lg:grid-cols-2">
        <article className="space-y-6 text-center lg:text-left">
          <p className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-sm ring-1 ring-emerald-100">
            Full-stack developer
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              I'm Ilyess, and I love crafting smooth web experiences.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600  max-w-2xl mx-auto lg:mx-0">
              From design to deployment, I build elegant, fast, and accessible
              interfaces to ensure every user enjoys a clear and pleasant
              experience on both mobile and desktop.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-200 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 w-full sm:w-auto"
            >
              See my projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-6 py-3 font-semibold text-emerald-700 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 w-full sm:w-auto"
            >
              About me
            </a>
          </div>

          <div className="flex mt-4 justify-center lg:justify-start text-slate-500">
            <a
              href="https://github.com/ilyessr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition duration-200 hover:text-emerald-700 hover:bg-emerald-50"
            >
              <FaGithubSquare className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/ilyess-rachedi-023076195/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition duration-200 hover:text-emerald-700 hover:bg-emerald-50"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </article>

        <div className="relative">
          <div className="absolute -left-6 top-6 h-64 w-64 rounded-full bg-emerald-100 blur-3xl opacity-70" />
          <img
            src={heroImg}
            className="relative w-full max-w-xl mx-auto drop-shadow-2xl"
            alt="Illustration of a developer at work"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
