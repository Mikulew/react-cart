import React from 'react';
import PropTypes from 'prop-types';

import OrderedProduct from './OrderedProduct';

const Cart = ({ products }) => (
  <div className="col-12 col-md-12 col-lg-6 order-1 order-md-1 order-lg-2 alert alert-secondary">
    <div className="row">
      {products.map((product) => (
        <div className="col-12" key={product.id}>
          <OrderedProduct product={product} />
        </div>
      ))}
    </div>
  </div>
);

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      availability: PropTypes.bool.isRequired,
      price: PropTypes.number,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

Cart.defaultProps = {
  products: [],
};

export default Cart;
