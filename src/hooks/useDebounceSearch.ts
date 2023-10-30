import React from 'react';

import { IInput } from '@/models/inputs';

const useDebounceSearch = (fetchFn, from: IInput, to: IInput) => {
  React.useEffect(() => {
    if (!from.text.length) {
      return;
    }

    const translateObj = {
      from,
      to,
    };

    const timer = setTimeout(() => {
      fetchFn(translateObj);
    }, 500);

    return () => clearTimeout(timer);
  }, [from]);
};

export default useDebounceSearch;
