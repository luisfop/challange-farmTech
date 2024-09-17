import { useState } from "react";
import Search from "../Search/Search";
import { useFetchAllCountrys } from "../../hooks/useFetchAllCountrys";
import { useFetchCountry } from "../../hooks/useFetchCountry";
import SelectedCountry from "../SelectedCountry/SelectedCountry";
import RegionsList from "../RegionList/RegionsList";
import "./baseLayout.scss";

const BaseLayout = () => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 15;

  const { regions, hasMore, loading: regionsLoading } = useFetchAllCountrys(page, itemsPerPage);
  const { specificRegion, handleSearchByCountry, setSpecificRegion } = useFetchCountry();

  return (
    <>
      <div className="base-layout__wrapper">
        <Search handleSearchByCountry={handleSearchByCountry} />
      </div>
      <div className="base-layout__region-container">
        {specificRegion ? (
          <SelectedCountry
            specificRegion={specificRegion}
            setSpecificRegion={setSpecificRegion}
          />
        ) : (
          <RegionsList
            regions={regions}
            setPage={setPage}
            hasMore={hasMore}
            regionsLoading={regionsLoading}
          />
        )}
      </div>
    </>
  );
};

export default BaseLayout;
