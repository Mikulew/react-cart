import React from 'react';

import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
