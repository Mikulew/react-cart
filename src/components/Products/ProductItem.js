import React from 'react';

const ProductItem = ({ product: { id, title, cover, availability, price } }) => (
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

export default ProductItem;
