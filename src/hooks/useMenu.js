import {useState }  from 'react';

const useMenu = () => {
  const [isVisble, setIsVisible] = useState(false);

  const toggleMenuHandler = () => setIsVisible(!isVisble);
  return [isVisble, toggleMenuHandler];
};

export default useMenu;
