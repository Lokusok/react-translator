import Translator from './components/Translator';
import Center from './layout/Center';

import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Center>
        <Translator />
      </Center>
    </Provider>
  );
};

export default App;
