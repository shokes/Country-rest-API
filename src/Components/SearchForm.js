import { useRef } from 'react';
import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = function () {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  const inputHandler = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <form className='form-control' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Search for a country'
          ref={searchValue}
          onChange={inputHandler}
        ></input>
      </form>
    </section>
  );
};

export default SearchForm;
