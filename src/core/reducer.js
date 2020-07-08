import types from './types';

const initialState = {
  orderedProducts: [],
  activeProduct: {},
  totalOrderedProducts: 0,
};

export default (state = initialState, action) => {
  const { orderedProducts, activeProduct } = state;

  switch (action.type) {
    case types.ADD_PRODUCT: {
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
          totalOrderedProducts: state.totalOrderedProducts + 1,
        };
      }
      const updatedProducts = orderedProducts.map((product) => {
        if (product.id === action.product.id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      return {
        orderedProducts: [...updatedProducts],
        activeProduct: action.product,
        totalOrderedProducts: state.totalOrderedProducts + 1,
      };
    }
    case types.REMOVE_PRODUCT: {
      const checkIfProductIsEmpty = orderedProducts.some((product) => {
        if (product.id === action.id) {
          const tempCount = product.count;
          return !(tempCount - 1 > 0);
        }
        return false;
      });
      if (checkIfProductIsEmpty) {
        const updatedProducts = orderedProducts.filter((product) => product.id !== action.id);
        return {
          orderedProducts: updatedProducts,
          activeProduct,
          totalOrderedProducts: state.totalOrderedProducts - 1,
        };
      }
      const updatedProducts = orderedProducts.map((product) => {
        if (product.id === action.id) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      });
      return {
        orderedProducts: [...updatedProducts],
        activeProduct,
        totalOrderedProducts: state.totalOrderedProducts - 1,
      };
    }
    case types.RESET_PRODUCT: {
      const getActiveProduct = orderedProducts.filter((product) => product.id === action.id);
      const getOrderedProductCount = getActiveProduct[0].count;
      const updatedProducts = orderedProducts.filter((product) => product.id !== action.id);
      return {
        orderedProducts: updatedProducts,
        activeProduct,
        totalOrderedProducts: state.totalOrderedProducts - getOrderedProductCount,
      };
    }
    default:
      return state;
  }
};
