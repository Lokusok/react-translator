import React from 'react';

import css from './style.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.loaderWrapper}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;
