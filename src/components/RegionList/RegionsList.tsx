import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CountryCard from "../CountryCard/CountryCard";
import { Region } from "../../types/Region";


type RegionsListProps = {
  regions: Region[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasMore: boolean;
  regionsLoading: boolean;
};

const RegionsList: React.FC<RegionsListProps> = ({
  regions,
  setPage,
  hasMore,
  regionsLoading,
}) => {
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

export default RegionsList;
