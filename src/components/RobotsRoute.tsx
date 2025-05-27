
import { useEffect } from 'react';
import { robotsContent } from '@/data/robotsContent';

const RobotsRoute = () => {
  useEffect(() => {
    // Заменяем текущий документ на robots.txt
    document.open();
    document.write(robotsContent);
    document.close();
  }, []);

  return null;
};

export default RobotsRoute;
