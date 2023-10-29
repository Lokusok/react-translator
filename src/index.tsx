import { createRoot } from 'react-dom/client';

import 'reset-css/reset.css';
import './index.css';

import App from './App';

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
