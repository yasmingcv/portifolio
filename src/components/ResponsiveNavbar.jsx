import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="hidden md:absolute md:flex max-md:block  px-4 sm:items-center sm:justify-between">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <button
            type="button"
            className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="hs-navbar-example"
            aria-label="Toggle navigation"
          >
            {!isOpen && (
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            )}
            {isOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="white"
                width="24"
                height="24"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            )}
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
      <div
        id="hs-navbar-example"
        className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow ${
          isOpen ? "block" : "hidden"
        }`}
        aria-labelledby="hs-navbar-example-collapse"
      >
        <div className="absolute p-5 rounded-lg bg-white z-20 flex flex-col gap-5 md:flex-row md:items-center md:justify-end md:mt-0 md:ps-5">
          <Link to="/">
            <a
              alt="Home"
              className="h-5 object-contain cursor-pointer hover:scale-125 transition-all duration-1000"
              onClick={toggleMenu}
            >
              Home
            </a>
          </Link>
          <Link to="/sobre">
            <a
              alt="About"
              className="h-5 object-contain cursor-pointer hover:scale-125 transition-all duration-1000"
              onClick={toggleMenu}
            >
              Sobre
            </a>
          </Link>
          <Link to="/projetos">
            <a
              alt="Projects"
              className="h-5 object-contain cursor-pointer hover:scale-125 transition-all duration-1000"
              onClick={toggleMenu}
            >
              Projetos
            </a>
          </Link>
          <Link to="/contato">
            <a
              alt="Contact"
              className="h-5 object-contain cursor-pointer hover:scale-125 transition-all duration-1000"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
