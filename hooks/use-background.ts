import { useContext } from 'react';
import { BackgroundContext, Colors } from 'context/background-context';

const useBackground = () => {
  const context = useContext(BackgroundContext);

  return context;
};

export default useBackground;
