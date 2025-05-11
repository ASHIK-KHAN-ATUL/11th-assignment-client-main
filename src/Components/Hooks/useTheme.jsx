import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const interval = setInterval(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme !== theme) {
        setTheme(storedTheme);
      }
    }, 100); 

    return () => clearInterval(interval); 
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
