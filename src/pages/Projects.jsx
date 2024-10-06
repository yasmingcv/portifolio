import CardProject from "../components/CardProject";

export default function Projects() {
  return (
    <div className="text-white flex flex-col items-center w-full h-full gap-24">
      <h3 className="font-bold text-6xl text-white">Projetos</h3>
      <div className=" w-fit flex flex-wrap gap-4 justify-center">
        <CardProject
          name="Projeto1"
          image="https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg"
          link="https://www.google.com"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales dolor non urna condimentum, finibus ornare massa congue. Donec id turpis sapien."
        />
        <CardProject
          name="Projeto1"
          image="https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg"
          link="https://www.google.com"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales dolor non urna condimentum, finibus ornare massa congue. Donec id turpis sapien."
        />
        <CardProject
          name="Projeto1"
          image="https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg"
          link="https://www.google.com"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales dolor non urna condimentum, finibus ornare massa congue. Donec id turpis sapien."
        />
        <CardProject
          name="Projeto1"
          image="https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg"
          link="https://www.google.com"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales dolor non urna condimentum, finibus ornare massa congue. Donec id turpis sapien."
        />
        <CardProject
          name="Projeto1"
          image="https://imgv3.fotor.com/images/side/astronaut-in-space-looking-up-at-the-stars-generated-by-Fotor-AI.jpg"
          link="https://www.google.com"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales dolor non urna condimentum, finibus ornare massa congue. Donec id turpis sapien."
        />
      </div>
    </div>
  );
}
