import { createContext } from 'react';

import { ITheme } from '@/models/theme';

const ThemeContext = createContext<ITheme>({
  iconsColor: '#a09ea0',
});

export default ThemeContext;
