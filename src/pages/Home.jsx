export default function Home() {
  return (
    <div className="text-white w-full h-full flex items-center justify-center">
      <div className="md:max-w-7xl grid grid-cols-2 max-w-5xl items-center justify-between text-right gap-4 px-20 max-lg:grid-cols-1 max-lg:justify-center max-lg:text-center">
        <div>
          <img
            className="h-80 w-auto object-cover max-lg:w-full max-lg:h-auto"
            src="/public/assets/homeimg.png"
            alt="Imagem de perfil"
          />
          {/* <div className="border border-solid border-white p-4 absolute left-0 -translate-x-10 top-10 h-96 w-96 z-10 pointer-events-none"></div> */}
        </div>

        <div className="flex flex-col gap-10">
          <p className="text-lg">
            Olá, me chamo{" "}
            <span className="font-bold text-lg">Yasmin Gonçalves</span>
          </p>
          <h1 className="font-bold text-6xl max-sm:text-5xl">Full Stack</h1>
          <p className="text-lg">
            Sou desenvolvedora Full Stack, apaixonada por tecnologia e
            aprendizado contínuo. Estou sempre em busca de evolução e me dedico
            a realizar tudo com excelência.
          </p>
        </div>
      </div>
    </div>
  );
}
