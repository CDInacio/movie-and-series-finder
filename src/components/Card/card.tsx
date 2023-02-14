import { Link } from "react-router-dom";
import { AnimatePresence } from "../AnimatePresence";

interface CardProps {
  item: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  };
}

export function Card({ item }: CardProps) {
  return (
    <Link
      to={`/${item.Type}/${item.imdbID}`}
      className="bg-white w-full md:w-[70%] xl:w-[60%] 2xl:w-[50%] p-3 mb-2 rounded-md text-neutral-800 shadow-md hover:bg-neutral-200 hover:shadow-none transition ease duration-300 cursor-pointer"
    >
      <AnimatePresence>
        <div className="flex">
          <div className="h-[150px] max-w-[100px]  rounded-sm overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-sm"
              src={item.Poster}
            />
          </div>
          <div className="ml-5">
            <h3 className="flex flex-col font-bold text-base md:text-lg xl:text-xl ">
              {item.Title}
            </h3>
            <div className="text-sm md:text-md font-medium">
              <p>{item.Year}</p>
              <p>{item.Type}</p>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </Link>
  );
}
