import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRouteChange = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
      // Wait for the page to load and then start fade out
      setTimeout(() => {
        setIsLoading(false);
      }, 1550);
    }, 1550);
  };

  return {
    isLoading,
    handleRouteChange
  };
}

export default useLoader;
