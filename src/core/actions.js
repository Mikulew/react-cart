import types from './types';

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product,
});

export const removeProduct = (id) => ({
  type: types.REMOVE_PRODUCT,
  id,
});

export const resetProduct = (id) => ({
  type: types.RESET_PRODUCT,
  id,
});
