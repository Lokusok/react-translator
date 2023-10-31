import { createContext, Dispatch, SetStateAction, MutableRefObject } from 'react';

export interface PopupContextVals {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  popupRef: MutableRefObject<any>;
}

const PopupContext = createContext<PopupContextVals>(null);

export default PopupContext;
