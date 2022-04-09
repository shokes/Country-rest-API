import { Link } from 'react-router-dom';

const Country = function ({ population, continent, flag, name, capital }) {
  return (
    <section className='country-box'>
      <img src={flag} alt={continent} className='country-flag' />

      <h2 className='country-name'>{name}</h2>
      <div className='country-details'>
        <div className='country-info'>
          {/* <h2>Population: {population}</h2> */}
          <p className='details'>
            <span>Population: </span>
            {population}
          </p>
          <p className='details'>
            <span>Capital: </span>
            {capital}
          </p>
          <p className='details'>
            <span>Region: </span>
            {continent}
          </p>
        </div>
        <Link to={`/Country/${capital}`} className='btn more-info'>
          More info
        </Link>
      </div>
    </section>
  );
};
export default Country;
