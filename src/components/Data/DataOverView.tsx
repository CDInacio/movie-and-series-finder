import { useState } from "react";

import { Link } from "react-router-dom";
import { imdb } from "../../types/imdb";
import { DetailsData } from "./DetailsData";
import { GeneralData } from "./GeneralData";

interface DataProps {
  data: imdb;
}

interface MenuProps {
  onChooseDisplayType: (type: string) => void;
  type: string;
}

function Menu({ onChooseDisplayType, type }: MenuProps) {
  return (
    <div className="flex mt-5 text-base xl:text-xl ">
      <p
        onClick={() => onChooseDisplayType("Geral")}
        className={`cursor-pointer mr-10 transition ease duration-300 ${
          type === "Geral" ? "border-b-4 border-sky-400 font-bold" : "font-thin"
        }`}
      >
        Geral
      </p>
      <p
        onClick={() => onChooseDisplayType("Detalhes")}
        className={`cursor-pointer mr-10 transition ease duration-300 ${
          type === "Detalhes"
            ? "border-b-4 border-sky-400 font-bold"
            : "font-thin"
        }`}
      >
        Detalhes
      </p>
    </div>
  );
}

export function DataOverView({ data }: DataProps) {
  const [displayType, setDisplayType] = useState<string>("Geral");

  return (
    <>
      <div className="bg-white p-5 min-h-[820px] lg:min-h-[400px]  shadow-md rounded-md mt-[20px] lg:mt-[100px]">
        <div className="flex flex-col lg:flex-row text-neutral-800 ">
          <div className="w-full lg:w-[50%] h-[400px] rounded-sm overflow-hidden">
            <img
              className="object-cover h-full w-full rounded-md"
              src={data?.Poster}
            />
          </div>

          <div className=" w-full mt-5 lg:mt-0 lg:ml-5">
            <div className="flex items-center ">
              <h3 className="text-base md:text-xl lg:text-2xl mt-3 mb-1 xl:text-2xl font-bold">
                {data?.Title} ({data?.Year})
              </h3>
              <span className="text-xs md:text-lg xl:text-xl md:mb-0 ml-5 font-bold bg-sky-400 text-white rounded-full p-3 ">
                {data?.imdbRating}
              </span>
            </div>
            <div>
              <span className="text-sm xl:text-base font-medium">
                {data?.Released} | {data?.Runtime}
              </span>
            </div>
            <Menu type={displayType} onChooseDisplayType={setDisplayType} />
            {displayType === "Geral" ? (
              <GeneralData
                Actors={data?.Actors}
                Director={data?.Director}
                Genre={data?.Genre}
                Plot={data?.Plot}
              />
            ) : (
              <DetailsData
                BoxOffice={data?.BoxOffice}
                Awards={data?.Awards}
                Witer={data?.Writer}
                Conutry={data?.Country}
              />
            )}
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="bg-sky-400 hover:bg-sky-500 transition ease duration-300  px-5 py-2 rounded-md font-bold text-xl mt-5">
          Voltar
        </button>
      </Link>
    </>
  );
}
