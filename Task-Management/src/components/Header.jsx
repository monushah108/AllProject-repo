import "boxicons";
import { Link } from "react-router-dom";
import Storage from "../hooks/LocalStorage";

export default function Header() {
  const [theme,setTheme] = Storage('theme',false)

  return (
    <>
      <header className="flex items-center justify-around py-2 pt-4 shadow-ms  border-b">
        <h1 className="text-sm font-semibold">To-Do List</h1>
        <nav className="flex items-center gap-10 relative ">
          <ul className="flex items-center gap-5  ">
            <li className="cursor-pointer hover:scale-90 transition ease-in-out delay-75  duration-300">
              <Link to='/'>
              <box-icon name="list-ul" size="22px"></box-icon>
              </Link>
            </li>

          </ul>
        </nav>
      </header>
    </>
  );
}
