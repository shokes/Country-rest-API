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
            // languages,
            border: border,
            subregion: subregion,
          } = countryData;

          const newCountry = {
            population,
            region,
            flag: flags.png,
            capital: capital[0],
            currency: { currencies }.name,
            name: name.common,
            border,
            // languages: languages,
            subregion,
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
    const {
      population,
      region,
      flag,
      capital,
      currency,
      subregion,
      name,
      languages,
      border,
    } = country;
    return (
      <div className='container'>
        <Link to='/' className='btn btn-home'>
          Back to home
        </Link>
        <p className='single-country-name'> {name}</p>
        <div className='country-flex'>
          <img src={flag} alt={name} className='flag-size' />
          <div className='single-country-detail'>
            <p>
              <span>Native name: </span>
              {name}
            </p>
            <p>
              <span>Subregion: </span>
              {subregion}
            </p>

            <p>
              <span>Capital: </span>
              {capital}
            </p>

            <p>
              <span>Region: </span>
              {region}
            </p>
            <p>
              <span>Population: </span>
              {population}
            </p>
            {/* <p>
              <span>Border: </span>
              {border.map((item, index) => {
                return item ? <div key={index}>{item}</div> : null;
              })}
            </p> */}
          </div>
        </div>
      </div>
    );
  }
};

export default SingleCountry;
