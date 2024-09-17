import { Region } from "../types/Region";

const BASE_URL = "https://covid-api.com/api";

export const fetchAllCountrys = async (
  pageNumber: number,
  itemsPerPage: number
) => {
  const response = await fetch(
    `${BASE_URL}/regions?page=${pageNumber}&per_page=${itemsPerPage}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export const fetchCountryData = async (countryToBeSearched: Region) => {
  const response = await fetch(
    `${BASE_URL}/reports/total?iso=${countryToBeSearched.iso}`
  );
  if (!response.ok) throw new Error("Network response was not ok");

  const data = await response.json();

  return { ...data, iso:countryToBeSearched.iso, name: countryToBeSearched.name };
};
