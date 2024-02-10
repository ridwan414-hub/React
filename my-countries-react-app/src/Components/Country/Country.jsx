import PropTypes from 'prop-types';
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, region, area, population } = country;
  const { common } = name;

  return (
    <div style={{ border: '2px solid red' }}>
      <p>{common}</p>
      <img src={flags.png} alt="" />
      <p>Region:{region}</p>
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <button onClick={() => handleVisitedCountry(country)}>visited</button>
    </div>
  );
};
Country.propTypes = {
  country: PropTypes.object.isRequired,
  handleVisitedCountry: PropTypes.func.isRequired,
};

export default Country;
