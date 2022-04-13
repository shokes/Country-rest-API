import React, { useState, useContext, useEffect } from 'react';

// creating global context

const url = 'https://restcountries.com/v3.1/name/';

const AppContext = React.createContext();

// creating app provider

const AppProvider = function ({ children }) {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('am');

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const countriesData = data;
      //console.log(countriesData);
      setLoading(false);

      if (countriesData) {
        const newCountriesData = countriesData.map((item) => {
          const { population, region, flags, name, capital } = item;

          return {
            population,
            region,
            flag: flags.png,
            name: name.common,
            capital: capital[0],
          };
        });

        setCountries(newCountriesData);
      } else {
        setCountries([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, setLoading, countries, setSearchTerm }}
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
