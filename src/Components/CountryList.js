import { useGlobalContext } from '../context';
import Loading from './Loading';
import Country from './Country';

const CountryList = function () {
  const { loading, countries } = useGlobalContext();

  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }
  if (countries.length < 1) {
    return (
      <h2 className='no-search-message'>No country matched your search</h2>
    );
  }

  return (
    <section>
      <div className='grid'>
        {countries.map((item, index) => {
          return <Country key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CountryList;
