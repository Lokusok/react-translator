import React from 'react';

import css from './style.module.css';

import TextArea from '../TextArea';
import Options from '../Options';

const Interactions: React.FC = () => {
  return (
    <div>
      <div className={css.inputs}>
        <TextArea placeholder={'Enter text'} addLine />
        <TextArea placeholder={'Translation'} />
      </div>
      <div className="line">
        <Options />
      </div>
    </div>
  );
};

export default Interactions;
