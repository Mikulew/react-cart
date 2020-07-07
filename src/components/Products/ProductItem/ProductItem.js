import React from 'react';
import PropTypes from 'prop-types';

import { toFixedNoRounding } from '../../../helpers';

const ProductItem = ({ product, addProduct }) => {
  const { title, cover, availability, price, currency } = product;
  const checkIsDisabled = () => (availability ? '' : 'disabled');

  return (
    <div className={`card mb-2 ${checkIsDisabled()}`}>
      <img src={cover} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {price && (
          <p className="card-text card-price alert alert-info m-2 p-1">{`${toFixedNoRounding(
            price,
          )} ${currency}`}</p>
        )}
        <button
          onClick={() => addProduct(product)}
          type="button"
          className={`btn btn-primary ${checkIsDisabled()}`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string.isRequired,
  }),
  addProduct: PropTypes.func.isRequired,
};

ProductItem.defaultProps = {
  product: { price: null },
};

export default ProductItem;
