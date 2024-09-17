import { useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchAllCountrys } from "../../hooks/useFetchAllCountrys";
import { useFetchCountry } from "../../hooks/useFetchCountry";
import CountryCard from "../CountryCard/CountryCard";
import "./baseLayout.scss";
import Search from "../Search/Search";

const BaseLayout = () => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 15;

  const { regions, hasMore, loading: regionsLoading } = useFetchAllCountrys(page, itemsPerPage);
  const { specificRegion, handleSearchByCountry, setSpecificRegion } = useFetchCountry();

  const renderRegionContent = () => {
    if (specificRegion) {
      return (
        <div className="base-layout__hero">
          <CountryCard
            region={{
              name: specificRegion?.name,
              iso: specificRegion?.iso,
            }}
          />
          <button
            className="base-layout__country-button"
            onClick={() => setSpecificRegion(null)}
          >
            Voltar para lista de países
          </button>
        </div>
      );
    }
    return (
      <InfiniteScroll
        dataLength={regions.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={regionsLoading && <p>Carregando a lista de países...</p>}
        endMessage={<p>Todos os países exibidos</p>}
      >
        <div className="base-layout__hero">
          {regions.map((region, index) => (
            <CountryCard key={index} region={region} />
          ))}
        </div>
      </InfiniteScroll>
    );
  };

  return (
    <>
      <div className="base-layout__wrapper">
        <Search handleSearchByCountry={handleSearchByCountry} />
      </div>
      <div className="base-layout__region-container">{renderRegionContent()}</div>
    </>
  );
};

export default BaseLayout;
