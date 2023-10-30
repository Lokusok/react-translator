import React from 'react';

import css from './style.module.css';

import Exacts from './Exacts';
import Languages from './Languages';

import { IInput, SetValueType } from '@/models/inputs';

interface OptionsProps {
  from: IInput;
  setFrom: SetValueType;
  to: IInput;
  setTo: SetValueType;
}

const Options: React.FC<OptionsProps> = ({ from, setFrom, to, setTo }) => {
  return (
    <div className={css.options}>
      <Exacts from={from} to={to} isItFrom={true} />
      <Languages from={from} setFrom={setFrom} to={to} setTo={setTo} />
      <Exacts from={from} to={to} isItFrom={false} />
    </div>
  );
};

export default Options;
