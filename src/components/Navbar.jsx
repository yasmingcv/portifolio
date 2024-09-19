import home from "../assets/home.png"
import about from "../assets/about.png"
import projects from "../assets/projects.png"
import contact from "../assets/contact.png"

export default function Navbar(){
    return (
        <nav className="h-4/5 w-4/5 flex-col justify-between bg-primary ">
            <img src={home} alt="Home" className="h-5"/>
            <img src={about} alt="About" className="h-5"/>
            <img src={projects} alt="Projects" className="h-5"/>
            <img src={contact} alt="Contact" className="h-5"/>
        </nav>
    )
}