
import { Region } from "../../types/Region";
import CountryCard from "../CountryCard/CountryCard";

type SelectedCountryProps = {
  specificRegion: Region | null;
  setSpecificRegion: React.Dispatch<React.SetStateAction<Region | null>>;
};

const SelectedCountry: React.FC<SelectedCountryProps> = ({
  specificRegion,
  setSpecificRegion,
}) => {
  return (
    <div className="base-layout__hero">
      <CountryCard
        region={{
          name: specificRegion?.name || "",
          iso: specificRegion?.iso || "",
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
};

export default SelectedCountry;
