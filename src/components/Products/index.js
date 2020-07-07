import React from 'react';

import data from '../../data/items.json';
import { convertJSONtoArray } from '../../helpers';

import ProductItem from './ProductItem';

const Products = () => {
  const products = convertJSONtoArray(data);
  console.log(products);

  return (
    <div className="col-12 col-lg-6 alert alert-primary">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
