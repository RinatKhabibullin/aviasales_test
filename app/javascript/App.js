import React from 'react';

import store from 'store';
import { Provider } from 'react-redux';
import Main from 'containers/Main';
import MUITheme from 'MUITheme/MUITheme';

const App = () => (
  <Provider store={store}>
    <MUITheme>
      <Main />
    </MUITheme>
  </Provider>
);

export default App;
