import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Input } from "../components/Input/Input";
import { api } from "../services/api";
import { imdb } from "../types/imdb";
import { DataList } from "../components/DataList/DataList";

const errorNotify = (message: string) => toast.error(message);
const loadingNotify = (message: string) => toast.loading(message);

export function Home() {
  const [searchString, setSearchString] = useState<string>("");
  const [data, setData] = useState<imdb[]>([]);

  async function handleSearch() {
    setData([]);

    if (!searchString) {
      errorNotify("Digite algo!");
      return;
    }

    try {
      loadingNotify("Buscando resultados");
      const response = await api.get(
        `?apikey=${import.meta.env.VITE_API_KEY}&s=${searchString}`
      );

      if (response.data.Response === "False") {
        toast.dismiss();
        errorNotify("Não houve resultados para a sua busca");
        return;
      }
      toast.dismiss();
      setData(response.data.Search);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Input onSetSearchString={setSearchString} onSearch={handleSearch} />
      <DataList data={data} />
      <Toaster position="bottom-center" />
    </>
  );
}
