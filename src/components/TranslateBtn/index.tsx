import React from 'react';

import css from './style.module.css';

interface TranslateBtnProps {
  children: React.ReactNode;
}

const TranslateBtn: React.FC<TranslateBtnProps> = ({ children }) => {
  return <button className={css.translateBtn}>{children}</button>;
};

export default TranslateBtn;
