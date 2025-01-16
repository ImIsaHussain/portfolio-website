import { useState, useEffect } from 'react';

function useInitialLoader() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  return isInitialLoad;
}

export default useInitialLoader;
