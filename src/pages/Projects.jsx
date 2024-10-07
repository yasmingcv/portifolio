import { useEffect, useState } from "react";
import CardProject from "../components/CardProject";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setProjects(jsonData))
      .catch((err) => console.log("Erro ao carregar projetos", err));
  }, [])
  
  return (
    <div className="text-white flex flex-col items-center w-full h-full gap-24">
      <h3 className="font-bold text-6xl text-white">Projetos</h3>
      <div className=" w-fit flex flex-wrap gap-4 justify-center">
        {projects.map((project) => {
          return <CardProject
            name={project.name}
            image={project.image}
            link={project.link}
            description={project.description}
            slug={project.slug}
          />
        })}
      </div>
    </div>
  );
}
