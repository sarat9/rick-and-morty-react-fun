import React, { useState, useMemo } from 'react'

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => {},
});


export function ThemeContextProvider(props) {

  const [theme, setTheme] = useState('light');
  const value = useMemo(
    () => ({ theme, setTheme }), 
    [theme]
  );
  

  return (
      <ThemeContext.Provider value={value}>
        {props.children}
      </ThemeContext.Provider>
  );
}

export default ThemeContext