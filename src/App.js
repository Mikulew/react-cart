import React from 'react';
import { Provider } from 'react-redux';

import store from './core/store';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <Products />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
