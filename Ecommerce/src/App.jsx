import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Suspense } from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="max-w-[1250px] m-auto p-1 md:px-3 text-[14px] md:text-[16px] ">
        <Suspense fallback={<div>Loadding...</div>}>
          <Header />
          <Outlet />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default App;
