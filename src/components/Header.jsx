export default function Header() {
  return (
    <header className="w-full flex justify-center">
      <div className="flex w-4/5 p-8 bg-transparent justify-between items-center font-bold">
        <h1 className="text-white">{"<yasmingcv/>"}</h1>
        <nav className="text-white flex justify-between gap-6">
          <i className="fa-brands fa-github hover:text-primary transition-all duration-1000 cursor-pointer"></i>
          <i className="fa-brands fa-linkedin hover:text-primary transition-all duration-1000 cursor-pointer"></i>
          <i className="fa-brands fa-instagram hover:text-primary transition-all duration-1000 cursor-pointer"></i>
        </nav>
      </div>
    </header>
  );
}
