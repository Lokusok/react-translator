import React from 'react';

import css from './style.module.css';

import Interactions from '../Interactions';
import TranslateBtn from '../TranslateBtn';

const Translator: React.FC = () => {
  return (
    <div className={css.translator}>
      <Interactions />
      <TranslateBtn>Translate Text</TranslateBtn>
    </div>
  );
};

export default Translator;
