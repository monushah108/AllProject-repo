import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <main className="max-w-[1200px] m-auto  p-2 font-Nunito relative ">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default App;
