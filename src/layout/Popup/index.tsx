import React from 'react';

import css from './style.module.css';

import classNames from 'classnames';

interface PopupProps {
  title: string;
  descr: string;
  isActive: boolean;
  onOkBtnClick: () => void;
  onCloseBtnClick: () => void;
}

const Popup = React.forwardRef<HTMLDivElement, PopupProps>(function PopupComp(
  { title, descr, isActive, onOkBtnClick, onCloseBtnClick },
  ref
) {
  return (
    <div className={classNames({ [css.popup]: true, [css.active]: isActive })} ref={ref}>
      <div className={css.popupRow}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.descr}>{descr}</p>
        <button className={css.close} title="Close" aria-label="close popup" onClick={onCloseBtnClick}>
          X
        </button>

        <button className={css.ok} onClick={onOkBtnClick}>
          Alright
        </button>
      </div>
    </div>
  );
});

export default Popup;
