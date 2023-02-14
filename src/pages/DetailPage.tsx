import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";

import { AnimatePresence } from "../components/AnimatePresence";
import { DataOverView } from "../components/Data/DataOverView";

import { api } from "../services/api";
import { imdb } from "../types/imdb";

const loadingNotify = (message: string) => toast.loading(message);

export function DetailPage() {
  const [data, setData] = useState<imdb>();

  const { type, id } = useParams();

  useEffect(() => {
    async function fetchSingleData() {
      try {
        loadingNotify("Carregando informações");
        const response = await api.get(
          `?apikey=${import.meta.env.VITE_API_KEY}&type=${type}&i=${id}`
        );
        setData(response.data);
        toast.dismiss();
      } catch (error) {}
    }
    fetchSingleData();
  }, []);

  return (
    <>
      {data ? (
        <>
          <AnimatePresence>
            <DataOverView data={data} />
          </AnimatePresence>{" "}
        </>
      ) : null}
      <Toaster position="bottom-center" />
    </>
  );
}
