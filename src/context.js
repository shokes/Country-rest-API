import React, { useState, useContext, useEffect } from 'react';

// creating global context

const url = 'https://restcountries.com/v3.1/name/';

const AppContext = React.createContext();

// creating app provider

const AppProvider = function ({ children }) {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('nigeria');

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCountries();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, setLoading, countries }}>
      {children}
    </AppContext.Provider>
  );
};

// creating the custom hook

export const useGlobalContext = function () {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
