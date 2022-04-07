import { useRef } from 'react';

import { useGlobalContext } from '../context';

const SearchForm = function () {
  const { setSearchTerm } = useGlobalContext();
  const container = useRef(null);

  const inputHandler = () => {
    setSearchTerm(container.current.value);
  };

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
          ref={container}
          onChange={inputHandler}
        ></input>
      </form>
    </section>
  );
};

export default SearchForm;
