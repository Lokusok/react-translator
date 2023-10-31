import React from 'react';

import css from './style.module.css';

import Interactions from '../Interactions';
import SuccessPopup from '../SuccessPopup';

import PopupContext from '@/contexts/popup';
import useTimerAndClickOutsideHandler from '@/hooks/useTimerAndClickOutsideHandler';

const Translator: React.FC = () => {
  const { isActive, setIsActive, popupRef } = React.useContext(PopupContext);

  useTimerAndClickOutsideHandler({ setIsActive, popupRef, isActive });

  return (
    <>
      <SuccessPopup isActive={isActive} />

      <div className={css.translator}>
        <Interactions />
      </div>
    </>
  );
};

export default Translator;
