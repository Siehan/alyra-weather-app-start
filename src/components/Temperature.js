const Temperature = ({ mainTemp, feelsLike }) => {
  return (
    <h2 className="pb-4">
      <b className="text-white">Température : </b> {mainTemp}&deg;C - <b className="text-white">Ressentie : </b>{" "}
      {feelsLike}&deg;C
    </h2>
  );
};

export default Temperature;
