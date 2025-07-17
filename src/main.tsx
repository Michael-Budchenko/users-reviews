import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/assets/styles/index.scss';
import Home from './pages/App/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
