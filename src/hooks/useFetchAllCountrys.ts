import { useState, useEffect } from "react";
import { fetchAllCountrys } from "../utils/apiHandlers";
import { Region } from "../types/Region";


export const useFetchAllCountrys = (page: number, itemsPerPage: number) => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllRegionsData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCountrys(page, itemsPerPage);
        setRegions((prevRegions) => [...prevRegions, ...data.data]);
        if (data.current_page < data.last_page) setHasMore(true);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAllRegionsData();
  }, [page]);

  return { regions, hasMore, loading, error };
};
