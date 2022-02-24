const Icon = ({ iconID }) => {
  return !!iconID && <img src={`https://openweathermap.org/img/wn/${iconID}@4x.png`} alt="" width="150" height="150" />;
};

export default Icon;
