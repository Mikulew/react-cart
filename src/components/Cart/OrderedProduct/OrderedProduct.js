import React from 'react';
import PropTypes from 'prop-types';

import { calculatePrice } from '../../../helpers';

const OrderedProduct = ({ product, addProduct, removeProduct, resetProduct }) => {
  const { id, title, cover, price, count, currency } = product;

  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={cover} className="card-img" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Quantity: {count}</p>
            <p className="card-text">Price: {price}</p>
            <p className="card-text">Total: {calculatePrice(count, price, currency)}</p>
            <div>
              <button
                className="card-button btn btn-success p-1 m-1"
                type="button"
                onClick={() => addProduct(product)}
              >
                +
              </button>
              <button
                className="card-button btn btn-danger p-1 m-1"
                type="button"
                onClick={() => removeProduct(id)}
              >
                -
              </button>
              <button
                className="card-button-close btn btn-danger p-1 m-1"
                type="button"
                onClick={() => resetProduct(id)}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OrderedProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    availability: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  resetProduct: PropTypes.func.isRequired,
};

export default OrderedProduct;
