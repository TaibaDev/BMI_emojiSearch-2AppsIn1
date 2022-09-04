import React from "react";
// import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from 'react-router-dom';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
             to="/"
            >
              TAIBA.DEV
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              <li className="nav-item text-xl">
              <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/">
                  <LaptopChromebookIcon className="text-lg leading-lg text-white opacity-50"/><span className="ml-1">Digital Watch</span>
                </NavLink>
              </li>

              <li className="nav-item text-xl">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/bmi-calc">
                  <LaptopChromebookIcon className="text-lg leading-lg text-white opacity-75"/><span className="ml-1">BMI</span>
                </NavLink>
              </li>

              <li className="nav-item text-xl">
              <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/counter">
                  <LaptopChromebookIcon className="text-lg leading-lg text-white opacity-50"/><span className="ml-1">Counter</span>
                </NavLink>
              </li>

              <li className="nav-item text-xl">
              <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/emoji">
                  <LaptopChromebookIcon className="text-lg leading-lg text-white opacity-50"/><span className="ml-1">Emoji</span>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}