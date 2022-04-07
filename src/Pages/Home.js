import SearchForm from '../Components/SearchForm';
import CountryList from '../Components/CountryList';

const Home = function () {
  return (
    <main className='container'>
      <SearchForm />
      <CountryList />
    </main>
  );
};

export default Home;
