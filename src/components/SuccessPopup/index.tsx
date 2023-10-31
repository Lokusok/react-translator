import React from 'react';

import Popup from '@/layout/Popup';

import PopupContext from '@/contexts/popup';

interface SuccessPopupProps {
  isActive: boolean;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ isActive }) => {
  const { setIsActive, popupRef } = React.useContext(PopupContext);

  const clickHandler = () => {
    setIsActive(false);
  };

  return (
    <Popup
      onCloseBtnClick={clickHandler}
      onOkBtnClick={clickHandler}
      ref={popupRef}
      title={'Success!'}
      descr={'You have successfully copied the text.'}
      isActive={isActive}
    />
  );
};

export default SuccessPopup;
