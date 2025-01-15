import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location]);

  return isLoading;
}

export default useLoader;
