import types from './types';

const initialState = {
  orderedProducts: [],
  activeProduct: {},
};

export default (state = initialState, action) => {
  const { orderedProducts } = state;

  switch (action.type) {
    case types.ADD_PRODUCT:
      if (!orderedProducts.some((orderedProduct) => orderedProduct.id === action.product.id)) {
        return {
          ...state,
          orderedProducts: [
            ...orderedProducts,
            {
              ...action.product,
              count: 1,
            },
          ],
          activeProduct: action.product,
        };
      }
      const filteredProducts = orderedProducts.map((product) => {
        if (product.id === action.product.id) {
          console.log('passed');
          return { ...product, count: (product.count += 1) };
        }
        return product;
      });
      return {
        orderedProducts: [...filteredProducts],
        activeProduct: action.product,
      };
    default:
      return state;
  }
};
