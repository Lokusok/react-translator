import React from 'react';

import css from './style.module.css';

interface SelectProps {
  options: Record<string, string>;
  value: string;
  setValue: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ value, setValue, options }) => {
  return (
    <div className={css.selectWrapper}>
      <select value={value} onChange={setValue} className={css.select}>
        {Object.entries(options).map(([val, text]) => (
          <option value={val} key={val}>
            {text}
          </option>
        ))}
      </select>

      <svg className={css.selectIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
        <path
          fill="#a09ea0"
          d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"
        />
      </svg>
    </div>
  );
};

export default Select;
