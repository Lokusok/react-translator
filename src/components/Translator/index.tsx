import React from 'react';

import css from './style.module.css';

import Interactions from '../Interactions';

const Translator: React.FC = () => {
  return (
    <div className={css.translator}>
      <Interactions />
    </div>
  );
};

export default Translator;
