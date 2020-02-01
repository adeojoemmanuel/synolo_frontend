import { useEffect } from 'react';

const ScrollToTopController = () => {
  
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

export default ScrollToTopController;