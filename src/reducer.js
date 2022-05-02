const reducer = function (state, action) {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === 'SET_COUNTRIES') {
    return {
      ...state,
      loading: false,
      countries: action.payload,
    };
  }

  if (action.type === 'SET_NO_COUNTRIES') {
    return {
      ...state,
      countries: [],
    };
  }

  if (action.type === 'SET_NO_REGION') {
    return {
      ...state,
      region: '',
    };
  }

  if (action.type === 'SET_SEARCH_TERM') {
    return {
      ...state,
      searchTerm: action.payload,
    };
  }

  if (action.type === 'SET_REGION') {
    return {
      ...state,
      region: action.payload,
    };
  }

  if (action.type === 'SET_COUNTRY') {
    return {
      ...state,
      country: action.payload,
      loading: false,
    };
  }

  if (action.type === 'THEME_HANDLER') {
    if (action.payload === 'light-theme') {
      return {
        ...state,
        theme: 'dark-theme',
      };
    } else if (action.payload === 'dark-theme') {
      return {
        ...state,
        theme: 'light-theme',
      };
    }
  }

  throw new Error('no matching action type');
};

export default reducer;
