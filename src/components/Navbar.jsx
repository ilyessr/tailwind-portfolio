import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { links } from "../data/links";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (href) => {
    setActive(href);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEntries = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleEntries, {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    });

    links.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-emerald-50">
      <div className="align-element py-4 flex items-center justify-between gap-6 relative">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Ilyess<span className="text-emerald-600">Dev</span>
        </h2>

        <button
          type="button"
          className="sm:hidden rounded-lg p-2 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>

        <ul
          className={`absolute left-0 right-0 top-full bg-white shadow-md rounded-2xl px-6 transition-all duration-300 sm:static sm:flex sm:h-auto sm:translate-y-0 sm:opacity-100 sm:bg-transparent sm:shadow-none sm:py-0 sm:px-0 sm:gap-8 sm:items-center sm:flex-row sm:pointer-events-auto sm:max-h-none sm:overflow-visible ${
            isOpen
              ? "opacity-100 translate-y-1 py-5 max-h-60 pointer-events-auto"
              : "pointer-events-none opacity-0 -translate-y-2 max-h-0 overflow-hidden"
          }`}
        >
          {links.map((link) => {
            const { id, href, text } = link;

            return (
              <li key={id} className="py-2 sm:py-0">
                <a
                  href={href}
                  onClick={() => handleClick(href)}
                  className={`capitalize text-base sm:text-lg tracking-wide transition duration-200 ${
                    active === href
                      ? "text-emerald-600 font-semibold"
                      : "text-slate-700 hover:text-emerald-600"
                  }`}
                >
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
