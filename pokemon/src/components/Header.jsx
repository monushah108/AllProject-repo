import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";
import { ThemeContext } from "../contexts/Theme";
import { PokemonFinderContext } from "../contexts/SearchPokemon";

export default function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [FindPokemon, setFindPokemon] = useContext(PokemonFinderContext);
  const ChangeTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("isDarkMode", !isDark);
  };

  return (
    <header className={`flex items-center justify-between p-4 shadow relative bg-white ${isDark && 'dark:bg-gray-900 text-white'} `}>
      <div>
        <img className="w-5 md:w-12 bg-white rounded-full" src={logo} alt="" />
      </div>

      <div className="bg-sky-100 rounded px-1 flex items-center">
        <input
          className={`p-2 placeholder:text-sm placeholder:font-normal outline-none ${isDark && ' text-black'} `}
          type="text"
          placeholder="Search Pokemon.."
          onChange={(e) => setFindPokemon(e.target.value)}
        />
        <button>
          <IoIosSearch className="text-lg text-white font-bold" />
        </button>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-5">
          <li
            onClick={ChangeTheme}
            className="hover:scale-125 transition-transform duration-100 ease-in-out"
          >
            {isDark ? (
              <MdOutlineWbSunny className="text-lg" />
            ) : (
              <FaRegMoon className="text-lg" />
            )}
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MdMenu className="text-xl cursor-pointer" />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`absolute top-full right-4 mt-2 bg-white shadow-md p-4 rounded z-10  md:hidden ${isDark && 'dark:bg-gray-900 text-white'}`}>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-2">
              <IoIosHeartEmpty className="text-lg" />
              Favorites
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={ChangeTheme}
            >
              {isDark ? (
                <>
                  <MdOutlineWbSunny className="text-lg" /> Light Mode
                </>
              ) : (
                <>
                  <FaRegMoon className="text-lg" /> Dark Mode
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
