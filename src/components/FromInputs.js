import { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../redux/product/actions";

export default function FromInputs() {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [url, setUrl] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  const addProduct = (e) => {
    e.preventDefault();
    dispatch(added({ name, category, url, price, quantity }));
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={addProduct}
        >
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button
            type="submit"
            id="lws-inputSubmit"
            className="submit"
            onClick={addProduct}
          >
            Add Product
          </button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
}
