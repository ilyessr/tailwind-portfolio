import { nanoid } from "nanoid";
import { FaReact, FaNodeJs, FaHtml5, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiDjango } from "react-icons/si";

export const skills = [
  {
    id: nanoid(),
    title: "TypeScript / JavaScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Writing clean and maintainable code with a strong focus on type safety, readability, and long-term reliability.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Building modern front-end applications with React, focusing on component architecture, state management, and performance.",
  },
  {
    id: nanoid(),
    title: "Node.js & NestJS",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Developing backend services, designing structured APIs and handling complex business logic.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Using Python for data processing, scripting, and backend development in data-driven environments.",
  },
  {
    id: nanoid(),
    title: "Django",
    icon: <SiDjango className="h-16 w-16 text-emerald-500" />,
    text: "Building robust backend applications with a focus on APIs and data-driven features.",
  },
  {
    id: nanoid(),
    title: "Next.js",
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: "Developing performant applications with server-side rendering and optimized data fetching.",
  },
  {
    id: nanoid(),
    title: "Databases (MongoDB & PostgreSQL)",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Data modeling, query optimization, and working with relational and NoSQL databases.",
  },
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Building responsive and accessible interfaces with modern CSS and semantic HTML.",
  },
];
