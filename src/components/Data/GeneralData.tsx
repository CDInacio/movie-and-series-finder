interface DataProps {
  Plot: string | undefined;
  Actors: string | undefined;
  Genre: string | undefined;
  Director: string | undefined;
}

export function GeneralData({ Plot, Actors, Genre, Director }: DataProps) {
  return (
    <div className="text-sm xl:text-base">
      <div className="my-5  text-justify">
        <p>{Plot}</p>
      </div>
      <div className="mt-3">
        <div className="flex">
          <p className="font-semibold mr-5 mb-1">Atores: </p>
          <p>{Actors} </p>
        </div>
        <div className="flex">
          <p className="font-semibold  mr-5 mb-1">Gênero: </p>
          <p>{Genre} </p>
        </div>
        <div className="flex">
          <p className="font-semibold  mr-5 mb-1">Diretor: </p>
          <p>{Director} </p>
        </div>
      </div>
    </div>
  );
}
