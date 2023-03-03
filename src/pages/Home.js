import React from "react";
import FromInputs from "../components/FromInputs";
import Product from "../components/Product";

export default function Home() {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          <Product />
        </div>
        <FromInputs />
      </div>
    </main>
  );
}
