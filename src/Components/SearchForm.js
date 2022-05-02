import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = function () {
  const { region, inputHandler, selectHandler, searchValue } =
    useGlobalContext();

  React.useEffect(() => {
    searchValue.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className='input-flex'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Search for a country...'
            // ref={searchValue}
            ref={searchValue}
            onChange={inputHandler}
          ></input>

          <select
            className='select'
            name='region-names'
            id='region-names'
            value={region}
            onChange={selectHandler}
          >
            <option value='' disabled selected hidden>
              Filter by region
            </option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'> Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
