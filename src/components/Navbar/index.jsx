// React
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

// Images
import LogoNav from "../../assets/Logos/ale-logo-nav.png";

// Icons
import { IoGameController } from "react-icons/io5";
import {
  HiHome,
  HiFilm,
  HiShoppingBag,
  HiInformationCircle,
  HiNewspaper
} from "react-icons/hi";

// Components
import NavbarButton from "./NavbarButton";
import HambugerMenuButton from "./HamburgerMenuButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-cdln-blue-900 border-b-2 border-cdln-blue-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full border-2 border-solid border-white "
                  src={LogoNav}
                  alt="LogoNav"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavbarButton href="/" text="Home" BtnIcon={HiHome} />
                  <NavbarButton href="/games" text="Jogos" BtnIcon={IoGameController}/>
                  <NavbarButton href="/shows" text="Séries" BtnIcon={HiFilm} />
                  <NavbarButton href="/store" text="Loja" BtnIcon={HiShoppingBag}/>
                  <NavbarButton href="/blog" text="Blog" BtnIcon={HiNewspaper} />
                  <NavbarButton href="/about" text="Sobre Nós" BtnIcon={HiInformationCircle}/>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-cdln-blue-700 
                inline-flex 
                items-center 
                justify-center 
                p-2 
                rounded-md 
                text-white  
                focus:outline-none 
                focus:ring-2 
                focus:ring-offset-2 
                focus:ring-offset-gray-800 
                focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <HambugerMenuButton href='/home' text='Home' current={true} BtnIcon={HiHome} />
              <HambugerMenuButton href='/games' text='Jogos' BtnIcon={IoGameController} />
              <HambugerMenuButton href='/shows' text='Séries' BtnIcon={HiFilm} />
              <HambugerMenuButton href='/store' text='Loja' BtnIcon={HiShoppingBag} />
              <HambugerMenuButton href='/blog' text='Blog' BtnIcon={HiNewspaper} />
              <HambugerMenuButton href='/about' text='Sobre Nós' BtnIcon={HiInformationCircle} />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
