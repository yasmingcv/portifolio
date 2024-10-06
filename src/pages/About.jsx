import CardFormation from "../components/CardFormation";

export default function About() {
  return (
    <div className="w-full h-full text-white flex flex-col gap-x-20 justify-center items-center">
      <div className="max-w-5xl">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim.
        </p>
        <div>
          <h3 className="font-bold text-2xl mt-5">FORMAÇÃO</h3>

          <div className="mt-5 flex flex-wrap gap-10">
            <CardFormation
              institution="FIAP"
              course="Engenharia de Software"
              time="2024 - 2027"
              description="Some quick example text to build on the card title and make up the
            bulk of the cards content."
              stacks={[
                "Python",
                "React",
                "Casos de Uso",
                "Arduino",
                "Storytelling"
              ]}
            />
            <CardFormation
              institution="SENAI"
              course="Desenvolvimento de Sistemas"
              time="2022 - 2023"
              description="Some quick example text to build on the card title and make up the
            bulk of the cards content."
              stacks={["HTML", "CSS", "Javascript", "MySQL", "Kotlin", "NodeJS"]}
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl mt-5">EXPERIÊNCIA</h3>

          <div className="mt-5 flex flex-wrap gap-10">
            <CardFormation
              institution="OKN"
              course="Estagiária de desenvolvimento web"
              time="05/2024 - PRESENTE"
              description="Some quick example text to build on the card title and make up the
            bulk of the cards content."
              stacks={[
                "Typescript",
                "NodeJS",
                "Docker",
                "PostgreSQL",
                "Javascript"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
