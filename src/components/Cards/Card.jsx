import { IoGameController } from "react-icons/io5";
import { MdPhonelinkErase } from "react-icons/md";
import { BsPlayCircleFill } from "react-icons/bs";

export default function Card({ image, name, children, url, type, ...props }) {
  const { available = true, mobile = false } = props;
  return (
    <article className="rounded-md overflow-hidden relative max-w-sm group shadow-md mx-auto transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="w-full h-auto transform hover:scale-110 duration-200"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-7 my-auto pb-12 bg-cdln-blue-50">
        <h1 className="text-4xl font-semibold text-gray-800 mt-4">{name}</h1>
        <p className="text-lg md:text-2xl text-gray-400 mt-4 leading-relaxed">
          {children}
        </p>
      </div>
      {available ? (
        <a href={url} target="_blank">
          {mobile ? (
            <div className="flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-200 group-hover:text-cdln-blue-50 bg-cdln-blue-600 hover:bg-cdln-blue-700">
              {type === "game" ? (
                <>
                  <IoGameController size={"1.5em"} />
                  <h2 className="text-center text-xl tracking-widest uppercase">
                    Jogar
                  </h2>
                </>
              ) : (
                <>
                  <BsPlayCircleFill size={"1.5em"} />
                  <h2 className="text-center text-xl tracking-widest uppercase">
                    Assistir
                  </h2>
                </>
              )}
            </div>
          ) : (
            <>
              <div className="hidden md:flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-200 group-hover:text-cdln-blue-50 bg-cdln-blue-600 hover:bg-cdln-blue-700">
                {type === "game" ? (
                  <>
                    <IoGameController size={"1.5em"} />
                    <h2 className="text-center text-xl tracking-widest uppercase">
                      Jogar
                    </h2>
                  </>
                ) : (
                  <>
                    <BsPlayCircleFill size={"1.5em"} />
                    <h2 className="text-center text-xl tracking-widest uppercase">
                      Assistir
                    </h2>
                  </>
                )}
              </div>
              <div className="flex md:hidden gap-3 justify-center border-t py-8 items-center text-white bg-gray-500">
                <MdPhonelinkErase size={"1.5em"} />
                <h2 className="text-sm tracking-widest uppercase">
                  Indisponível para dispositivos móveis
                </h2>
              </div>
            </>
          )}
        </a>
      ) : (
        <>
          {type === "game" ? (
            <>
              <a href="https://youtu.be/mc5ub3TULqU?t=16" target="_blank">
              <div className="flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-50 bg-gray-500">
                <h2 className="text-center text-xl tracking-widest uppercase">
                  Em Breve
                </h2>
              </div>
            </a>
            </>
          ) : (
            <a href="https://www.youtube.com/watch?v=ybdFFSfm6Dk" target="_blank">
            <div className="flex gap-3 justify-center border-t py-8 items-center text-cdln-blue-50 bg-gray-500">
              <h2 className="text-center text-xl tracking-widest uppercase">
                Em Breve (Assistir Trailer)
              </h2>
            </div>
          </a>
          )}
        
        </>
        
      )}
    </article>
  );
}
