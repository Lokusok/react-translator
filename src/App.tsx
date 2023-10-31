import React from 'react';

import Translator from './components/Translator';
import Center from './layout/Center';

import { Provider } from 'react-redux';
import store from './store';

import PopupContext from './contexts/popup';

const App: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);
  const popupRef = React.useRef(null);

  return (
    <Provider store={store}>
      <PopupContext.Provider value={{ isActive, setIsActive, popupRef }}>
        <Center>
          <Translator />
        </Center>
      </PopupContext.Provider>
    </Provider>
  );
};

export default App;
