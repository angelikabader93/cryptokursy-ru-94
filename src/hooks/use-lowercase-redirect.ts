import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Hook to redirect URLs with uppercase letters to their lowercase equivalent
 */
export const useLowercaseRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const currentPath = location.pathname;
    const lowercasePath = currentPath.toLowerCase();
    
    // Only redirect if the path has uppercase characters
    if (currentPath !== lowercasePath) {
      // Keep search params and hash if present
      const searchAndHash = location.search + location.hash;
      navigate(lowercasePath + searchAndHash, { replace: true });
    }
  }, [location.pathname, location.search, location.hash, navigate]);
};
