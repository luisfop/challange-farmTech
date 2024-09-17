import React, { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import { fetchAllCountrys } from "../../utils/apiHandlers";
import "./search.scss";
import { Region } from "../../types/Region";


const Search = ({
  handleSearchByCountry,
}: {
  handleSearchByCountry: (value: Region) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Region[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const debouncedFetch = debounce(async (query: string) => {
      if (!query) return setSuggestions([]);
      try {
        setLoading(true);
        const data = await fetchAllCountrys(1, 1000);
        const filteredData = data.data.filter((region: Region) =>
          region.name.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredData);
      } catch (error) {
        console.error("Error fetching Regions", error);
      } finally {
        setLoading(false);
      }
    }, 1000);

    debouncedFetch(inputValue);

    return () => debouncedFetch.cancel();
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion: Region) => {
    setInputValue("");
    handleSearchByCountry(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="search-card">
      <div className="search-card__title">
        <p>Filtrar dados sobre um país</p>
      </div>

      <form className="search-card__form">
        <input
          type="text"
          className="search-card__input"
          placeholder="Digite o nome do país"
          value={inputValue}
          onChange={handleChange}
        />
      </form>

      {loading && (
        <p className="search-card__loading">Carregando sugestões...</p>
      )}
      {suggestions.length > 0 && (
        <div className="search-card__suggestions">
          {suggestions.map((suggestion) => (
            <p
              key={suggestion.iso}
              onClick={() => handleSuggestionClick(suggestion)}
              className="search-card__suggestion"
            >
              {suggestion.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
