import { Link } from 'react-router-dom';

const Country = function ({ population, region, flag, name, capital }) {
  return (
    <section className='country-box'>
      <img src={flag} alt={region} className='country-flag' />

      <h2 className='country-name'>{name}</h2>
      <div className='country-details'>
        <div className='country-info'>
          <p className='details'>
            <span>Population: </span>
            {(population / 1000000).toFixed(2)}
          </p>
          <p className='details'>
            <span>Capital: </span>
            {capital}
          </p>
          <p className='details'>
            <span>Region: </span>
            {region}
          </p>
        </div>
        <Link to={`/Country/${capital}`} className='btn more-info'>
          More info &rarr;
        </Link>
      </div>
    </section>
  );
};
export default Country;
