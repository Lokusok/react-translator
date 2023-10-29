import React from 'react';

import { AiOutlineSwap } from 'react-icons/ai';

import css from './style.module.css';
import iconCss from '../Exacts/style.module.css';

import Select from '../Select';

const Languages: React.FC = () => {
  return (
    <div className={css.languages}>
      <Select />

      <button className={iconCss.action}>
        <AiOutlineSwap color={'#A09EA0'} size={18} />
      </button>

      <Select />
    </div>
  );
};

export default Languages;
