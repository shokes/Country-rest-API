import { useGlobalContext } from '../context';
import Loading from './Loading';

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
};

export default CountryList;
