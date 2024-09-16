import Doctors from '../../../assets/doctors.png';
import "./description.scss";

const Description = () => {
  return (
    <div className="description">
      <div className="description__container">
        <p className="description__title">Conheça o Covidômetro</p>
        <p className="description__text">
          Fique atualizado com velocidade e transparência. O Covidômetro é uma
          ferramenta que mostra para você em tempo real o número de casos e
          óbitos relacionados à pandemia da COVID-19 ao redor do mundo.
        </p>
      </div>
      <img className="description__image" src={Doctors} alt="Doctors" />
    </div>
  );
};

export default Description;
