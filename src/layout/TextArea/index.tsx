import React from 'react';

import classnames from 'classnames';

import css from './style.module.css';

import { InputCompProps } from '@/models/inputs';

const TextArea: React.FC<InputCompProps> = ({ placeholder, addLine, disabled, value, setValue }) => {
  const classes = classnames({ [css.textarea]: true, [css.withLine]: addLine });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue((prev) => ({ ...prev, text: event.target.value }));
  };

  return (
    <textarea
      className={classes}
      placeholder={placeholder}
      disabled={disabled}
      value={value.text}
      onChange={handleChange}
    ></textarea>
  );
};

export default TextArea;
