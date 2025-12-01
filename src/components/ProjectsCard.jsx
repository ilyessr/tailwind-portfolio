import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({
  live,
  image,
  github,
  title,
  description,
  tags = [],
}) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-50 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative group">
        <img
          src={image}
          alt={`Preview of ${title}`}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <div className="flex gap-2">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="icons-card"
              aria-label={`${title} live`}
            >
              <TbWorldWww className="h-6 w-6" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="icons-card"
              aria-label={`${title} code`}
            >
              <FaGithubSquare className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-slate-600  flex-1">{description}</p>
      </div>
    </article>
  );
};

export default ProjectsCard;
