import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart/actions";
import { quantityDecrement } from "../redux/product/actions";

export default function Product() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addToCartHandler = (value) => {
    dispatch(addToCart(value));
  };

  return (
    <>
      {products.map((curElm) => {
        const { id, name, category, url, price, quantity } = curElm;

        return (
          <div className="lws-productCard" key={curElm.id}>
            <img className="lws-productImage" src={url} alt="product" />
            <div className="p-4 space-y-2">
              <h4 className="lws-productName">{name}</h4>
              <p className="lws-productCategory">{category}</p>
              <div className="flex items-center justify-between pb-2">
                <p className="productPrice">
                  BDT <span className="lws-price">{price}</span>
                </p>
                <p className="productQuantity">
                  QTY <span className="lws-quantity">{quantity}</span>
                </p>
              </div>
              <button
                className="lws-btnAddToCart"
                onClick={() =>
                  addToCartHandler({
                    id,
                    name,
                    category,
                    url,
                    price,
                    quantity: 1,
                  })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
