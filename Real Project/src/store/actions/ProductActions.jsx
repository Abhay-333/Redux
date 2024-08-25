import { getProducts } from "../reducers/ProductReducer";

export const asyncGetProducts = () => async (dispatch,getState) => {
  console.log(getState())
    try {
    const response = await fetch(`https://dummyjson.com/products`);
    // this is data of product that is sync data
    const data = await response.json();
    console.log(data);
    dispatch(getProducts(data))
  } catch (error) {
    console.log(error);
  }
};
