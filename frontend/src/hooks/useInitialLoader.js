import { useState, useEffect } from 'react';

function useInitialLoader() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Start with initial load true
    setIsInitialLoad(true);

    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return { isInitialLoad };
}

export default useInitialLoader;
