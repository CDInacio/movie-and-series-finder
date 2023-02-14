import { imdb } from "../../types/imdb";
import { Card } from "../Card/card";

interface DataProps {
  data: imdb[];
}

export function DataList({ data }: DataProps) {
  return (
    <>
      {data?.map((item) => (
        <Card key={item.imdbID} item={item} />
      ))}
    </>
  );
}
