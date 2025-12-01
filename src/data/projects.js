import { nanoid } from "nanoid";
import MovieAppImg from "../assets/movie-browsing-app.png";

export const projects = [
  {
    id: nanoid(),
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with React and Tailwind CSS, featuring smooth animations and a modular component structure.",
    image:
      "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Vite", "Tailwind CSS"],
    live: "https://ilyessr.github.io/tailwind-portfolio/",
    github: "https://github.com/ilyessr/tailwind-portfolio",
  },
  {
    id: nanoid(),
    title: "Movie Browsing App",
    description:
      "Discover, search, and browse movies with details, casts, and ratings from TMDB. The app is responsive, fast, and keeps data fresh with smart caching for a smooth experience on desktop and mobile.",
    image: MovieAppImg,
    tags: ["React", "Typescript", "TanStack", "React Router"],
    live: "https://ilyessr.github.io/movie-browsing-app/",
    github: "https://github.com/ilyessr/movie-browsing-app",
  },
];
