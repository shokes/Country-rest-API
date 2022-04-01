import SearchForm from '../Components/SearchForm';
import CountryList from '../Components/CountryList';
import Loading from '../Components/Loading';
const Home = function () {
  return (
    <main className='container'>
      <SearchForm />

      <CountryList />
    </main>
  );
};

export default Home;
