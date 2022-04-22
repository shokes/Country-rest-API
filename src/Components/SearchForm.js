import { useRef, useState } from 'react';
import React from 'react';

import { useGlobalContext } from '../context';

const SearchForm = function () {
  const { setSearchTerm, setRegion, region } = useGlobalContext();
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
  const selectHandler = (e) => {
    setRegion(e.target.value);
  };

  React.useEffect(() => {}, [region]);
  return (
    <section>
      <form className='form-control' onSubmit={handleSubmit}>
        <div className='input-flex'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Search for a country...'
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
