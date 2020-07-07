import React from 'react';
import PropTypes from 'prop-types';

import { toFixedNoRounding } from '../../helpers';

const ProductItem = ({ product: { id, title, cover, availability, price, currency } }) => {
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
        <a href="#" className={`btn btn-primary card-button ${checkIsDisabled()}`}>
          Add to cart
        </a>
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
};

ProductItem.defaultProps = {
  product: { price: null },
};

export default ProductItem;
