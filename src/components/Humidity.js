const Humidity = ({ humidity }) => {
  return (
    <h2 className="pb-5">
      <b className="text-white">Taux d'humidité : </b>
      {humidity}%
    </h2>
  );
};

export default Humidity;
