import React from 'react';

import css from './style.module.css';

import TextArea from '@/layout/TextArea';
import Loader from '@/components/Loader';

import { InputCompProps } from '@/models/inputs';

interface ToTextProps extends InputCompProps {
  isFetching: boolean;
}

const ToText: React.FC<ToTextProps> = ({ placeholder, addLine, disabled, value, setValue, isFetching }) => {
  return (
    <div className={css.wrapper}>
      {isFetching && <Loader />}

      <TextArea placeholder={placeholder} addLine={addLine} disabled={disabled} value={value} setValue={setValue} />
    </div>
  );
};

export default ToText;
