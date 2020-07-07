import { connect } from 'react-redux';
import { addProduct } from '../../../core/actions';

import ProductItem from './ProductItem';

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
});

const ProductItemContainer = connect(null, mapDispatchToProps)(ProductItem);

export default ProductItemContainer;
