import { Link } from 'react-router-dom';

const Country = function ({ population, continent, flag, name, capital }) {
  return (
    <section className='country-box'>
      <img src={flag} alt={continent} />

      <h2 className='country-name'>{name}</h2>
      <div className='country-details'>
        <div className='country-info'>
          <h2>Population: {population}</h2>
          <h2>Capital: {capital}</h2>
          <h2>Continent: {continent}</h2>
        </div>
        <Link to='/Country/:id' className='btn more-info'>
          More info
        </Link>
      </div>
    </section>
  );
};
export default Country;
