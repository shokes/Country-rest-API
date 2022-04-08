import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleCountry = function () {
  const { capital } = useParams();

  const url = 'https://restcountries.com/v3.1/capital/';

  const searchCountryWCapital = async () => {
    try {
      const reponse = await fetch(`${url}${capital}`);
      const data = await reponse.json();
      const theCountry = data;
      console.log(theCountry);
      if (theCountry) {
        const seachedCountry = theCountry.map((item) => {
          const { area, landlocked } = item[0];

          return {
            area: area,
            landlocked: landlocked,
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchCountryWCapital();
  }, [capital]);
  return (
    <section className='container'>
      <h2>{capital}</h2>

      <Link to='/' className='btn'>
        Back to home
      </Link>
    </section>
  );
};

export default SingleCountry;
