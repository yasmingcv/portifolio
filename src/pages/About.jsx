import CardFormation from "../components/CardFormation";

export default function About() {
  return (
    <div className="w-full h-full text-white flex flex-col gap-x-20 justify-center items-center">
      <div className="max-w-5xl">
        <p className="text-lg">
          <strong>Olá! Meu nome é Yasmin e estou iniciando minha jornada na área de
          tecnologia.</strong>
          <br/>
          <br/>
          Finalizei o curso técnico de Desenvolvimento de Sistemas
          no SENAI Jandira, onde adquiri habilidades em diversas tecnologias.
          Tenho sólido conhecimento em Node.JS, modelagem e scripts utilizando
          MySQL. Além disso, tenho conhecimento e experiência em projetos
          utilizando Kotlin com Jetpack Compose e habilidades em JavaScript
          vanilla para o FrontEnd. Também possuo conhecimentos em Typescript,
          React, HTML, CSS, Java e programação orientada à objetos. Atualmente,
          estou cursando Engenharia de Software na FIAP, onde fui contemplada
          com uma bolsa de estudos integral, e em paralelo estagiando como
          Desenvolvedora Web na OKN, onde trabalho com Typescript, NodeJS e PostrgeSQL. Estou aprimorando meu inglês e atualmente
          estudo na Wizard em um nível intermediário. Fico à disposição para
          discutir possíveis oportunidades e compartilhar mais sobre mim!
        </p>
        <div>
          <h3 className="font-bold text-2xl mt-5">FORMAÇÃO</h3>

          <div className="mt-5 flex flex-wrap gap-10">
            <CardFormation
              institution="FIAP"
              course="Engenharia de Software"
              time="2024 - 2027"
              description="Consegui uma bolsa integral através da minha média no ENEM. Estou aprimorando habilidades em tecnologias que já tive contato e aprendendo coisas novas constantemente."
              stacks={[
                "Python",
                "React",
                "Casos de Uso",
                "Arduino",
                "Storytelling",
              ]}
            />
            <CardFormation
              institution="SENAI"
              course="Desenvolvimento de Sistemas"
              time="2022 - 2023"
              description="O pontapé inicial na minha jornada em tecnologia. Pude desenvolver um TCC robusto voltado para academias e aplicar todas as habilidades que obtive durante o curso."
              stacks={[
                "HTML",
                "CSS",
                "Javascript",
                "MySQL",
                "Kotlin",
                "NodeJS",
              ]}
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
              description="Atuo no time de desenvolvimento backend. O contato com projetos e clientes de diversos ramos têm me ensinado muito sobre adaptabilidade, resiliência e trabalho em equipe. Além de estar aprendendo e aprimorando na prática minhas habilidades em banco de dados, NodeJS, Typescript, Git/Gitlab, dentre outras diversas tecnologias."
              stacks={[
                "Typescript",
                "NodeJS",
                "Docker",
                "PostgreSQL",
                "Javascript",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
