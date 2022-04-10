import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Components/Loading';

const SingleCountry = function () {
  const { capital } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  const url = 'https://restcountries.com/v3.1/capital/';

  useEffect(() => {
    const getCountry = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}${capital}`);
        const data = await response.json();
        const countryData = data[0];
        console.log(countryData);
        if (countryData) {
          const {
            population: population,
            region: region,
            flags,
            currencies,
            capital,
            name,
            area: area,
            border,
            subregion: subregion,
            status,
          } = countryData;

          const newCountry = {
            population,
            region,
            flag: flags.png,
            capital: capital[0],
            currency: { currencies }.name,
            name: name.common,
            area,
            subregion,
            status,
          };

          setCountry(newCountry);
          setLoading(false);
        }
      } catch (error) {
        console.log('an error occured');
      }
    };
    getCountry();
  }, [capital]);

  if (loading) {
    return <Loading />;
  }

  if (!country) {
    return <h2>no country data to display</h2>;
  } else {
    const { population, region, flag, capital, status, subregion, name, area } =
      country;
    return (
      <div className='container'>
        <Link to='/' className='btn'>
          &larr; Back home
        </Link>
        <p className='single-country-name'> {name}</p>
        <div className='country-flex'>
          <img src={flag} alt={name} className='flag-size' />
          <div className='single-country-detail'>
            <p className='detail'>
              <span className='span'>Native name: </span>
              {name}
            </p>

            <p className='detail'>
              <span className='span'>Capital: </span>
              {capital}
            </p>
            <p className='detail'>
              <span className='span'>Region: </span>
              {region}
            </p>
            <p className='detail'>
              <span className='span'>Subregion: </span>
              {subregion}
            </p>

            <p className='detail'>
              <span className='span'>Population: </span>
              {(population / 1000000).toFixed(1)}
            </p>
            <p className='detail'>
              <span className='span'>Area: </span>
              {area}
            </p>
            <p className='detail'>
              <span className='span'>Status: </span>
              {status}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleCountry;
