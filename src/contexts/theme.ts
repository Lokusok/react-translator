import { createContext } from 'react';

import { ITheme } from '@/models';

const ThemeContext = createContext<ITheme>(null);

export default ThemeContext;
