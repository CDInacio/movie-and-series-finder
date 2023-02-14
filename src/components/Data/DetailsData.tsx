interface DataProps {
  BoxOffice: string | undefined;
  Awards: string | undefined;
  Witer: string | undefined;
  Conutry: string | undefined;
}

export function DetailsData({ BoxOffice, Awards, Witer, Conutry }: DataProps) {
  return (
    <div className="mt-5 text-sm xl:text-base">
      {Conutry ? (
        <div className="flex ">
          <p className="font-semibold  mr-5 mb-1">País: </p>
          <p>{Conutry} </p>
        </div>
      ) : null}
      {BoxOffice ? (
        <div className="flex ">
          <p className="font-semibold  mr-5 mb-1">Bilheteria: </p>
          <p>{BoxOffice} </p>
        </div>
      ) : null}
      {Awards ? (
        <div className="flex ">
          <p className="font-semibold  mr-5 mb-1">Premiações: </p>
          <p>{Awards} </p>
        </div>
      ) : null}
      {Witer ? (
        <div className="flex ">
          <p className="font-semibold  mr-5 mb-1">Escritores: </p>
          <p>{Witer} </p>
        </div>
      ) : null}
    </div>
  );
}
