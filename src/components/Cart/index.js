import { connect } from 'react-redux';

import Cart from './Cart';

const mapStateToProps = (state) => ({
  products: state.orderedProducts,
  totalOrderedProducts: state.totalOrderedProducts,
});

const CartContainer = connect(mapStateToProps, null)(Cart);

export default CartContainer;
