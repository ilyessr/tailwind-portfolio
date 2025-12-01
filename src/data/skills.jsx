import { nanoid } from "nanoid";
import { FaReact, FaNodeJs, FaJs, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiTypescript, SiMongodb } from "react-icons/si";

export const skills = [
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in building front-end applications with React, using reusable components and modern hooks.",
  },
  {
    id: nanoid(),
    title: "Next.js",
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: "Experience with Next.js for creating fast and optimized web applications using server-side rendering and static site generation.",
  },
  {
    id: nanoid(),
    title: "TypeScript / JavaScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Solid understanding of JavaScript and TypeScript for writing clean, maintainable, and type-safe code.",
  },
  {
    id: nanoid(),
    title: "Node.js & NestJS",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Practical experience with Node.js and NestJS for building structured, maintainable, and scalable backend applications.",
  },
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Strong foundation in semantic HTML and modern CSS. Skilled in building responsive and accessible layouts with Tailwind CSS.",
  },
  {
    id: nanoid(),
    title: "Databases (MongoDB & PostgreSQL)",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Experience working with MongoDB and PostgreSQL for database design, data modeling, and query optimization.",
  },
];
