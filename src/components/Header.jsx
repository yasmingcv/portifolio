export default function Header(){
    return ( 
        <header className="flex w-4/5 p-8 bg-transparent justify-between items-center font-bold">
            <h1 className="text-white">
                {"<yasmingcv/>"}
            </h1>
            <nav className="text-white flex justify-between gap-6">
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
            </nav>
        </header>
    )
}