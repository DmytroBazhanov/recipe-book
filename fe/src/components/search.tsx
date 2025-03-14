import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { ChangeEvent, useEffect, useState } from "react";

export const Search = () => {
  const [_, setSearchParams] = useSearchParams();
  const [text, setText] = useState("");
  const [searchValue] = useDebounce(text, 300);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value);
  };

  useEffect(() => {
    setSearchParams((params) => {
      params.set("s", searchValue);
      return params;
    });
  }, [setSearchParams, searchValue]);

  return (
    <input
      className="border-solid border-gray-800 border rounded-md px-1.5 py-1"
      type="text"
      placeholder="search"
      onChange={(event) => {
        handleSearch(event);
      }}
    />
  );
};
