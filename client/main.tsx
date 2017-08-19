import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import Header from './Header';
import ViewModel from './ViewModel';

const store = new ViewModel();

ReactDOM.render(
  <Provider store={store}>
    <Header />
  </Provider>,
  document.getElementById('header')
);
