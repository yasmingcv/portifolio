import { Link } from "react-router-dom";
import home from "../assets/home.png";
import about from "../assets/about.png";
import projects from "../assets/projects.png";
import contact from "../assets/contact.png";

export default function Navbar() {
  return (
    <nav className="h-4/5 w-14 flex flex-col justify-evenly bg-primary rounded-3xl m-7 items-center">
      <Link to="/">
        <img
          src={home}
          alt="Home"
          className="h-5 object-contain cursor-pointer hover:scale-125 transition-all duration-1000"
        />
      </Link>
      <Link to="/sobre">
        <img
          src={about}
          alt="About"
          className="h-5 object-contain cursor-pointer hover:scale-125 transition-all duration-1000"
        />
      </Link>
      <Link to="/projetos">
        <img
          src={projects}
          alt="Projects"
          className="h-5 object-contain cursor-pointer hover:scale-125 transition-all duration-1000"
        />
      </Link>
      <Link to="/contato">
        <img
          src={contact}
          alt="Contact"
          className="h-5 object-contain cursor-pointer hover:scale-125 transition-all duration-1000"
        />
      </Link>
    </nav>
  );
}
