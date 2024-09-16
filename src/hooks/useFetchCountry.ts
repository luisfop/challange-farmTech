import { useState } from "react";
import { fetchCountryData } from "../utils/apiHandlers";
import { Region } from "../common/interfaces/Regions/Region";
import { SpecificRegionData } from "../common/interfaces/Regions/ApiData";

export const useFetchCountry = () => {
  const [specificRegion, setSpecificRegion] = useState<{
    name: string;
    data?: SpecificRegionData;
    iso: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearchByCountry = async (countryIso: Region) => {
    setLoading(true);
    try {
      const data = await fetchCountryData(countryIso);
      setSpecificRegion(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados do país:", error);
      setSpecificRegion(null);
      setError("Erro ao buscar dados do país");
    } finally {
      setLoading(false);
    }
  };

  return {
    specificRegion,
    handleSearchByCountry,
    loading,
    error,
    setSpecificRegion,
  };
};
