// React
import React from "react";

// Images
import Ale404 from "../../../assets/Errors/ale404.png";

// Icons
import { HiHome } from "react-icons/hi";

const NotFound = () => {

  const handleClickSecret = () => {
    const alertMessage = 'Use o código 404! no botão da aba "SEGREDOS"... se você for capaz de achar onde ela está escondida, é claro...';
    window.alert(alertMessage);
  };

  return (
    <div>
      <section className="header min-h-screen w-full flex align-center">
        <div className="flex align-center flex-col mx-auto">
          <h2 className="text-center text-8xl mt-5 text-cdln-blue-100 animate__animated animate__bounceInDown">
            404 Not Found
          </h2>
          <img
            src={Ale404}
            className="m-3 max-w-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl border-sky-100 border-8 rounded-md self-center animate__animated animate__fadeIn"
          />
          <p className="text-center text-cdln-blue-100 text-4xl animate__animated animate__fadeIn">
            Puts! Não foi possível encontrar a página que você estava
            procurando<span onClick={handleClickSecret} style={{cursor: 'pointer'}}>!</span>
          </p>
          <a href="/home" className="self-center">
            <button className=" m-5 bg-cdln-blue-50 hover:bg-cdln-blue-100 text-cdln-blue-800 font-bold py-4 px-6 border-2 border-cdln-blue-400 rounded-3xl shadow-lg self-center flex flex-row items-center gap-3 text-2xl max-w-xl animate__animated animate__backInUp">
              <HiHome />
              Retornar à Home
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
