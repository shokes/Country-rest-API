import React, { useState, useContext, useEffect } from 'react';

// creating global context

const MainUrl = 'https://restcountries.com/v3.1/name/';
const regionUrl = 'https://restcountries.com/v3.1/region/';

const AppContext = React.createContext();

// creating app provider

const AppProvider = function ({ children }) {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('am');
  const [region, setRegion] = useState('');

  const fetchCountries = async () => {
    setLoading(true);
    let url;
    if (region) {
      url = `${regionUrl}${region}`;
    } else {
      url = `${MainUrl}${searchTerm}`;
    }
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const countriesData = data;

      setLoading(false);

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

        setCountries(newCountriesData);
      } else {
        setCountries([]);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRegion('');
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        region,
        countries,
        setRegion,
        setSearchTerm,
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
