import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetProducts } from "../store/actions/ProductActions";

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(asyncGetProducts());
  }, []);

  return <div>Products</div>;
};

export default Products;
