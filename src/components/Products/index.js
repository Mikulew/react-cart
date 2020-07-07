import React from 'react';

import data from '../../data/items.json';
import { convertJSONtoArray } from '../../helpers';

import ProductItem from './ProductItem';

const Products = () => {
  const products = convertJSONtoArray(data);

  return (
    <div className="col-12 col-md-12 col-lg-6 order-2 order-md-2 order-lg-1 alert alert-primary">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-md-6 col-xl-4" key={product.id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
