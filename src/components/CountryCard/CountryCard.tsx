import { useEffect } from "react";
import "./countryCard.scss";
import { Region } from "../../common/interfaces/Regions/Region";
import { useFetchCountry } from "../../hooks/useFetchCountry";

const CountryCard = ({ region }: { region: Region }) => {
  const {
    specificRegion,
    handleSearchByCountry,
    loading: countryLoading,
  } = useFetchCountry();

  const fatalityRate = specificRegion?.data?.fatality_rate;
  const percentage = fatalityRate !== undefined ? (fatalityRate * 100).toFixed(2) + "%" : "N/A";

  useEffect(() => {
    handleSearchByCountry(region);
  }, [region]);

  if (countryLoading) {
    return (
      <div className="country-card">
        <p className="country-card__loading">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="country-card">
      <p className="country-card__title">{specificRegion?.name}</p>
      <section className="country-card__section">
        <div className="country-card__data-column">
          <p className="country-card__label">Total de casos</p>
          <p className="country-card__value">
            {specificRegion?.data?.confirmed ? specificRegion?.data?.confirmed.toLocaleString("pt-BR") : "N/A"}
          </p>
        </div>
        <div className="country-card__data-column">
          <p className="country-card__label">Mortes</p>
          <p className="country-card__value">
            {specificRegion?.data?.deaths ? specificRegion.data.deaths?.toLocaleString("pt-BR") : "N/A"}
          </p>
        </div>
        <div className="country-card__data-column">
          <p className="country-card__label">Fatalidade</p>
          <p className="country-card__value">
            {percentage}
          </p>
        </div>
      </section>
    </div>
  );
};

export default CountryCard;
