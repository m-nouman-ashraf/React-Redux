import ADD_TO_CART from "../constents";
export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
