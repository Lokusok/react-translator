import ThemeContext from './contexts/theme';

import Translator from './components/Translator';
import Center from './layout/Center';

const theme = {
  iconsColor: '#a09ea0',
};

const App: React.FC = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <Center>
        <Translator />
      </Center>
    </ThemeContext.Provider>
  );
};

export default App;
