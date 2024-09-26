export default function Home() {
  return (
    <div className="text-white w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-2 max-w-5xl items-center justify-around text-right gap-4 px-20">
        <div className="relative">
          <img
            className="h-96 w-96 object-cover"
            src="https://static.vecteezy.com/ti/fotos-gratis/t2/26408779-mulher-movel-camera-casa-emocao-pessoa-selfie-blogueiro-telefone-smartphone-foto.jpg"
            alt="Descrição"
          />
          <div className="border border-solid border-white p-4 absolute left-0 -translate-x-10 top-10 h-96 w-96 z-10 pointer-events-none"></div>
        </div>

        <div className="flex flex-col gap-10">
          <p className="text-lg">
            Olá, me chamo <span className="font-bold text-lg">Yasmin Gonçalves</span>
          </p>
          <h1 className="font-bold text-6xl">Desenvolvedora Fullstack</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
