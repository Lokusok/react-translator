import React from 'react';

import { PopupContextVals } from '@/contexts/popup';

const useTimerAndClickOutsideHandler = ({ setIsActive, popupRef, isActive }: PopupContextVals) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    const documentClickHandler = (event) => {
      if (!event.target.closest(`.${popupRef.current.className}`)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', documentClickHandler);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', documentClickHandler);
    };
  }, [isActive]);
};

export default useTimerAndClickOutsideHandler;
