import React from 'react';

import { AiOutlineSwap } from 'react-icons/ai';

import css from './style.module.css';
import iconCss from '../Exacts/style.module.css';

import Select from '../Select';

import { IInput, SetValueType } from '@/models/inputs';

interface LanguagesProps {
  from: IInput;
  setFrom: SetValueType;
  to: IInput;
  setTo: SetValueType;
}

const Languages: React.FC<LanguagesProps> = ({ from, setFrom, to, setTo }) => {
  const swapValues = () => {
    const fromValue = from;
    setFrom(to);
    setTo(fromValue);
  };

  const setFromValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFrom((prev) => ({ ...prev, source: event.target.value }));
    setTo((prev) => ({ ...prev }));
  };

  const setToValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTo((prev) => ({ ...prev, source: event.target.value }));
    setFrom((prev) => ({ ...prev }));
  };

  return (
    <div className={css.languages}>
      <Select value={from.source} setValue={setFromValue} />

      <button className={iconCss.action} onClick={swapValues}>
        <AiOutlineSwap color={'#A09EA0'} size={18} />
      </button>

      <Select value={to.source} setValue={setToValue} />
    </div>
  );
};

export default Languages;
