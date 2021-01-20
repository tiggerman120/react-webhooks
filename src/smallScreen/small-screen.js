import { useState, useEffect } from 'react';
  
  
  const useWindowWidth = () => {
    const [smallScreen, setSmallScreen] = useState(false)
    
    useEffect(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize)

      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 600);
    }

    return smallScreen;
  }

  export default useWindowWidth;