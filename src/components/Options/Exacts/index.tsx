import React from 'react';

import { AiFillSound, AiFillCopy } from 'react-icons/ai';

import css from './style.module.css';
import useTheme from '@/hooks/useTheme';

import { IInput } from '@/models/inputs';

interface ExactsProps {
  from: IInput;
  to: IInput;
  isItFrom: boolean;
}

const Exacts: React.FC<ExactsProps> = ({ from, to, isItFrom }) => {
  const theme = useTheme();
  const disabled = isItFrom ? !from.text.length : !to.text.length;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(isItFrom ? from.text : to.text);
    alert('Successfull copy');
  };
  const handleSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(isItFrom ? from.text : to.text);
    utterance.lang = isItFrom ? from.source : to.source;
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className={css.row}>
        <button className={css.action} title={'Speak'} disabled={disabled} onClick={handleSpeech}>
          <AiFillSound color={theme.iconsColor} size={18} />
        </button>

        <button className={css.action} title={'Copy'} disabled={disabled} onClick={handleCopy}>
          <AiFillCopy color={theme.iconsColor} size={18} />
        </button>
      </div>
    </>
  );
};

export default Exacts;
