import MovieAppImg from "../assets/movie-browsing-app.png";
import JobTracker from "../assets/job-tracker.png";
import DevBoard from "../assets/dev-board.png";

export const projects = [
  {
    id: 1,
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
    id: 2,
    title: "Movie Browsing App",
    description:
      "Discover, search, and browse movies with details, casts, and ratings from TMDB. The app is responsive, fast, and keeps data fresh with smart caching for a smooth experience on desktop and mobile.",
    image: MovieAppImg,
    tags: ["React", "Typescript", "TanStack", "React Router"],
    live: "https://ilyessr.github.io/movie-browsing-app/",
    github: "https://github.com/ilyessr/movie-browsing-app",
  },
  {
    id: 3,
    title: "DevBoard – Kanban Project Management Platform",
    description:
      "A full-stack web app inspired by Trello/Jira to manage boards, columns, and cards with secure JWT authentication and HttpOnly refresh cookies.",
    image: DevBoard,
    tags: ["React", "TypeScript", "Django", "Frontend", "Backend"],
    live: "",
    github: "https://github.com/ilyessr/devboard",
  },

  {
    id: 4,
    title: "Job Tracker – Application Tracking Platform",
    description:
      "A full-stack web app to track and organize my job applications (roles, statuses, notes, and follow-up dates).",
    image: JobTracker,
    tags: ["React", "TypeScript", "NestJS", "Frontend", "Backend"],
    live: "https://ilyessr.github.io/job-tracker-frontend/",
    github: "https://github.com/ilyessr/job-tracker-frontend",
  },
  {
    id: 5,
    title: "BookTracker API",
    description:
      "A REST API to manage a personal book library, built with Spring Boot. It includes full CRUD, filtering by text/author/status, a dedicated status update endpoint, statistics, strong validation rules, and integration tests with MockMvc.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java 17", "Spring Boot", "Spring Data JPA", "H2", "Maven"],
    live: "",
    github: "https://github.com/ilyessr/booktracker",
  },
];
