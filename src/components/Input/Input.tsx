import React, { Dispatch, SetStateAction } from "react";

interface InputProps {
  onSearch: () => void;
  onSetSearchString: Dispatch<SetStateAction<string>>;
}

export function Input({ onSearch, onSetSearchString }: InputProps) {
  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch();
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full md:w-[70%] xl:w-[60%] 2xl:w-[50%]"
    >
      <input
        className="rounded py-2 px-4 mb-5 w-full mt-10 shadow-md text-neutral-800 font-medium"
        type="text"
        onChange={(e) => onSetSearchString(e.target.value)}
        placeholder="Pesquise por séries, filmes e etc..."
      />
    </form>
  );
}
