import React from 'react';

import classnames from 'classnames';

import css from './style.module.css';

interface TextAreaProps {
  placeholder: string;
  addLine?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder, addLine }) => {
  const classes = classnames({ [css.textarea]: true, [css.withLine]: addLine });

  return <textarea className={classes} placeholder={placeholder}></textarea>;
};

export default TextArea;
