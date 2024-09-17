import { useState } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useFetchAllCountrys } from "../../hooks/useFetchAllCountrys";
import CountryCard from "../CountryCard/CountryCard";
import "./baseLayout.scss";

const BaseLayout = () => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 15;

  const { regions, hasMore, loading: regionsLoading } = useFetchAllCountrys(page, itemsPerPage);

  const renderRegionContent = () => {
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
      <div className="base-layout__wrapper"></div>
      <div className="base-layout__region-container">{renderRegionContent()}</div>
    </>
  );
};

export default BaseLayout;
