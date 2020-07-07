import { connect } from 'react-redux';
import { addProduct, removeProduct, resetProduct } from '../../../core/actions';

import OrderedProduct from './OrderedProduct';

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(addProduct(product)),
  removeProduct: (id) => dispatch(removeProduct(id)),
  resetProduct: (id) => dispatch(resetProduct(id)),
});

const OrderedProductContainer = connect(null, mapDispatchToProps)(OrderedProduct);

export default OrderedProductContainer;
