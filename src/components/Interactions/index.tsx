import React from 'react';

import css from './style.module.css';

import FromText from './FromText';
import ToText from './ToText';
import Options from '../Options';

import useDebounceSearch from '@/hooks/useDebounceSearch';
import { useLazyTranslateTextQuery } from '@/store/slices/languages';

import { IInput } from '@/models/inputs';

const Interactions: React.FC = () => {
  const [from, setFrom] = React.useState<IInput>({ text: '', source: 'en-GB' });
  const [to, setTo] = React.useState<IInput>({ text: '', source: 'ru-RU' });

  const [translateText, { data, isFetching }] = useLazyTranslateTextQuery();
  useDebounceSearch(translateText, from, to);

  React.useEffect(() => {
    if (!data) {
      return;
    }

    if (!from.text.length) {
      setTo((prev) => ({ ...prev, text: '' }));
      return;
    }

    const { translatedText } = data.responseData;
    setTo((prev) => ({ ...prev, text: translatedText }));
  }, [data, from]);

  React.useEffect(() => {
    setTo((prev) => ({ ...prev, text: '' }));
  }, [from]);

  return (
    <>
      <div>
        <div className={css.inputs}>
          <FromText placeholder={'Enter text'} addLine value={from} setValue={setFrom} />
          <ToText placeholder={'Translation'} disabled value={to} setValue={setTo} isFetching={isFetching} />
        </div>
        <div className="line">
          <Options from={from} setFrom={setFrom} to={to} setTo={setTo} />
        </div>
      </div>
    </>
  );
};

export default Interactions;
