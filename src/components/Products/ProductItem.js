import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ product: { id, title, cover, availability, price, currency } }) => (
  <div className="card">
    <img src={cover} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{price}</p>
      <a href="#" className="btn btn-primary">
        Add to cart
      </a>
    </div>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    availability: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
