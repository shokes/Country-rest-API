import React, { useContext, useEffect, useReducer, useRef } from 'react';
import reducer from './reducer';

// creating global context

const MainUrl = 'https://restcountries.com/v3.1/name/';
const regionUrl = 'https://restcountries.com/v3.1/region/';

const AppContext = React.createContext();

// creating app provider

const AppProvider = function ({ children }) {
  const initialState = {
    loading: true,
    countries: [],
    region: '',
    searchTerm: 'am',
    country: null,
    theme: 'light-theme',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const searchValue = useRef('');
  const fetchCountries = async () => {
    dispatch({ type: 'SET_LOADING' });
    let url;
    if (state.region) {
      url = `${regionUrl}${state.region}`;
    } else {
      url = `${MainUrl}${state.searchTerm}`;
    }
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const countriesData = data;

      if (countriesData) {
        const newCountriesData = countriesData.map((item) => {
          const { population, region, flags, name, capital } = item;

          return {
            population,
            region,
            flag: flags.png,
            name: name.common,
            capital: capital ? capital[0] : null,
          };
        });
        dispatch({ type: 'SET_COUNTRIES', payload: newCountriesData });
      } else {
        dispatch({ type: 'SET_NO_COUNTRIES' });
      }
    } catch (error) {
      console.log('error occured');
    }
  };

  useEffect(() => {
    dispatch({ type: 'SET_NO_REGION' });

    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchTerm]);

  const inputHandler = () => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: searchValue.current.value });
  };

  const selectHandler = (e) => {
    dispatch({ type: 'SET_REGION', payload: e.target.value });
  };

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.region, state.searchTerm]);

  useEffect(() => {
    document.documentElement.classList = state.theme;
  }, [state.theme]);

  const toggleHandler = () => {
    dispatch({ type: 'THEME_HANDLER', payload: state.theme });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        inputHandler,
        selectHandler,
        searchValue,
        toggleHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// creating the custom hook

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
