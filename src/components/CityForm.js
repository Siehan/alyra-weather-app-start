const CityForm = ({ setCity }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.elements.city.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-6">
        <label className="input-group-text p-3" htmlFor="city">
          Choisissez un lieu
        </label>
        <input className="form-control" id="city" required />
      </div>
    </form>
  );
};

export default CityForm;
