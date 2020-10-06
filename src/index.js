import React from 'react';
import ReactDOM from 'react-dom';

// Routes
import AppRoutes from './AppRoutes';

// Styles
import './index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
