import React from 'react';

import { AiFillSound, AiFillCopy } from 'react-icons/ai';

import css from './style.module.css';
import useTheme from '@/hooks/useTheme';

const Exacts: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <div className={css.row}>
        <button className={css.action} title={'Speak'}>
          <AiFillSound color={theme.iconsColor} size={18} />
        </button>

        <button className={css.action} title={'Copy'}>
          <AiFillCopy color={theme.iconsColor} size={18} />
        </button>
      </div>
    </>
  );
};

export default Exacts;
