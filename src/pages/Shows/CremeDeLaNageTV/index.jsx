// React
import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player/youtube";

// React Routes
import { Link, useNavigate } from "react-router-dom";

// Components
import EpisodesList from "../../../components/Episodes/EpisodesList";
import cdlntvList from "../CremeDeLaNageTV/videoData";

// Images
import CDLNTVBG from "../../../assets/BackgroundImages/CDLNTVBG.png";
import ShowsBGsm from "../../../assets/BackgroundImages/ShowsBG-sm.png";
import ArrowDown from "../../../assets/arrow-down.svg";

function CDLNTV() {
  const [activeList, setActiveList] = useState(cdlntvList[0].title);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const navigateToEpisode = (url) => {
    navigate(url);
  };

  const toggleList = (listName) => {
    setActiveList(listName);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <section className="header h-screen">
        <div className="h-full relative">
          <img
            src={CDLNTVBG}
            className="hidden lg:block w-full h-full object-cover absolute"
          />
          <img
            // Mudar foto para uma versão responsiva depois
            src={CDLNTVBG}
            className="lg:hidden w-full h-full object-cover absolute"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-50 text-8xl md:text-9xl font-bold text-center animate__animated animate__jackInTheBox">
              Creme de la Nage TV
            </h1>
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-normal mt-5 text-center animate__animated animate__slideInUp">
              Creme na TV? Ahh vamo nessa!
            </h2>
            <div className="w-full justify-center items-center pt-20 animate__animated animate__fadeIn">
              <a href="#main-section">
                <img src={ArrowDown} className="mx-auto h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="main-section">
        <div className="hero h-auto lg:min-h-screen p-10">
          <h1 className="text-4xl md:text-7xl text-cdln-blue-50 font-medium pb-4">
            Lista de Episódios
          </h1>
          <button
            onClick={toggleDropdown}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-cdln-blue-600 hover:bg-cdln-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            {activeList ?? "Selecionar Temporada"}
            <svg
              className={`w-2.5 h-2.5 ml-2.5 ${
                isDropdownOpen ? "transform rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-2">
              <ul className="py-2 text-lg text-gray-700 dark:text-gray-200">
                {cdlntvList.map((listName) => (
                  <li key={listName.title}>
                    <a
                      href="#main-section"
                      onClick={() => toggleList(listName.title)}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {listName.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <EpisodesList
              showName="cdlntv"
              episodes={(cdlntvList.find((v) => v.title === activeList) || {}).videos || []}
            />
        </div>
      </section>
    </div>
  );
}

export default CDLNTV;
