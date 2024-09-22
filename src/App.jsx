import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="flex-1 p-8">
          <Outlet />
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
