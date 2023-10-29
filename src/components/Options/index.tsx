import React from 'react';

import css from './style.module.css';

import Exacts from './Exacts';
import Languages from './Languages';

const Options: React.FC = () => {
  return (
    <div className={css.options}>
      <Exacts />
      <Languages />
      <Exacts />
    </div>
  );
};

export default Options;
