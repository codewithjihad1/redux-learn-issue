import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "../components/BillDetails";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  return (
    <main class="py-16">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
          <div class="space-y-6">
            {cartProducts.map((curElm) => {
              return <CartItem curElm={curElm} />;
            })}
          </div>
          <BillDetails />
        </div>
      </div>
    </main>
  );
}
