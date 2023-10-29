import React from 'react';

import { ITheme } from '@/models';

import ThemeContext from '@/contexts/theme';

const useTheme: () => ITheme = () => {
  const theme = React.useContext(ThemeContext);

  return theme;
};

export default useTheme;
